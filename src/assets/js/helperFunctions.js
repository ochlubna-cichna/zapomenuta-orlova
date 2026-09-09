export function convertCoord(NS, EW) {
  function convertDm(dd) {
    dd = Math.abs(dd)
    const deg = Math.floor(dd)
    return `${deg}° ${((dd - deg) * 60).toFixed(3)}`
  }

  return `${NS > 0 ? 'N' : 'S'} ${convertDm(NS)} ${
    EW > 0 ? 'E' : 'W'
  } ${convertDm(EW)}`
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// Vite's import.meta.glob() keys are resolved file paths whose exact
// prefix depends on how the glob pattern was written, so look up by
// suffix instead of assuming the full key.
export function globFind(globObject, suffix) {
  const key = Object.keys(globObject).find((k) => k.endsWith(suffix))
  return key ? globObject[key] : undefined
}

// Some place names carry an explicit prefix ("R1. ...", "O2. ...") that
// should be shown instead of a plain sequential number.
export function displayLabel(name, index) {
  const match = name.match(/^([A-Z]\d+)\./)
  return match ? match[1] : String(index + 1)
}

// Strip a leading "R1. "/"O2. " style prefix from a place name, since
// displayLabel() already surfaces that prefix separately — avoids
// showing it twice when label and name are rendered together.
export function stripLabelPrefix(name) {
  return name.replace(/^[A-Z]\d+\.\s*/, '')
}
