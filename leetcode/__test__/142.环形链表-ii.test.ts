import hasCycle from '../142.环形链表-ii';
interface ListNode {
  val: number
  next: ListNode | null
}
describe('环形链表', () => {
  it('测试环形链表1', () => {
    const node1: ListNode = {
      val: 1, next: null,
    };
    const node2: ListNode = {
      val: 2, next: null,
    };
    const node3: ListNode = {
      val: 3, next: null,
    };
    const node4: ListNode = {
      val: 4, next: null,
    };
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2;
    expect(
      hasCycle(node1),
    ).toEqual(node2);
  });

  it('测试环形链表2', () => {
    const node1: ListNode = {
      val: 1, next: null,
    };
    const node2: ListNode = {
      val: 2, next: null,
    };
    node1.next = node2;
    node2.next = node1;
    expect(
      hasCycle(node1),
    ).toEqual(node1);
  });
});
