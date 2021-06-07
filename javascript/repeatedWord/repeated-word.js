'use strict'

let repeatedWord = s => {
    let seen = {}
    let strToArr = s.toLowerCase().replace(/[^a-z0-9 ]/g,'').split(' ')
    for(let i = 0; i< strToArr.length; i++){
        if(strToArr[i] in seen){
            return strToArr[i]
        }
        seen[strToArr[i]] = i
    }
    return 'no repetitive words'
}

module.exports=repeatedWord