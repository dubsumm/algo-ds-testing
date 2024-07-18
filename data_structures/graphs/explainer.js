// Structure we want to represent
//   2 - 0
//  / \
// 1 - 3

// Edge List 
const graph1 = [[0,2 ][2,3], [2,1], [1,3]]; // the first value is the node and the second value is the connection to the node

// Adjacent List
const graph2 = [[2], [2,3], [0,1,3], [1,2]];  //the index of the array is the node and the values are the node's connections
// also An Adjacent List, Objects can also be used and may be more clear when the nodes are not numbers/not in order
const graph3 = {
  0: [2],
  1: [2,3],
  2: [0,1,3],
  3: [1,2]
}

// Adjacent Matrix
const grap4 = [
  [0,0,1,0],
  [0,0,1,1],
  [1,1,0,1],
  [0,1,1,0]
]
// can also be an Object 
const graph5 = {
  0: [0,0,1,0],
  1: [0,0,1,1],
  2: [1,1,0,1],
  3: [0,1,1,0]
}
