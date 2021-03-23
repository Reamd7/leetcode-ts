import main from './61.旋转链表';
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

function run(node: number[], k: number): number[] {
  return ListNodeToArray(
    main(
      ArrayToListNode(node), k,
    ),
  );
}

describe('旋转链表', () => {
  it('给定 [1,2,3,4,5], 8 => [ 3, 4, 5, 1, 2 ]', () => {
    expect(run([1,2,3,4,5], 8)).toEqual([ 3, 4, 5, 1, 2 ]);
  });
  it('给定 [1,2,3,4,5], 5 => [1,2,3,4,5]', () => {
    expect(run([1,2,3,4,5], 5)).toEqual([1,2,3,4,5]);
  });
  it('给定 [1,2,3,4,5], 0 => [1,2,3,4,5]', () => {
    expect(run([1,2,3,4,5], 0)).toEqual([1,2,3,4,5]);
  });
  it('给定 [1], 0 => [1]', () => {
    expect(run([1], 0)).toEqual([1]);
  });

  it('给定 [1], 100 => [1]', () => {
    expect(run([1], 100)).toEqual([1]);
  });

  it('给定 [1, 2], 1 => [1, 2]', () => {
    expect(run([1, 2], 1)).toEqual([2, 1]);
  });
});
