/**
 * 生成树节点
 */
export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
  }
}

/**
 * 生成树并返回根节点
 */
export function createTree(values: any[]): TreeNode | null {
  return createTreeList(values)[0] || null;
}

/**
 * 生成树并返回节点列表
 */
function createTreeList(values: any[]) {
  const len = values.length;
  if (!len) return [];

  const rootVal = values[0];
  if (rootVal === null) return [null];

  const nodes: Array<TreeNode | null> = [new TreeNode(rootVal)];
  let i = 1;
  let j = 0;
  let parent, curr;

  while (i < len) {
    while ((parent = nodes[j++]) === null);
    curr = values[i++];
    nodes.push(parent.left = curr != null ? new TreeNode(curr) : null);
    curr = values[i++];
    nodes.push(parent.right = curr != null ? new TreeNode(curr) : null);
  }

  return nodes;
}

// /**
//  * 生成链表节点
//  * @class
//  * @template T
//  * @param {T} val 节点的值
//  */
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// /**
//  * 生成链表并返回头节点
//  * @template T
//  * @param {T[]} values 节点值的列表
//  * @returns {ListNode<T>[]} 链表的头节点
//  */
// function createList(values) {
//   let len = values.length;
//   let node = null;
//   let prev;
//   while (len--) {
//     prev = new ListNode(values[len]);
//     prev.next = node;
//     node = prev;
//   }
//   return node;
// }

// /**
//  * 转为字符串并限制为64字符内
//  */
// function slice64(data) {
//   return ((i) => `${i.length > 64 ? `${i.slice(0, 61)}...` : i}`)(JSON.stringify(data));
// }
