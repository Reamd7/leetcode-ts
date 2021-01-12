/*
 * @lc app=leetcode.cn id=445 lang=typescript
 *
 * [445] 两数相加 II
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

// function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//   let str = '';
//   let str1 = '';
//   let cu: ListNode | null = l1;
//   while (cu !== null) {
//     str = str + String(cu.val);
//     cu = cu.next;
//   }
//   cu = l2;
//   while (cu !== null) {
//     str1 = str1 + String(cu.val);
//     cu = cu.next;
//   }
//   // eslint-disable-next-line no-undef
//   const res = String(BigInt(str) + BigInt(str1));
//   const d: ListNode = {
//     val: NaN,
//     next: null,
//   };
//   cu = d;
//   for (let index = 0; index < res.length; index++) {
//     const node = {
//       val: Number(res[index]),
//       next: null,
//     };
//     cu.next = node;
//     cu = node;
//   }
//   return d.next;
// };
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const str: number[] = [];
  const str1: number[] = [];
  let cu: ListNode | null = l1;
  while (cu !== null) {
    str.unshift(cu.val);
    cu = cu.next;
  }
  cu = l2;
  while (cu !== null) {
    str1.unshift(cu.val);
    cu = cu.next;
  }
  // eslint-disable-next-line no-undef
  let plus = 0;
  const s_len = str.length;
  const s1_len = str1.length;
  let res: number[];

  if (s_len > s1_len) {
    for (let index = 0; index < s_len; index++) {
      const a = str[index];
      const b = str1[index] || 0;
      const s = a + b + plus;
      plus = s > 9 ? 1 : 0;
      str[index] = plus ? s - 10 : s;
    }
    res = str;
  } else {
    for (let index = 0; index < s1_len; index++) {
      const a = str[index] || 0;
      const b = str1[index];
      const s = a + b + plus;
      plus = s > 9 ? 1 : 0;
      str1[index] = plus ? s - 10 : s;
    }
    res = str1;
  }
  if (plus === 1) {
    res.push(1);
  }
  const d: ListNode = {
    val: NaN,
    next: null,
  };
  cu = d;
  for (let index = res.length - 1; index > -1; index--) {
    const node = {
      val: Number(res[index]),
      next: null,
    };
    cu.next = node;
    cu = node;
  }
  return d.next;
};
// @lc code=end
export default addTwoNumbers;
