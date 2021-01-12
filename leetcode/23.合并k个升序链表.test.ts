import main from './23.合并k个升序链表';

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

function run(li: number[][]): number[] {
  return ListNodeToArray(
    main(li.map(v => ArrayToListNode(v))),
  );
}

describe('合并k个升序链表', () => {
  it('给定 [] => []', () => {
    expect(run([])).toEqual([]);
  });
  it('给定 [[1]] => [1]', () => {
    expect(run([[1]])).toEqual([1]);
  });

  it('给定 [[1,2,3],[4,5,6]] => [1,2,3,4,5,6]', () => {
    expect(run([[1,2,3],[4,5,6]])).toEqual([1,2,3,4,5,6]);
  });

  it('给定 [[1,4,5],[1,3,4],[2,6]] => [1,1,2,3,4,4,5,6]', () => {
    expect(run([[1,4,5],[1,3,4],[2,6]])).toEqual([1,1,2,3,4,4,5,6]);
  });
});
