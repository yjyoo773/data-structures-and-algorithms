'use strict'

function binarySearch(arr,num){
    let left = 0
    let right = arr.length - 1
    while (left + 1 !== right){
        let mid = Math.ceil((left + right) / 2)
        if (arr[mid] === num){
            return mid
        }
        if (arr[mid] < num){
            left = mid
        }
        if (arr[mid] > num){
            right = mid
        }
    }
    return -1
}

module.exports = binarySearch