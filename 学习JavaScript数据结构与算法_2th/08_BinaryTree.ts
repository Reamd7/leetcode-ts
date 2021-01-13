/**
 * 二叉树中的节点最多只能有两个子节点：一个是左侧子节点，另一个是右侧子节点。
 */
export class BinaryTreeNode {
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
export abstract class BinaryTree {
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

  abstract get min(): BinaryTreeNode;
  abstract get max(): BinaryTreeNode;

  abstract remove(key: number): BinaryTreeNode | null;
}
