'use strict'

function multiBracketValidation(input){
    let MAP = {')':'(','}':'{',']':'['}
    let stack = []
  
    for (let i = 0; i < input.length; i++){
      if (input[i] in MAP){
        let temp = stack.pop()
        if (temp !== MAP[input[i]]) return false
      } else if (Object.values(MAP).includes(input[i])){
        stack.push(input[i])
      }
      else{
        continue
      }
    }
    return true
  }
  
module.exports = multiBracketValidation  