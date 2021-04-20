'use strict';

const insertShift = require('../array-shift')

describe('Array Shift', ()=>{
    it('test 1', ()=>{
        expect(insertShift([2,4,6,8], 5)).toStrictEqual([2,4,5,6,8])
    })
    it('test 2', ()=>{
        expect(insertShift([4,8,15,23,42], 16)).toStrictEqual([4,8,15,16,23,42])
    })
})