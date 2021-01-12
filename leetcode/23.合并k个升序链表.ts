/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
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


class Heap<T> {
  arr: T[];
  compare: (a: T, b: T) => boolean;

  constructor(compare?: (a: T, b: T) => boolean) {
    this.arr = [0 as any]; // 下标从1开始好算，下标0废弃
    this.compare = compare ? compare : this._defaultCompare;
  }

  // /**
  //  * 根据可迭代对象生成堆
  //  * @param {*} data iterable 对象
  //  * @param {*} compare
  //  */
  // static heapify(data: number[], compare = undefined) {
  //   const heap = new Heap(compare);
  //   for (const item of data) {
  //     heap.push(item);
  //   }
  //   return heap;
  // }

  push(item: T) {
    const { arr } = this;
    arr.push(item);
    this._up(arr.length - 1);
    // console.log('push', item, arr.slice(1));
  }

  pop() {
    if (this.size === 0) return null; //行为同Java的PriorityQueue
    const { arr } = this;
    this._swap(1, arr.length - 1);// 末尾的换上来，堆顶放到最后等待返回
    const res = arr.pop();
    this._down(1);// 换上来的末尾尝试下沉
    // console.log('pop', arr.slice(1));
    return res;
  }

  /**
   * 堆中元素数量
   */
  get size() {
    return this.arr.length - 1;
  }

  /**
   * 返回堆顶元素
   */
  peek() {
    return this.arr[1];
  }

  /**
   * 上浮第k个元素
   * @param {int} k
   */
  private _up(k: number) {
    const { arr, compare, _parent } = this;
    // k 比它的父节点更靠近堆顶，应该继续上浮（k=1 表示已经到达堆顶）
    while (k > 1 && compare(arr[k], arr[_parent(k)])) {
      this._swap(_parent(k), k);
      // eslint-disable-next-line no-param-reassign
      k = _parent(k);
    }
  }

  /**
   * 下沉第k个元素
   * @param {int} k
   */
  private _down(k: number) {
    const { arr, compare, _left, _right } = this;
    const size = this.size;
    // 如果沉到堆底，就沉不下去了
    while (_left(k) <= size) {
      let child = _left(k);
      if (_right(k) <= size && compare(arr[_right(k)], arr[child])) {
        child = _right(k); // 选择左右子节点中更靠近堆顶的，这样能维持下沉后原本的 left与right 之间的顺序关系
      }
      // 如果当前的k比子节点更靠近堆顶，不用下沉了
      if (compare(arr[k], arr[child])) return;
      // 下沉
      this._swap(k, child);
      // eslint-disable-next-line no-param-reassign
      k = child;
    }
  }

  private _left(k: number) { return k * 2; }
  private _right(k: number) { return k * 2 + 1; }
  private _parent(k: number) { return Math.floor(k / 2); }
  private _brother(k: number) {
    const p = this._parent(k);
    const _left = p * 2;
    const _right = p * 2 + 1;
    return (k === _left) ? _right : _right;
  }

  /**
   * 交换位置
   * @param {int} i
   * @param {int} j
   */
  private _swap(i: number, j: number) {
    const arr = this.arr;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  /**
   * a是否比b更接近堆顶，默认为小顶堆
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  private _defaultCompare(a: T, b: T) {
    return a < b;
  }
}

interface ListNode {
  val: number
  next: ListNode | null
}
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const res = new Heap<ListNode>((a, b) => {
    return a.val < b.val;
  });
  lists.forEach(n => {
    while (n) {
      res.push(n);
      // eslint-disable-next-line no-param-reassign
      n = n.next;
    }
  });
  return res.arr.slice(1).sort((a, b) => a.val - b.val).reduceRight((p, n) => {
    n.next = p,
    // eslint-disable-next-line no-param-reassign
    p = n;
    return p;
  }, null as ListNode | null)!;
  // return lists.reduce((p, n) => {
  //   while (n) {
  //     p.push(n);
  //     // eslint-disable-next-line no-param-reassign
  //     n = n.next;
  //   }
  //   return p;
  // },[] as Array<ListNode>)
  //   .sort((a, b) => a.val - b.val)
  //   .reduceRight((p, n) => {
  //     n.next = p,
  //     // eslint-disable-next-line no-param-reassign
  //     p = n;
  //     return p;
  //   }, null as ListNode | null);
  // ===========================================================================
  // ===========================================================================
  // ===========================================================================
  // ===========================================================================
  // const res: Array<ListNode> = [{
  //   val: -Infinity,
  //   next: null,
  // }];

  // lists.forEach(n => {
  //   let lastIndex = 0;
  //   while (n) {
  //     let add = false;
  //     for (let index = lastIndex; index < res.length; index++) {
  //       const element = res[index];
  //       if (element.val > n.val) {
  //         res.splice(index, 0, n);
  //         lastIndex = index;
  //         add = true;
  //         break;
  //       }
  //     }
  //     if (!add) {
  //       lastIndex = res.length;
  //       res.push(n);
  //     }
  //     // eslint-disable-next-line no-param-reassign
  //     n = n.next;
  //   }
  // });
  // return res.reduceRight((p, n) => {
  //   n.next = p,
  //     // eslint-disable-next-line no-param-reassign
  //     p = n;
  //   return p;
  // }, null as ListNode | null)!.next;
  // ===========================================================================
  // ===========================================================================
  // ===========================================================================
  // ===========================================================================
  // const length = lists.length;
  // const head: ListNode = {
  //   val: NaN,
  //   next: null,
  // };
  // let cu: ListNode = head;
  // let minIndex = -1;
  // // 123, 456, 789 => 时间用了
  // while (true) {
  //   let min = Infinity;
  //   minIndex = -1;
  //   for (let index = 0; index < length; index++) {  // 这个过程可以优化 这里 空间是 O(1) 时间是 O(k)
  //     const v = lists[index];
  //     if (v && v.val < min) {
  //       min = v.val;
  //       minIndex = index;
  //     }
  //   }
  //   if (minIndex > -1 && lists[minIndex]) {
  //     // const node: ListNode = {
  //     //   val: lists[minIndex]!.val,
  //     //   next: null,
  //     // };
  //     // const node = lists[minIndex]!;
  //     cu.next = lists[minIndex]!;
  //     cu = lists[minIndex]!;
  //     lists[minIndex] = lists[minIndex]!.next;
  //   } else {
  //     break;
  //   }
  // }

  // return head.next;
};
// @lc code=end

export default mergeKLists;
