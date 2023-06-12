class BSTNode {
  val: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(val: number, left?: BSTNode, right?: BSTNode) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
  }
}

class BST {
  root: BSTNode | null;

  constructor() {
    this.root = null;
  }

  insert(val: number): BST {
    const newNode = new BSTNode(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let curr = this.root;
    while (true) {
      if (newNode.val > curr.val) {
        if (curr.right !== null) curr = curr.right;
        else {
          curr.right = newNode;
          return this;
        }
      } else if (newNode.val < curr.val) {
        if (curr.left !== null) curr = curr.left;
        else {
          curr.left = newNode;
          return this;
        }
      } else {
        // insert val is already in tree
        return this;
      }
    }
  }
}

let tree = new BST();
tree.insert(10);
tree.insert(8);
tree.insert(12);
tree.insert(12);
console.log(tree);
