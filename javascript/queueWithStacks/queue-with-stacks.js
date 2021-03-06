'use strict'

const Stack  = require('../stacksAndQueues/stack')

class PseudoQueue{
    constructor(){
        this.stack1 = new Stack()
        this.stack2 = new Stack()
    }

    enqueue(val){
        while(this.stack1.length>0){
            this.stack2.push(this.stack1.pop())
        }
        this.stack1.push(val)
        while(this.stack2.length>0){
            this.stack1.push(this.stack2.pop())
        }
        return this.stack1
    }

    dequeue(){
        if (this.stack1.peek()===false) return false
        return this.stack1.pop()
    }
}

module.exports = PseudoQueue