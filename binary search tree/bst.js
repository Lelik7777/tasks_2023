class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  add(value) {
    this.root = addWithin(this.root, value);

    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }
      if (value === node.value) {
        return node;
      }
      if (value < node.value) {
        node.left = addWithin(node.left, value);
      }

      if (value > node.value) {
        node.right = addWithin(node.right, value);
      }
      return node;
    }
  }
  has(value) {}
  remove(value) {}
  min() {}
  max() {}
  leftTraverse() {}
}

const bst = new BinarySearchTree();
bst.add(13);
bst.add(15);
bst.add(9);
bst.add(20);
bst.add(18);
bst.add(32);
bst.add(25);
//bst.remove(19);
console.log(bst);
console.log(bst.has(44));
console.log(bst.has(19));
console.log("min value", bst.min());
console.log("max value", bst.max());
console.log(bst.leftTraverse((val) => console.log(val)));
