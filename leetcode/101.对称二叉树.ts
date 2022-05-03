/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

 interface TreeNode {
  val: number;
  left: TreeNode | null
  right: TreeNode | null
}
function isSymmetricCore(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }
  return p.val === q.val && isSymmetricCore(p.left, q.right) && isSymmetricCore(p.right, q.left);
};

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true;

  return isSymmetricCore(root.left, root.right);
}
// @lc code=end
export default isSymmetric;
