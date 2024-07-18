class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}


class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value > value) {
          if (currentNode.left === null) {
            currentNode.left = newNode
            return this
          } else {
            currentNode = currentNode.left
          }
        } else if (currentNode.value < value) {
          if (currentNode.right === null) {
            currentNode.right = newNode
            return this
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }


  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  };

  remove(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) { // if value is less than current node value, go left
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) { // if value is greater than current node value, go right
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        if (currentNode.right === null) {
          if (parentNode === null) { // Option 1: No right child
            this.root = currentNode.left; // if parent is null make root null
          } else {
            if (currentNode.value < parentNode.value) { // if current < parent, make current left child, parents left child
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) { // if current > parent, make current left child, parents right child
              parentNode.right = currentNode.left;
            }
          }
        } else if (currentNode.right.left === null) { // Option 2: Right child which doesn't have a left child
          if (parentNode === null) {
            this.root = currentNode.left; // if parent is null make root null
          } else {
            currentNode.right.left = currentNode.left; // make current.right.left , current.left
            if (currentNode.value < parentNode.value) { // if current < parent, make current right, parent left
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) { // if current > parent, make current right, parent right
              parentNode.right = currentNode.right;
            }
          }
        } else { // Option 3: Right child that has a left child
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true
      }
    }
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
tree.remove(20)
console.log(JSON.stringify(traverse(tree.root)))
console.log(tree.lookup(20))

//          9
//    4       20
//  1   6  15   170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}