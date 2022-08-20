import levenSrc from 'leven'

const bufChar = String.fromCharCode(2000)

export default (ary, src1, key1, src2, key2) => {
  let max = 0

  ary.forEach(function (el) {
    if (!el) return
    if (!key1 && !key2 && el.length > max) max = el.length

    if (key1 instanceof Array) {
      return key1.forEach(function (k) {
        if (k && el[k] && el[k].length > max) max = el[k].length
      })
    }

    if (key1 && el[key1] && el[key1].length > max) max = el[key1].length
    if (key2 && el[key2] && el[key2].length > max) max = el[key2].length
  })

  const maximize = function (val) {
    if (!val || val.length === max) return val
    return val + Array(max - val.length).join(bufChar)
  }

  const maxDist = function (a, b, c) {
    const aLen = (a || '').length
    const bLen = (b || '').length

    return (aLen > bLen ? aLen : bLen) || 1
  }

  const leven = function (a, b) {
    if (a === b) return 0

    b = maximize(b)

    if (!a || !b) return maxDist(a, b)

    return levenSrc(a, b)
  }

  const levSort = function (src, a, b) {
    if (!a) return 1
    if (!b) return -1

    a = leven(src, a)
    b = leven(src, b)

    return a - b
  }

  const levMinInAry = function (array, src) {
    let min = 1000
    const len = array.length

    for (let counter = 0; counter < len; counter++) {
      const val = array[counter]

      if (val && val.length && val.length > 0) {
        const levScore = leven(src, array[counter])
        if (levScore < min) min = levScore
      }
    }

    return min
  }

  const sorted = ary.sort(function (a, b) {
    if (key1 instanceof Array) {
      const aLev = levMinInAry(key1.map(function (k) { return a[k] }), src1)
      const bLev = levMinInAry(key1.map(function (k) { return b[k] }), src1)

      return aLev - bLev
    }

    if (!key1 && !key2) return levSort(src1, a, b)

    if (!key2) return levSort(src1, a[key1], b[key1])

    const score = levSort(src1, a[key1], b[key1]) * 10

    return score + levSort(src2, a[key2], b[key2])
  })

  return sorted
}
