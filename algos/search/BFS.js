class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          //Left
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          } 
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value){
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null
  }

  BreadthFirstSearch(){
    let currentNode = this.root
    const queue = [];
    const list = [];
    queue.push(currentNode)
    while(queue.length) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if(currentNode.left) {
        queue.push(currentNode.left);
      }
      if(currentNode.right) {
        queue.push(currentNode.right);
      }

    }
  return list
  }

  BreadthFirstSearchR(queue, list) {
    if(!queue.length) return list 
    const currentNode = queue.shift();
    list.push(currentNode.value)
    if(currentNode.left) {
      queue.push(currentNode.left)
    }
    if(currentNode.right) {
      queue.push(currentNode.right)
    }
    return this.BreadthFirstSearch(queue, list)
  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

// console.log('BFS', tree.BreadthFirstSearch());
const result = tree.BreadthFirstSearchR([tree.root], [])
console.log('BFS', result)
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}


var rob = function (nums) {
  const memo = {};
  function helper(index) {
      if (index >= nums.length) return 0
      if (index in memo) return memo[index]
      const include = nums[index] + helper(index + 2)
      const exclude = helper(index + 1)
      memo[index] = Math.max(include, exclude)
      return memo[index]
  }
  return helper(0)
};


