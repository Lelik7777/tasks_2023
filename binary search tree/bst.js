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
  has(value) {
    return searchWithin(this.root, value);

    function searchWithin(node, value) {
      if (!node) {
        return false;
      }
      if (value === node.value) {
        return true;
      }
      return value < node.value ? searchWithin(node.left, value) : searchWithin(node.right, value);
    }
  }
  remove(value) {
    this.root = removeNode(this.root, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }
      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRightNode = node.right;
        while (minRightNode.left) {
          minRightNode = minRightNode.left;
        }
        node.value = minRightNode.value;
        node.right = removeNode(node.right, minRightNode.value);

        return node;
      }
    }
  }
  min() {
    if (!this.root) {
      return;
    }
    let node = this.root;
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }
  max() {
    if (!this.root) {
      return;
    }
    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    return node.value;
  }
  leftTraverse(cb) {
    doLeftTraverse(this.root, cb);

    function doLeftTraverse(node, cb) {
      if (node) {
        doLeftTraverse(node.left, cb);
        cb(node.value);
        doLeftTraverse(node.right, cb);
      }
    }
  }
  find(data) {
    return searchNode(this.root, data);

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
  rightTraverse(cb) {
    doRightTraverse(this.root, cb);

    function doRightTraverse(node, cb) {
      if (node) {
        doRightTraverse(node.right, cb);
        cb(node.value);
        doRightTraverse(node.left, cb);
      }
    }
  }
}

const bst = new BinarySearchTree();
bst.add(13);
bst.add(15);
bst.add(9);
bst.add(20);
bst.add(18);
bst.add(32);
bst.add(25);
//bst.remove(18);
console.log(bst);
console.log(bst.has(44));
console.log(bst.has(15));
console.log("min value", bst.min());
console.log("max value", bst.max());
console.log(bst.leftTraverse((val) => console.log(val)));
console.log(bst.rightTraverse((val) => console.log(val)));
console.log(bst.find(25));
