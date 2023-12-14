class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  add(value) {
    if (!this.length) {
      this.head = new Node(value);
    } else {
    }
  }
}
