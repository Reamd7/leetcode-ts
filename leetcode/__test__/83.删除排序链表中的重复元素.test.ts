import main from '../83.删除排序链表中的重复元素';

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

function run(li: number[]): number[] {
  return ListNodeToArray(main(ArrayToListNode(li)));
}

function set(li: number[]) {
  return [...new Set(li)];
}

describe('删除排序链表中的重复元素', () => {
  it('给定 [], 1 => []', () => {
    expect(
      run([]),
    ).toEqual([]);
  });
  it('给定 [1] => [1]', () => {
    const val = [1];
    expect(run(val)).toEqual(set(val));
  });

  it('给定 [1, 1, 3, 4] => [1, 3, 4]', () => {
    const val = [1, 1, 3, 4];
    expect(run(val)).toEqual(set(val));
  });
  it('给定 [1, 2, 2, 3, 3, 4], 3 => [1, 2, 3, 4]', () => {
    const val = [1, 2, 2, 3, 3, 4];
    expect(run(val)).toEqual(set(val));
  });
});
