import main from '../203.移除链表元素';
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

function run(node: number[], val: number) {
  expect(
    ListNodeToArray(main(ArrayToListNode(node), val)),
  ).toEqual(
    node.filter(v => v !== val),
  );
}

describe('移除链表元素', () => {
  it('给定 ([1,2,3,4,5], 2) => [ 1,3,4,5 ]', () => {
    run([1,2,3,4,5], 2);
  });
});
