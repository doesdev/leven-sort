# leven-sort   [![npm version](https://badge.fury.io/js/leven-sort.svg)](http://badge.fury.io/js/leven-sort)   [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Simply sort by similarity, starring Levenshtein via [leven](https://github.com/sindresorhus/leven).

Allows sorting of an array of strings or array of objects. For arrays of objects
you can sort by up to two keys.

## install
`npm i leven-sort --save`

## api

leven-sort only exports one function that takes the followings arguments:
`arrayToSort`: Your array object (will be sorted in place as it uses Array.sort)
`sourceText`: The text to check similarity of
`key1 (optional)`: For array of objects, this is the property of each object to be compared
`sourceText2 (optional)`: If performing a secondary sort, this is the text to check key2 by
`key2 (optional)`: For secondary sort on object, this is the second property to check

## usage

Basic Example (sort simple text array)
```javascript
const levenSort = require('leven-sort')
const sourceName = 'Bill Griffin'
const nameAry = [
  'Carl Martinez',
  'Roger Davis',
  'William George',
  'Andrew Torres',
  'Billy Campbell',
  'Alan King',
  'Benjamin Wilson',
  'Bill Griffin',
  'Dennis Smith',
  'Billy Griffith'
]
let levSorted = levenSort(nameAry, sourceName)
```

Advanced Example (sort array of objects by up to two keys)
```javascript
const levenSort = require('leven-sort')
const sourceFirst = 'Bill'
const sourceLast = 'Griffin'
const nameObjAry = [
  { first: 'Carl', last: 'Martinez' },
  { first: 'Roger', last: 'Davis' },
  { first: 'William', last: 'George' },
  { first: 'Andrew', last: 'Torres' },
  { first: 'Billy', last: 'Campbell' },
  { first: 'Alan', last: 'King' },
  { first: 'Benjamin', last: 'Wilson' },
  { first: 'Bill', last: 'Griffin' },
  { first: 'Dennis', last: 'Smith' },
  { first: 'Billy', last: 'Griffith' }
]

let levSorted = levenSort(nameAry, sourceFirst, 'first', sourceLast, 'last')

```
