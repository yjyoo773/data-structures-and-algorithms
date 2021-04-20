'use strict'

function insertShift(arr,num){
    let result = []
    let half = Math.ceil(arr.length / 2)
    for (let i = 0; i < half; i++){
        result.push(arr[i])
    }
    result.push(num)
    for (let j = half; j < arr.length; j++){
        result.push(arr[j])
    }
    return result
}
module.exports = insertShift