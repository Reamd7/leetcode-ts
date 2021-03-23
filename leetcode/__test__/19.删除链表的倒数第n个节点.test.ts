import main from '../19.删除链表的倒数第n个节点';
interface ListNode {
  val: number
  next: ListNode | null
}

function ArrayToListNode(arr: number[]): ListNode | null {
  if (arr.length) {
    const res: ListNode = {
      val: NaN,
      next: null,
    };
    arr.reduce((res, v) => {
      const node: ListNode = {
        val: v,
        next: null,
      };
      res.next = node;
      return node;
    }, res);
    return res.next;
  } else {
    return null;
  }
}

function ListNodeToArray(node: ListNode | null): number[] {
  if (node === null) return [];
  const res: number[] = [];

  let cur: ListNode | null = node;
  do {
    res.push(cur.val);
    cur = cur.next;
  } while (cur);

  return res;
}

function run(li: number[], n: number): number[] {
  return ListNodeToArray(main(ArrayToListNode(li), n));
}

function res(li: number[], n: number) {
  li.splice(-n, 1);
  return li;
}

describe('删除链表的倒数第n个节点', () => {
  it('给定 [1,2,3,4,5,5], 2 => [1,2,3,4,5]', () => {
    expect(run([1,2,3,4,5,5], 2)).toEqual(res([1,2,3,4,5,5], 2));
  });
  it('给定 [1,2,3,4,5,6], 2 => [1,2,3,4,6]', () => {
    expect(run([1,2,3,4,5,6], 2)).toEqual(res([1,2,3,4,5,6], 2));
  });

  it('给定 [1], 1 => []]', () => {
    expect(run([1], 1)).toEqual(res([1], 1));
  });

  it('给定 [1,2], 2 => [2]]', () => {
    expect(run([1,2], 2)).toEqual(res([1,2], 2));
  });
});
