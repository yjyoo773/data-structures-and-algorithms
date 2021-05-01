'use strict'

class Queue {
    constructor() {
      this.length = 0
      this.next = null
    }
  
    enqueue(val) {
      this[this.length] = val
      if (!this.next) this.next = 0
      this.length++
      return this
    }
  
    dequeue() {
      let temp = this.next
      let result = this[this.next]
      delete this[this.next]
      this.length--
      this.next = temp + 1
      if (this.length === 0) this.next = null
      return result
    }
  
    peek() {
  
      return this[this.next]
    }
    isEmpty() {
      if (this.length === 0) return true
      return false
    }
  }

module.exports = Queue