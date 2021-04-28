'use strict'

const ll = require('../../../linked-list/lib/linked-list.js')
const zipLists = require('../ll-zip.js')

describe('Linked List Zip',()=>{
    it('should pass ',()=>{
        let l1 = new ll
        l1.append(1)
        l1.append(3)
        l1.append(2)
        let l2 = new ll
        l2.append(5)
        l2.append(9)
        l2.append(4)
        let expected = '{1} -> {5} -> {3} -> {9} -> {2} -> {4} -> NULL'
        expect(zipLists(l1,l2).toString()).toEqual(expected)
    })

    it('should pass ',()=>{
        let l1 = new ll
        l1.append(1)
        l1.append(3)
        l1.append(2)
        let l2 = new ll
        l2.append(5)
        l2.append(9)
        let expected = '{1} -> {5} -> {3} -> {9} -> {2} -> NULL'
        expect(zipLists(l1,l2).toString()).toEqual(expected)
    })
})