'use strict'

// Setup
const leven = require('leven')

// Export main function
module.exports = (ary, src1, key1, src2, key2) => {
  return ary.sort((a, b) => {
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
