/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
interface ListNode {
  val: number
  next: ListNode | null
}
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) {
    return head;
  } else {
    const next = head.next;
    if (next === null) {
      return head;
    } else {
      if (head.val === next.val) {
        return deleteDuplicates(memoryHead(next, head.val));
      } else {
        head.next = deleteDuplicates(next);
        return head;
      }
    }
  }
};

function memoryHead(head: ListNode | null, value: number): ListNode | null {
  if (head?.val === value) {
    return memoryHead(head.next, value);
  } else {
    return head;
  }
};

// @lc code=end

export default deleteDuplicates;
