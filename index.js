'use strict'

var levenSrc = require('leven')

var maxDist = function (a, b, c) {
  var aLen = (a || '').length
  var bLen = (b || '').length

  return (aLen > bLen ? aLen : bLen) || 1
}

var leven = function (a, b) {
  if (a === b) return 0
  if (!a || !b) return maxDist(a, b)

  return levenSrc(a, b)
}

var levSort = function (src, a, b) {
  if (!a) return 1
  if (!b) return -1

  a = leven(src, a)
  b = leven(src, b)

  return a - b
}

var levMinInAry = function (array, src) {
  var min = 1000
  var len = array.length

  for (var counter = 0; counter < len; counter++) {
    var val = array[counter]

    if (val && val.length && val.length > 0) {
      var levScore = leven(src, array[counter])
      if (levScore < min) min = levScore
    }
  }

  return min
}

module.exports = function (ary, src1, key1, src2, key2) {
  var sorted = ary.sort(function (a, b) {
    if (key1 instanceof Array) {
      var aLev = levMinInAry(key1.map(function (k) { return a[k] }), src1)
      var bLev = levMinInAry(key1.map(function (k) { return b[k] }), src1)

      return aLev - bLev
    }

    if (!key1 && !key2) return levSort(src1, a, b)

    if (!key2) return levSort(src1, a[key1], b[key1])

    var score = levSort(src1, a[key1], b[key1]) * 10

    return score + levSort(src2, a[key2], b[key2])
  })

  return sorted
}
