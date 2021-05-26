"use strict";

let swap = (arr, i, low) => {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
};

let partion = (arr, left, right) => {
  let pivot = arr[right];
  let low = left - 1;
  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      low += 1;
      swap(arr, i, low);
    }
  }
  swap(arr, right, low + 1);
  return low + 1;
};

let quickSort = (arr, left, right) => {
  if (left < right) {
    let position = partion(arr, left, right);
    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }
  return arr;
};

module.exports = quickSort;
