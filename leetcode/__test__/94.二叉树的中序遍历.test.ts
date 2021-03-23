/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import inorderTraversal from './94.二叉树的中序遍历';
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

describe('二叉树的中序遍历', () => {
  it('[1, 2, 3, null,  4] -> [2, 4 ,1 ,3]', () => {
    const t = ArrayToTreeNode([1, 2, 3, null,  4]);
    expect(
      inorderTraversal(t),
    ).toEqual([2, 4 ,1 ,3]);
  });
  it('[] []', () => {
    expect(
      inorderTraversal(ArrayToTreeNode([])),
    ).toEqual([]);
  });
  it('[1] [1]', () => {
    expect(
      inorderTraversal(ArrayToTreeNode([1])),
    ).toEqual([1]);
  });
  it('[1, 2] [2, 1]', () => {
    expect(
      inorderTraversal(ArrayToTreeNode([1, 2])),
    ).toEqual([2, 1]);
  });
  it('[1,null,2] [1, 2]', () => {
    expect(
      inorderTraversal(ArrayToTreeNode([1,null,2])),
    ).toEqual([1, 2]);
  });
});
