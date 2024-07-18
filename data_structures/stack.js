class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    // Method to push an element onto the stack
    push(data) {
        const newNode = new Node(data);
        if (!this.top) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
    }

    // Method to pop an element from the stack
    pop() {
     if(!this.top) return -1;
     const poppedNode = this.top;
     this.top = this.top.next;
     this.size--
     return this;
    }

    // Method to peek the top element of the stack without removing it
    peek() {
        if (!this.top) {
            return "Stack is empty";
        }
        return this.top.data;
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Method to get the size of the stack
    getSize() {
        return this.size;
    }
   
    // Method to clear the stack
    clear() {
        this.top = null;
        this.size = 0;
    }

    // Method to print the stack
    printStack() {
        let current = this.top;
        let str = "";
        while (current) {
            str += current.data + " ";
            current = current.next;
        }
        console.log(str);
    }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.printStack(); // Output: 3 2 1
console.log(stack.peek()); // Output: 3
console.log(stack.pop()); // Output: 3
console.log(stack)
stack.printStack(); // Output: 2 1
console.log(stack.isEmpty()); // Output: false
console.log(stack.getSize()); // Output: 2
stack.clear();
console.log(stack.isEmpty()); // Output: true
stack.pop()
stack.pop()
stack.pop()
console.log(stack.pop()) // Output: -1

