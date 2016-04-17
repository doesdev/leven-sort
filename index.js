'use strict'

// Setup
const leven = require('leven')

// Export main function
module.exports = function (ary, src1, key1, src2, key2) {
  if (key1 instanceof Array) {
    let levMinInAry = function (array) {
      let min = 1000
      let len = array.length
      for (let counter = 0; counter < len; counter++) {
        let levScore = leven(src1, array[counter])
        if (levScore < min) min = levScore
      }
      return min
    }
    return ary.sort((a, b) =>
      levMinInAry(key1.map((k) => a[k])) - levMinInAry(key1.map((k) => b[k]))
    )
  }
  return ary.sort(function (a, b) {
    if (!key1 && !key2) return leven(src1, a) < leven(src1, b) ? -1 : 1
    if (!key2) return leven(src1, a[key1]) < leven(src1, b[key1]) ? -1 : 1
    let score = 0
    let a1 = leven(src1, a[key1])
    let b1 = leven(src1, b[key1])
    let a2 = leven(src2, a[key2])
    let b2 = leven(src2, b[key2])
    if (a1 < b1) score = score - 10
    if (a1 > b1) score = score + 10
    if (a2 < b2) score = score - 1
    if (a2 > b2) score = score + 1
    return score
  })
}
