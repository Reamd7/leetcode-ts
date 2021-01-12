import main from './445.两数相加-ii';
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

function run(li: number, li2: number): number {
  return Number(ListNodeToArray(
    main(
      ArrayToListNode(String(li).split('').map(Number)), ArrayToListNode(String(li2).split('').map(Number)),
    ),
  ).join(''));
}

describe('两数相加', () => {
  it('342 + 465 = 807', () => {
    expect(run(342, 465)).toEqual(807);
  });
  it('1 + 1 = 2', () => {
    expect(run(1, 1)).toEqual(2);
  });
  it('10 + 1 = 11', () => {
    expect(run(10, 1)).toEqual(11);
  });

  it('7243 + 564 = 7807', () => {
    expect(run(7243, 564)).toEqual(7807);
  });
});
