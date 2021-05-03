'use strict'

const PseudoQueue = require('../queue-with-stacks')

describe("QUEUE WITH STACKS",()=>{
    it('Should properly enqueue values',()=>{
        let queue = new PseudoQueue()
        let addqueue = queue.enqueue(5)
        expect(addqueue[queue.stack1.length-1]).toEqual(5)
        expect(addqueue.length).toEqual(1)
    })

    it('Should properly enqueue multiple values',()=>{
        let queue = new PseudoQueue()
        queue.enqueue(10)
        queue.enqueue(15)
        queue.enqueue(20)
        let addQ = queue.enqueue(5)
        expect(addQ.length).toEqual(4)
        expect(addQ[queue.stack1.length-1]).toEqual(10)
    })

    it('Should throw an error for dequeueing a empty stack',()=>{
        let q = new PseudoQueue()
        expect(q.dequeue()).toBeFalsy()
    })

    it('Should dequeue the first entered item',()=>{
        let q = new PseudoQueue()
        q.enqueue(20)
        q.enqueue(15)
        q.enqueue(15)
        expect(q.dequeue()).toEqual(20)
    })
})