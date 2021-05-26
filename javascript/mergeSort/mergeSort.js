"use strict";

let mergeSort = (arr) => {
  let n = arr.length;
  if (n > 1) {
    let mid = n / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);
    mergeSort(left);
    mergeSort(right);
    return merge(left, right, arr);
  }
};

let merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i += 1;
    } else {
      arr[k] = right[j];
      j += 1;
    }
    k += 1;
  }
  while (i < left.length) {
    arr[k] = left[i];
    i += 1;
    k += 1;
  }
  while (j < right.length) {
    arr[k] = right[j];
    j += 1;
    k += 1;
  }
  return arr;
};

module.exports = mergeSort;
