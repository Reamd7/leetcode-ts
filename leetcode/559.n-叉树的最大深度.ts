/*
 * @lc app=leetcode.cn id=559 lang=typescript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */
interface Node {
  val: number;
  children: Node[];
}

function maxDepth(root: Node): number {
  if (root) {
    if (root.children) {
      if (root.children.length === 0) {
        return 1;
      } else {
        return Math.max(
          ...root.children.map(v => maxDepth(v)),
        ) + 1;
      }
    }
    return 1;
  } else {
    return 0;
  }
};
// @lc code=end

export default maxDepth;
