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
    const node = new Node(value);
    if (!this.length) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
  insert(position, value) {
    const node = new Node(value);
    //position> this.length
    if (position < 0 || position > this.length) {
      return false;
    }
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let prev = null;
      let index = 0;
      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }
      prev.next = node;
      node.next = current;
    }
    this.length++;
  }
  get(position) {
    if (position < 0 || position >= this.length) {
      return false;
    }
    let current = this.head;
    let index = 0;
    while (index < position) {
      current = current.next;
      index++;
    }
    return current.value;
  }
  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return false;
    }
    let current = this.head;
    if (position === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;
      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }
      prev.next = current.next;
    }
    this.length--;
    return current.value;
  }
  remove(element) {
    this.removeAt(this.indexOf(element));
  }
  indexOf(element) {
    let current = this.head;
    let index = 0;
    while (current.next) {
      if (current.value === element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
  size() {
    return this.length;
  }
  isEmpty() {
    return !this.length;
  }
  print() {
    const list = [];
    let current = this.head;
    while (current.next) {
      console.log(current);
      list.push(current.value);
      current = current.next;
    }
    console.log(list.join(" "));
  }
}
const list = new LinkedList();
console.log(list.isEmpty());
list.add(0);
list.add(1);
list.insert(0, -1);
list.insert(3, 2);
//console.log(list.removeAt(3));

console.log(list);
list.print();
