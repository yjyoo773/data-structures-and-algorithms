# Insertion Sort
```
  InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
```

### Algorithm
The following pseudo code above goes through the following steps.
1. The function accepts an array that consists of integer.
2. Loop over the array using a for-loop starting the index `i` from 1 to the length of array.
3. During a iteration, set `j` as `i-1` and the current value of the array as `temp`.
4. While `j` is greater or equal than 0 and the temporary variable is less than the value for index `j` replace the value of the next value of `j` with the current `j`.
5. Subtract one from `j` until it is less than 0 or the temporary variable is less than `arr[j]`.
6. Set the value of `arr[j+1]` as `temp`

![IMG_D63A0C627CAB-1](https://user-images.githubusercontent.com/60489495/119403402-20b6d700-bc93-11eb-8092-26b9a916b92b.jpeg)

```JavaScript
function insertSort(arr){
  for(let i = 1; i<arr.length;i++){
    let j = i - 1 
    let temp = arr[i]
    while(j >= 0 && temp < arr[j]){
      arr[j+1] = arr[j]
      j -= 1
    }
    arr[j+1] = temp
  }
  return arr
}
```
