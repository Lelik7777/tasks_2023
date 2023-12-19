class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootItem = null;
  }
  root() {
    return this.rootItem ? this.rootItem : null;
  }

  add(data) {
    this.rootItem = addNode(this.rootItem, data);

    function addNode(node, value) {
      if (!node) {
        return new Node(value);
      }
      if (node.data === value) {
        return node;
      }
      if (value < node.data) {
        node.left = addNode(node.left, value);
      } else {
        node.right = addNode(node.right, value);
      }

      return node;
    }
  }

  has(data) {
    return searchValue(this.rootItem, data);

    function searchValue(node, value) {
      if (!node) {
        return false;
      }
      if (value === node.value) {
        return true;
      }
      return value < node.value ? searchValue(node.left, value) : searchValue(node.right, value);
    }
  }

  find(data) {
    return searchNode(this.rootItem, data);

    function searchNode(node, value) {
      if (!node) {
        return null;
      }
      if (value === node.value) {
        return node;
      }
      return value < node.value ? searchNode(node.left, value) : searchNode(node.right, value);
    }
  }

  // remove(data) {
  //   this.rootItem = removeNode(this.rootItem, data);

  //   function removeNode(node, value) {
  //     if (!node) {
  //       return null;
  //     }
  //     if (value < node.value) {
  //       node.left = removeNode(node.left, value);
  //       return node;
  //     } else if (value > node.value) {
  //       node.right = removeNode(node.right, value);
  //       return node;
  //     } else {
  //       if (!node.left && !node.right) {
  //         return null;
  //       }
  //       if (!node.left) {
  //         node = node.right;
  //         return node;
  //       }
  //       if (!node.right) {
  //         node = node.left;
  //         return node;
  //       }
  //       let minRightNode = node.right;
  //       while (minRightNode.left) {
  //         minRightNode = minRightNode.left;
  //       }
  //       node.value = minRightNode.value;
  //       node.right = removeNode(node.right, minRightNode.value);
  //       return node;
  //     }
  //   }
  // }

  min() {
    if (!this.rootItem) {
      return null;
    }
    let node = this.rootItem;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootItem) return null;
    let node = this.rootItem;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

const tree = new BinarySearchTree();

tree.add(1);

tree.add(2);

tree.add(3);

tree.add(4);

tree.add(5);
console.log(tree);

console.log(tree.root().data); // => 1;

console.log(tree.min()); // => 1

console.log(tree.max()); //=> 5

// tree.remove(5);

// tree.has(5); // => false

// tree.max(); //=> 4
// console.log(tree);
