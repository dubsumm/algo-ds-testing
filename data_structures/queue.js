class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    peek() {
        return this.front ? this.front.data : -1;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.front) {
            this.front = newNode
            this.rear = this.front;
            this.size++;
        } else {
            
            this.rear.next = newNode;
            this.rear = newNode;
            this.size++;
        }
        return this
    }

    dequeue() {
        if(!this.front) return -1;
        if(this.front === this.rear) {
            this.rear = null;
        }
        const dequeuedNode = this.front;
        this.front = this.front.next;
        this.size--;
        return dequeuedNode.data;
    }
}

const queue = new Queue();
queue.enqueue(1);
console.log(queue);
queue.enqueue('Timmy');
console.log(queue);
queue.dequeue()
queue.dequeue()
console.log(queue.dequeue())
console.log(queue);
// queue.enqueue('Booty');
// console.log(queue);
// console.log(queue.peek());
// queue.dequeue()
// console.log(queue.peek());//
