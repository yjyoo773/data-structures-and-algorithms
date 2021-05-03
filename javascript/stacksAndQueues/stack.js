'use strict'
function Stack() {
    this.length = 0
  }
  
  Stack.prototype.push = function(val)  {
    this[this.length++] = val
    top = val
    return this
  }
  
  Stack.prototype.pop = function() {
    if (this.length === 0) return false
    const result = this[this.length-1]
    this[this.length--]
    delete this[this.length]
    return result
  }
  
  Stack.prototype.peek =function() {
    if (this.length === 0) return false
  
    return this[this.length-1]
  }
  
  Stack.prototype.isEmpty = function() {
      if (this.length === 0) return true
      return false
  }

module.exports = Stack