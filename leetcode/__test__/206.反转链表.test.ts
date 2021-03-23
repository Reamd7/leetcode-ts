import main from '../206.反转链表';
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

function run(node: number[]): number[] {
  return ListNodeToArray(
    main(
      ArrayToListNode(node),
    ),
  );
}

describe('旋转链表', () => {
  it('给定 ([1,2,3,4,5]) => [ 5,4,3,2,1 ]', () => {
    const val = [1,2,3,4,5];
    expect(run(val)).toEqual(val.reverse());
  });
});
