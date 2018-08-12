'use strict'

import test from 'ava'
import levenSort from './index'

test(`sorts simple text array`, (assert) => {
  let sourceName = 'Bill Griffin'
  let nameAry = [
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
  let expect = [
    'Bill Griffin',
    'Billy Griffith',
    'Billy Campbell',
    'Alan King',
    'William George',
    'Carl Martinez',
    'Roger Davis',
    'Dennis Smith',
    'Benjamin Wilson',
    'Andrew Torres'
  ]
  let levSorted = levenSort(nameAry, sourceName)
  assert.deepEqual(levSorted, expect)
})

test(`sorts array of objects, with secondary sort`, (assert) => {
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
  let expect = [
    { first: 'Bill', last: 'Griffin' },
    { first: 'Billy', last: 'Griffith' },
    { first: 'Billy', last: 'Campbell' },
    { first: 'Carl', last: 'Martinez' },
    { first: 'William', last: 'George' },
    { first: 'Alan', last: 'King' },
    { first: 'Roger', last: 'Davis' },
    { first: 'Dennis', last: 'Smith' },
    { first: 'Andrew', last: 'Torres' },
    { first: 'Benjamin', last: 'Wilson' }
  ]
  let levSorted = levenSort(nameObjAry, sourceFirst, 'first', sourceLast, 'last')
  assert.deepEqual(levSorted, expect)
})

test(`sorts array of objects by multiple keys`, (assert) => {
  const source = 'Bill'
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
  let expect = [
    { first: 'Bill', last: 'Griffin' },
    { first: 'Billy', last: 'Campbell' },
    { first: 'Billy', last: 'Griffith' },
    { first: 'Carl', last: 'Martinez' },
    { first: 'Alan', last: 'King' },
    { first: 'William', last: 'George' },
    { first: 'Benjamin', last: 'Wilson' },
    { first: 'Dennis', last: 'Smith' },
    { first: 'Roger', last: 'Davis' },
    { first: 'Andrew', last: 'Torres' }
  ]
  let levSorted = levenSort(nameObjAry, source, ['first', 'last'])
  assert.deepEqual(levSorted, expect)
})
