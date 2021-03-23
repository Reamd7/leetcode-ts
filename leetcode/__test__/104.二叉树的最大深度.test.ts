import maxDepth from './104.二叉树的最大深度';
/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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
function ArrayToTreeNode(arr: Array<null | number>, index = 1): TreeNode | null {
  const value = arr[index - 1];
  if (value === null || value === undefined) {
    return null;
  } else {
    return new TreeNode(
      value,
      ArrayToTreeNode(arr, index * 2),
      ArrayToTreeNode(arr, index * 2 + 1),
    );
  }
}
describe('二叉树的最大深度', () => {
  it('[3,9,20,null,null,15,7] is 3', ()=> {
    expect(maxDepth(ArrayToTreeNode([3,9,20,null,null,15,7]))).toEqual(3);
  });
});

// @lc code=end

