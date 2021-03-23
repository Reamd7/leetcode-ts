import main from '../25.k-个一组翻转链表';

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

function run(li: number[], k = 1): number[] {
  return ListNodeToArray(main(ArrayToListNode(li), k));
}

describe('k-个一组翻转链表', () => {
  it('给定 [], 1 => []', () => {
    expect(
      run([], 1),
    ).toEqual([]);
  });
  it('给定 [1], 1 => [1]', () => {
    expect(run([1])).toEqual([1]);
  });

  it('给定 [1, 2, 3, 4], 2 => [2, 1, 4, 3]', () => {
    expect(run([1, 2, 3, 4], 2)).toEqual([2, 1, 4, 3]);
  });
  it('给定 [1, 2, 3, 4], 3 => [3, 2, 1, 4]', () => {
    expect(run([1, 2, 3, 4], 3)).toEqual([3, 2, 1, 4]);
  });
});
