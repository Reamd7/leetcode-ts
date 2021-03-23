import main from '../86.分隔链表';

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

function run(li: number[], x: number): number[] {
  return ListNodeToArray(main(ArrayToListNode(li), x));
}

describe('分隔链表', () => {
  it('给定 [], 1 => []', () => {
    expect(
      run([], 1),
    ).toEqual([]);
  });
  it('给定 [1], 1 => [1]', () => {
    const val = [1];
    expect(run(val, 1)).toEqual([1]);
  });

  it('给定 [1, 1, 3, 4] => [1, 1, 3, 4]', () => {
    const val = [1, 1, 3, 4];
    expect(run(val, 4)).toEqual(val);
  });
  it('给定 [1,4,3,2,5,2], 3 => [1,2,2,4,3,5]', () => {
    const val = [1,4,3,2,5,2];
    expect(run(val, 3)).toEqual([1,2,2,4,3,5]);
  });
  it('给定 [1,4,3,2,5,2], 3 => [1,2,2,4,3,5]', () => {
    const val = [2,1];
    expect(run(val, 2)).toEqual([1,2]);
  });
});
