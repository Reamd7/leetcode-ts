/* eslint-disable no-dupe-class-members */
/**
 * 二叉树中的节点最多只能有两个子节点：一个是左侧子节点，另一个是右侧子节点。
 *
 * 二叉搜索树（BST）是二叉树的一种，但是它只允许你在左侧节点存储（比父节点）小的值，在右侧节点存储（比父节点）大（或者等于）的值。上一节的图中就展现了一棵二叉搜索树。
 */

/**
 * 二叉树中的节点最多只能有两个子节点：一个是左侧子节点，另一个是右侧子节点。
 */
class BinaryTreeNode {
  // 左侧节点存储（比父节点）小的值
  left: BinaryTreeNode | null = null;
  // 右侧节点存储（比父节点）大（或者等于）的值
  right: BinaryTreeNode | null = null;
  key: number;
  constructor(key: number) {
    this.key = key;
  }
}
/**
 * 二叉树的抽象类
 */
abstract class BinaryTree {
  root: BinaryTreeNode | null = null;
  abstract insert(key: number): BinaryTreeNode;
  abstract search(key: number): boolean;
  /**
   * 中序遍历
   * @param cb
   */
  abstract inOrderTraverse(cb: (node: BinaryTreeNode) => boolean): void;

  /**
   * 先序遍历
   * @param cb
   */
  abstract preOrderTraverse(cb: (node: BinaryTreeNode) => boolean): void;

  /**
   * 后序遍历
   * @param cb
   */
  abstract postOrderTraverse(cb: (node: BinaryTreeNode) => boolean): void;

  abstract get min(): BinaryTreeNode | null;
  abstract get max(): BinaryTreeNode | null;

  abstract remove(key: number): BinaryTreeNode | null;
}

class BinarySearchTree extends BinaryTree {
  root: BinaryTreeNode | null = null;

  /**
   * 插入比较规则
   * @param node
   * @param newNode
   */
  private _insertNode(node: BinaryTreeNode, newNode: BinaryTreeNode) {
    if (newNode.key < node.key) { // 父级node.key > 子级node.key
      if (node.left === null) { // 如果 父级node 左子节点 没定义，
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode); // 已经定义了，就往下插。
      }
    } else {
      // 插入右侧
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  insert(key: number): BinaryTreeNode {
    const node = new BinaryTreeNode(key);
    if (this.root === null) {
      // 如果此时没有root 就把当前插入的node 作为root
      this.root = node;
    } else {
      // 否则根据 key值往下比较 左小 右大
      this._insertNode(this.root, node);
    }
    return node;
  }
  // 中序遍历 ( 左，中，右)
  inOrderTraverse(cb: (node: BinaryTreeNode) => boolean): void {
    if (this.root) {
      // // 从根节点开始遍历 并把遍历出来的节点 作为参数传给callBack
      this.inOrderTraverseNode(this.root, cb);
    }
  }
  private inOrderTraverseNode(node: BinaryTreeNode | null, cb: (node: BinaryTreeNode) => boolean): void {
    if (node !== null) {
      // ( 左，中，右)
      // 先遍历当前父节点左子树
      this.inOrderTraverseNode(node.left, cb);
      // 再遍历当前父节点
      if (cb(node)) return;
      // 最后遍历当前父节点右子树
      this.inOrderTraverseNode(node.right, cb);
    }
  }
  /**
   * 先序遍历 父-左-右
   * @param cb
   */
  preOrderTraverse(cb: (node: BinaryTreeNode) => boolean): void {
    if (this.root) {
      this.preOrderTraverseNode(this.root, cb);
    }
  }
  private preOrderTraverseNode(node: BinaryTreeNode | null, cb: (node: BinaryTreeNode) => boolean): void {
    if (node !== null) {
      // 先遍历当前父节点
      if (cb(node)) return;
      // 在当前父节点的左子树
      this.preOrderTraverseNode(node.left, cb);
      // 最后当前父节点的右子树
      this.preOrderTraverseNode(node.right, cb);
    }
  }
  /**
   * 后序遍历 左-右-父
   * @param cb
   */
  postOrderTraverse(cb: (node: BinaryTreeNode) => boolean): void {
    if (this.root) {
      this.postOrderTraverseNode(this.root, cb);
    }
  }
  private postOrderTraverseNode(node: BinaryTreeNode | null, cb: (node: BinaryTreeNode) => boolean): void {
    if (node !== null) {
      // 先当前父节点的左子树
      this.postOrderTraverseNode(node.left, cb);
      // 再当前父节点的右子树
      this.postOrderTraverseNode(node.right, cb);
      // 最后当前父节点
      if (cb(node)) return;
    }
  }
  // 搜索最小值
  private minNode(node: null): null;
  private minNode(node: BinaryTreeNode): BinaryTreeNode;
  private minNode(node: BinaryTreeNode | null): BinaryTreeNode | null {
    if (node) {
      while (node && node.left !== null) {
        // eslint-disable-next-line no-param-reassign
        node = node.left;
      }

      return node;
    }

    return null;
  }
  get min(): BinaryTreeNode | null {
    return this.root ? this.minNode(this.root) : null;
  }
  // 搜索最大值
  private maxNode(node: null): null
  private maxNode(node: BinaryTreeNode): BinaryTreeNode
  private maxNode(node: BinaryTreeNode | null): BinaryTreeNode | null {
    if (node) {
      while (node && node.right !== null) {
        // eslint-disable-next-line no-param-reassign
        node = node.right;
      }

      return node;
    }

    return null;
  }
  get max(): BinaryTreeNode | null {
    return this.root ? this.maxNode(this.root) : null;
  }

  // 搜索特定值
  private searchNode(node: BinaryTreeNode | null, key: number): boolean {
    if (node === null) {
      return false;
    } else {
      if (key < node.key) {
        // 目标值小于当前节点key，所以目标节点在当前节点的左分支
        return this.searchNode(node.left, key);
      } else if (key > node.key) {
        return this.searchNode(node.right, key);
      } else {
        return true;
      }
    }
  }
  search(key: number): boolean {
    return this.searchNode(this.root, key);
  }

  // 移除指定值 移除总共有三种情况
  remove(key: number): BinaryTreeNode | null {
    this.root = this.removeNode(this.root, key);
    return this.root;
  }

  private removeNode(node: BinaryTreeNode | null, key: number): BinaryTreeNode | null {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // 返回的是删除后的新节点 => 子节点 / 替换后的节点。
      // 第一种情况——移除一个叶节点
      if (node.left === null && node.right === null) {
        // eslint-disable-next-line no-param-reassign
        return null;
      }
      // 第二种情况——移除一个只有一个子节点的节点
      else if (node.left === null) { // 有一个右子节点
        return node.right;
      }
      else if (node.right === null) { // 有一个左子节点
        return node.left;
      }
      else {
        // 第三种情况——移除一个有两个子节点的节点
        // 重新 => 修改替换。
        const aux = this.minNode(node.right);
        // 找到要删除节点右子树中 最小值
        // 这一定是一个叶。
        node.key = aux.key; // 用右子树的最小值 取代要删除的值 此时出现重复了
        node.right = this.removeNode(node.right, aux.key); // 再将右边重复的最小值删除
        return node;
      }
    }
  }
}
export default BinarySearchTree;
