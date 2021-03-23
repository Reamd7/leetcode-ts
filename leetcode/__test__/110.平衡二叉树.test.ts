/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import isBalanced from './110.平衡二叉树';
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

describe('判断是否为平衡二叉树', () => {
  it('[3,9,20,null,null,15,7] true', () => {
    expect(
      isBalanced(ArrayToTreeNode([3,9,20,null,null,15,7])),
    ).toEqual(true);
  });
  it('[1,2,2,3,3,null,null,4,4] false', () => {
    expect(
      isBalanced(ArrayToTreeNode([1,2,2,3,3,null,null,4,4])),
    ).toEqual(false);
  });
  it('[] true', () => {
    expect(
      isBalanced(ArrayToTreeNode([])),
    ).toEqual(true);
  });
});
