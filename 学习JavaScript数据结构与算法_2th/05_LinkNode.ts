// NOTE：
// - 快慢指针
//   - 找中间值: 我们把一个链表看成一个跑道，假设a的速度是b的两倍，那么当a跑完全程后，b刚好跑一半，以此来达到找到中间节点的目的。
//   - 判断链表中的环: 快慢指针中，因为每一次移动后，快指针都会比慢指针多走一个节点，所以他们之间在进入环状链表后，不论相隔多少个节点，慢指针总会被快指针赶上并且重合，此时就可以判断必定有环。
//   - 删除倒数第n个节点: 那如何找第(n-1)个元素呢？我们一开始就让fast指针比slow指针快n+1个元素，接下来，两个指针都是一步一步来往下走。那么当fast指针走完时，slow指针就刚刚好停留在第(n-1)个元素上。

class ListNode {
  val: number
  next: ListNode | null
  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function append(__head__: ListNode, element: number) {
  let current = __head__;
  while (current.next) {
    current = current.next;
  }
  current.next = new ListNode(element);
  return current;
}

function insert(__head__: ListNode, element: number, position: number) {
  if (position > -1) {
    let prev: ListNode | null = null;
    let current: ListNode | null = __head__;
    let index = 0;
    do {
      if (index === position) {
        const node = new ListNode(element, current);
        if (prev) prev.next = node;
        return node;
      }
      prev = current;
      current = current.next;
      index++;
    } while (current && current.next);

    const node = new ListNode(element);
    if (current) current.next = node;
    return node;
  } else {
    // 快慢指针插入
    let prev: ListNode | null = null;
    let current: ListNode | null = __head__;
    let fast: ListNode | null = __head__;

    for (let i = 0; i < Math.abs(position); i++) {
      if (fast) {
        fast = fast.next;
      } else {
        break;
      }
    }
    while(current !== null && fast !== null) {
      prev = current;
      current = current.next;
      fast = fast.next;
    }

    const node = new ListNode(element, current);
    if (prev) prev.next = node;
    return node;
  }
}

function indexOf(__head__: ListNode, element: number) {
  let index = -1;
  let current: ListNode | null = __head__;
  do {
    index += 1;
    if (current.val === element) return index;
    current = current.next;
  } while (current);

  return -1;
}

// function removeAt(__head__: ListNode, position: number): [ ListNode | null, ListNode | null ] {
//   if (position > -1) {
//     let prev: ListNode | null = null;
//     let current: ListNode | null = __head__;
//     let index = 0;
//     do {
//       if (index === position) {
//         if (prev) {
//           prev.next = current.next;
//           current.next = null;
//           return [
//             current,
//             __head__,
//           ];
//         } else {
//           const newHead = __head__.next;
//           __head__.next = null;
//           return [
//             __head__,
//             newHead,
//           ];
//         };
//       }
//       prev = current;
//       current = current.next;
//       index++;
//     } while (current);

//     return [
//       null,
//       __head__,
//     ];
//   } else {
//     // 快慢指针插入
//     let prev: ListNode | null = null;
//     let current: ListNode | null = __head__;
//     let fast: ListNode | null = __head__;

//     for (let i = 0; i < Math.abs(position); i++) {
//       if (fast) {
//         fast = fast.next;
//       } else {
//         break;
//       }
//     }
//     while(current !== null && fast !== null) {
//       prev = current;
//       current = current.next;
//       fast = fast.next;
//     }
//     if (prev && current) {
//       prev.next = current.next;
//       current.next = null;
//       return [
//         current,
//         __head__,
//       ];
//     } else {
//       const newHead = __head__.next;
//       __head__.next = null;
//       return [
//         __head__,
//         newHead,
//       ];
//     };

//   }
// }

function isCircle(__head__: ListNode) {
  if (__head__ == null || __head__.next == null) {
    return false;
  }
  let current: ListNode | null = __head__;
  let fast: ListNode | null = __head__;

  for (let i = 0; i < 1; i++) {
    if (fast) {
      fast = fast.next;
    } else {
      break;
    }
  }
  while(current !== null && fast !== null) {
    current = current.next;
    fast = fast.next;
  }
  return false;
}

const node = new ListNode(1,
  new ListNode(2,
    new ListNode(3),
  ),
);
append(node, 4);
console.log(
  JSON.stringify(node),
);

insert(node, 10, -2);
console.log(
  JSON.stringify(node),
);

console.log(indexOf(node, 100));



const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;
console.log(
  isCircle(node1),
);

