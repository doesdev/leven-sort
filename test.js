'use strict'

const { runTests, test } = require('mvt')
const levenSort = require('./index')

runTests('Testing leven-sort', () => {
  test(`sorts simple text array`, () => {
    const sourceName = 'Bill Griffin'

    const nameAry = [
      'Carl Martinez',
      'Roger Davis',
      'William George',
      null,
      'Andrew Torres',
      'Billy Campbell',
      'Alan King',
      'Benjamin Wilson',
      'Bill Griffin',
      'Dennis Smith',
      'Billy Griffith'
    ]

    const expect = [
      'Bill Griffin',
      'Billy Griffith',
      'Billy Campbell',
      'Alan King',
      'William George',
      'Carl Martinez',
      'Roger Davis',
      'Benjamin Wilson',
      'Dennis Smith',
      'Andrew Torres',
      null
    ]

    const levSorted = levenSort(nameAry, sourceName)

    return test('samesies', JSON.stringify(levSorted), JSON.stringify(expect))
  })

  test(`sorts array of objects, with secondary sort`, () => {
    const sourceFirst = 'Bill'
    const sourceLast = 'Griffin'

    const nameObjAry = [
      { first: 'Carl', last: 'Martinez' },
      { first: 'Roger', last: 'Davis' },
      { first: 'William', last: 'George' },
      { first: 'Andrew', last: 'Torres' },
      { first: 'Billy', last: 'Campbell' },
      { first: null, last: null },
      { first: 'Alan', last: 'King' },
      { first: 'Benjamin', last: 'Wilson' },
      { first: 'Bill', last: 'Griffin' },
      { first: 'Dennis', last: 'Smith' },
      { first: 'Billy', last: 'Griffith' }
    ]

    const expect = [
      { first: 'Bill', last: 'Griffin' },
      { first: 'Billy', last: 'Griffith' },
      { first: 'Billy', last: 'Campbell' },
      { first: 'Carl', last: 'Martinez' },
      { first: 'Alan', last: 'King' },
      { first: 'William', last: 'George' },
      { first: 'Roger', last: 'Davis' },
      { first: 'Dennis', last: 'Smith' },
      { first: 'Andrew', last: 'Torres' },
      { first: 'Benjamin', last: 'Wilson' },
      { first: null, last: null }
    ]

    const levSorted = levenSort(nameObjAry, sourceFirst, 'first', sourceLast, 'last')

    return test('samesies', JSON.stringify(levSorted), JSON.stringify(expect))
  })

  test(`sorts array of objects by multiple keys`, () => {
    const source = 'Bill'

    const nameObjAry = [
      { first: 'Carl', last: 'Martinez' },
      { first: 'Roger', last: 'Davis' },
      { first: 'William', last: 'George' },
      { first: 'Andrew', last: 'Torres' },
      { first: 'Billy', last: 'Campbell' },
      { first: 'Alan', last: 'King' },
      { first: null, last: null },
      { first: 'Benjamin', last: 'Wilson' },
      { first: 'Bill', last: 'Griffin' },
      { first: 'Dennis', last: 'Smith' },
      { first: 'Billy', last: 'Griffith' }
    ]

    const expect = [
      { first: 'Bill', last: 'Griffin' },
      { first: 'Billy', last: 'Griffith' },
      { first: 'Billy', last: 'Campbell' },
      { first: 'Carl', last: 'Martinez' },
      { first: 'Alan', last: 'King' },
      { first: 'Benjamin', last: 'Wilson' },
      { first: 'William', last: 'George' },
      { first: 'Dennis', last: 'Smith' },
      { first: 'Roger', last: 'Davis' },
      { first: 'Andrew', last: 'Torres' },
      { first: null, last: null }
    ]

    const levSorted = levenSort(nameObjAry, source, ['first', 'last'])

    return test('samesies', JSON.stringify(levSorted), JSON.stringify(expect))
  })
})
