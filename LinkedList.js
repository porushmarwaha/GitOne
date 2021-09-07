class Node {
  constructor(value) {
    this.value = value;
    this.Next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToLast(value) {
    let node = new Node(value);

    if (this.head === null) {
      this.head = this.tail = node;
      this.head.Next = null;
    } else {
      this.tail.Next = node;
      this.tail = node;
    }
  }
  addToFront(value) {
    let node = new Node(value);

    if (this.head === null) {
      this.head = this.tail = node;
      this.head.Next = null;
    } else {
      node.Next = this.head;
      this.head = node;
    }
  }
  addAtNthPosition(whichValue, value) {
    let node = new Node(value);
    for (let current = this.head; current !== null; current = current.Next) {
      if (current.value === whichValue) {
        node.Next = current.Next;
        current.Next = node;
      }
    }
  }

  print() {
    for (let current = this.head; current !== null; current = current.Next)
      console.log(current.value);
  }
}

let list = new LinkedList();
list.addToLast(10);
list.addToLast(20);
list.addToLast(30);
list.addToFront(5);
list.addAtNthPosition(21, 25);
list.print();
