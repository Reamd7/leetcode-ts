import main from '../328.奇偶链表';

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

function res(li: number[]): number[] {
  return li.reduce((res, val, index) => {
    if (index % 2 === 0) {
      res[0].push(val);
    } else {
      res[1].push(val);
    }
    return res;
  }, [[] as number[], [] as number[]]).flat(1);
}

function MainTest(val: number[]) {
  expect(
    run(val),
  ).toEqual(res(val));
}


describe('分隔链表', () => {
  it('给定 [] => []', () => {
    MainTest([]);
  });
  it('给定 [1] => [1]', () => {
    MainTest([1]);
  });

  it('给定 [1, 2, 3, 4] => [1, 3, 2, 4]', () => {
    MainTest([1, 2, 3, 4]);
  });
  it('给定 [1, 2, 3] => [1, 3, 2]', () => {
    MainTest([1, 2, 3]);
  });
});
