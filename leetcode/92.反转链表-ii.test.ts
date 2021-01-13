import main from './92.反转链表-ii';
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

function run(node: number[], m: number, n: number): number[] {
  return ListNodeToArray(
    main(
      ArrayToListNode(node), m, n,
    ),
  );
}

describe('旋转链表', () => {
  it('给定 ([1,2,3,4,5], 2, 4) => [ 1, 4, 3, 2, 5 ]', () => {
    expect(run([1,2,3,4,5], 2, 4)).toEqual([ 1, 4, 3, 2, 5 ]);
  });
  it('给定 ([1,2,3,4,5], 1, 4) => [ 4, 3, 2, 1, 5 ]', () => {
    expect(run([1,2,3,4,5], 1, 4)).toEqual([ 4, 3, 2, 1, 5 ]);
  });
  it('给定 ([1,2,3,4,5], 1, 2) => [ 2, 1 ,3,4,5 ]', () => {
    expect(run([1,2,3,4,5], 1, 2)).toEqual([ 2, 1 ,3,4,5 ]);
  });

  it('给定 ([1,2], 1, 2) => [ 2, 1 ]', () => {
    expect(run([1,2], 1, 2)).toEqual([ 2, 1 ]);
  });
  it('给定 ([1,2, 3],  2, 3) => [ 1, 3, 2 ]', () => {
    expect(run([1,2, 3],  2, 3)).toEqual([ 1, 3, 2 ]);
  });
});
