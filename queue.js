class Queue {
  constructor() {
    this.items = [];
  }

  // Enqueue Add elemnt to the beginning of the list
  enqueue(element) {
    this.items.push(element)
  }

  dequeue() {
    return this.items.shift()
  }

  isEmpty() {
    return this.items.length === 0
  }

  // Show the element at the begining of the list
  peek() {
    if (!this.isEmpty()) return this.items[0];
    return null;
  }

  size() {
    return this.items.length
  }

  print() {
    console.log(this.items.toString())
  }
}

const queue = new Queue();

queue.enqueue(20)
queue.enqueue(10)
queue.enqueue(30)

console.log(queue.size())
queue.print()
console.log(queue.dequeue())
console.log(queue.peek())