import locations from '../../../src/assets/data/locations.json'

// Mirrors Map.vue's `sortedForDisplay` computed: sidebar is sorted for
// display (1-12 in original order, then R/O prefixed places grouped by
// letter — R before O — and ascending number) while the underlying
// place/index/URL mapping stays untouched.
function displayOrderedNames() {
  const letterRank = { R: 0, O: 1 }
  const names = Object.keys(locations)

  return names
    .map((name, index) => ({ name, index }))
    .sort((a, b) => {
      const aExtra = a.index >= 12
      const bExtra = b.index >= 12

      if (!aExtra && !bExtra) return a.index - b.index
      if (!aExtra) return -1
      if (!bExtra) return 1

      const aMatch = a.name.match(/^([A-Z])(\d+)\./)
      const bMatch = b.name.match(/^([A-Z])(\d+)\./)
      const aLetter = aMatch ? aMatch[1] : ''
      const bLetter = bMatch ? bMatch[1] : ''

      if (aLetter !== bLetter)
        return (letterRank[aLetter] ?? 99) - (letterRank[bLetter] ?? 99)

      const aNum = aMatch ? parseInt(aMatch[2], 10) : 0
      const bNum = bMatch ? parseInt(bMatch[2], 10) : 0
      return aNum - bNum
    })
    .map(({ name }) => name)
}

describe('Map page', () => {
  before(() => {
    cy.visit('/mapa')
  })

  context('Aside', () => {
    it(`Should list all locations (${Object.keys(locations).length})`, () => {
      cy.get('aside ol')
        .children()
        .should('have.length', Object.keys(locations).length)

      const expectedOrder = displayOrderedNames()

      cy.get('aside ol')
        .children()
        .each(($el, index) => {
          expect($el).to.contain(expectedOrder[index])
        })
    })

    it('Should link each item to its true original index (URL mapping unaffected by display sort)', () => {
      const expectedOrder = displayOrderedNames()
      const names = Object.keys(locations)

      cy.get('aside ol')
        .children()
        .each(($el, displayIndex) => {
          const trueIndex = names.indexOf(expectedOrder[displayIndex])
          cy.wrap($el)
            .find('a')
            .should('have.attr', 'href')
            .and('include', `/misto/${trueIndex + 1}`)
        })
    })

    context('Initial state test', () => {
      context('Mobile resolution', () => {
        beforeEach(() => {
          cy.viewport('iphone-7')
          cy.reload()
        })

        it('Aside should be closed', () => {
          cy.get('aside').should('have.class', 'closed')
        })

        after(() => {
          cy.viewport(1000, 660)
        })
      })

      context('Desktop resolution initial state test', () => {
        beforeEach(() => {
          cy.viewport(1920, 1080)
          cy.reload()
        })

        it('Aside should be opened', () => {
          cy.get('aside').should('have.class', 'opened')
        })

        after(() => {
          cy.viewport(1000, 660)
        })
      })
    })
  })

  context('Map', () => {
    it('Should open popup with each query param', () => {
      let index = 0
      for (const [place, details] in Object.entries(locations)) {
        cy.visit('/mapa?h=' + (index + 1))
        cy.get('.leaflet-popup-content').should('exist')
        index++
      }
    })
  })
})
