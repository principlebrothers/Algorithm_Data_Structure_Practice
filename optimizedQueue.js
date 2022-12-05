class Queue {
  constructor() {
    this.items = {};
    this.real = 0;
    this.front = 0;
  }

  //Add to queue
  enqueue(element) {
    this.items[this.real] = element;
    this.real += 1;
  }

  // Remove from queue
  dequeue() {
    const removed = this.items[this.front];
    delete this.items[this.front];
    this.front += 1;
    return removed;
  }

  isEmpty() {
    return this.real - this.front === 0;
  }

  size() {
    return this.real - this.front;
  }

  // Element in the beginning or the first element
  peek() {
    return this.items[this.front]
  }

  print() {
    console.log(this.items)
  }
}

const queue = new Queue();

for (let i = 1; i < 6; i++){
  queue.enqueue(i)
}
queue.print()

console.log(queue.dequeue())
console.log(queue.peek())
queue.print()

console.log("peek:" + queue.peek())

queue.print()

console.log(queue.isEmpty())
console.log(queue.size())