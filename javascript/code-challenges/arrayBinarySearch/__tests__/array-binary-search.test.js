'use strict'

const arrBinarySearch = require('../array-binary-search')

describe('ARRAY BINARY SEARCH:', ()=>{
    it('test 1', ()=>{
        expect(arrBinarySearch([4,8,15,16,23,42], 15)).toStrictEqual(2)
    })
    it('test 2', ()=>{
        expect(arrBinarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1)
    })
    it('test 3', ()=>{
        expect(arrBinarySearch([1, 2, 3, 5, 6, 7], 4)).toStrictEqual(-1)
    })
})