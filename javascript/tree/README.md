# Binary Search Tree
<!-- Short summary or background information -->
A data structure of a 'binary tree / binary search tree'. The data structure starts with the `root` node. Upto two other nodes can be attached to each node as `left` and `right`. As for the binary search tree, values less than the current node are assigned to the left of the node and values greater are assigned right. This allows the searching values within this data structure have a time complexity of O(N).
## Challenge
<!-- Description of the challenge -->
- Create a method `add` which takes a value arguement. If the root is empty this value becomes the root. If the value is greater than the root and the right is empty it fulfills that spot. This continues if the right is not empty. Similarly if the value is less than the root and so on it is added to the left of the node.
- Create three methods to traverse the tree preorder, inorder, and post order.
- Create a method `findMaxValue` which returns the node with the max value in the tree. This is implemented by using one of the traversing methods and finding the max value within the returned array.
- Create a method `breadthFirst` which does a level order traverse. Create a queue with the root and an empty array to store values. As long as the queue is not empty, perform a for loop with the length of the queue. First we dequeue the queue adding it to the returning array. Then if the node has a left we add it to the queue followed with the right node. This allows us to exit the for loop but repeats itself as the queue increased. This procedure is repeated until we reach the bottom leaves of the tree.
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
NA
## API
<!-- Description of each method publicly available to your Linked List -->
NA
