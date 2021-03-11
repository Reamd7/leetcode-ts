/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
  }
}

function TreeHeight(root: TreeNode | null, leftHeight?: number, rightHeight?: number): number {
  if (root === null) {
    return 0;
  } else {
    return Math.max(
      leftHeight === undefined ?
        TreeHeight(root.left) : leftHeight,
      rightHeight === undefined ? TreeHeight(root.right) : rightHeight) + 1;
  }
}

function isBalancedHeight(root: TreeNode | null): [boolean, number, number] {
  if (root === null) {
    return [true, 0, 0];
  } else {
    const left = isBalancedHeight(root.left);
    const right = isBalancedHeight(root.right);

    if (left[0] && right[0]) {
      const l = TreeHeight(root.left, left[1], left[2]);
      const r = TreeHeight(root.right, right[1], right[2]);
      return [Math.abs(l - r) < 2, l, r];
    } else {
      return [false, NaN, NaN];
    }
  }
}

function isBalanced(root: TreeNode | null): boolean {
  return isBalancedHeight(root)[0];
};
// @lc code=end

export default isBalanced;
