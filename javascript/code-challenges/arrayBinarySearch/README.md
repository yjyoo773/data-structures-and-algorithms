# Challenge Summary
<!-- Short summary or background information -->
Create a function that takes in an array and a number. Implement a binary search which searches the given number in the array.
## Challenge Description
<!-- Description of the challenge -->
Using a binary search is to compare the number with the mid number in the array. If it is not equal, readjust the mid number and sub array to repeat until found. This saves much more time in searching for data.
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The approach itself is self explanatory. The confusing part was how to correctly loop it given that each array will be different. I used a `while` loop which loops until both side of the endpoint which I change accordingly have a difference of one. If the mid point did not equal to that point it meant the number did not exist in the array.
## Solution
<!-- Embedded whiteboard image -->
![whiteboard](./assets/arr-binary-search.jpeg)