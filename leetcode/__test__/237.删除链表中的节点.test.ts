import main from '../237.删除链表中的节点';

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
  const node = ArrayToListNode(li);
  main(node);
  return ListNodeToArray(node);
}

describe('删除链表中的节点', () => {
  it('给定 [] => []', () => {
    expect(run([])).toEqual([]);
  });
  it('给定 [1, 2] => [2]', () => {
    expect(run([1, 2])).toEqual([2]);
  });

});
