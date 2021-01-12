/* eslint-disable @typescript-eslint/no-non-null-assertion */

interface CircularLinkedNode<T> {
  element: T;
  next: CircularLinkedNode<T> ; // 指向列表中下一个节点项的指针
  prev: CircularLinkedNode<T> ; // 指向列表中上一个节点项的指针
}
/**
 * 循环链表
 */
export class CircularLinkedList<T> {
  protected length = 0;
  protected __head__: CircularLinkedNode<T> | null = null;
  protected __tail__: CircularLinkedNode<T> | null = null;

  get size(): number {
    return this.length;
  }
  get head(): CircularLinkedNode<T> | null {
    return this.__head__;
  }
  get tail(): CircularLinkedNode<T> | null {
    return this.__tail__;
  }

  forEach(
    cb: (current: CircularLinkedNode<T>, index: number, prev: CircularLinkedNode<T>, next: CircularLinkedNode<T>) => void | true,
    keepOrder = true,
  ): void {
    if (this.__head__ && this.__tail__) {
      let current: CircularLinkedNode<T> = this.__head__;
      let prev: CircularLinkedNode<T> = this.__tail__;
      let next: CircularLinkedNode<T> = this.__head__.next;
      const size = this.size;
      if (cb(current, 0, prev, next)) {
        return ;
      }
      let index = 1;
      if (keepOrder) {
        prev = current;
        current = next;
        next = current.next;
      } else {
        current = current.next;
        prev = current.prev;
        next = current.next;
      }
      while (index < (keepOrder ? size : this.size)) {
        if (cb(current, index, prev, next)) {
          return ;
        }
        if (keepOrder) {
          prev = current;
          current = next;
          next = current.next;
        } else {
          current = current.next;
          prev = current.prev;
          next = current.next;
        }
        index++;
      }
    }
  }

  append(element: T): void {
    const node: CircularLinkedNode<T> = {
      element,
      next: null as any,
      prev: null as any,
    };
    node.next = node;
    node.prev = node;

    if (this.length === 0) {
      this.__head__ = this.__tail__ = node;
    } else {
      node.prev = this.__tail__!;
      node.next = this.__head__!;
      this.__tail__!.next = node;
      this.__head__!.prev = node;
      this.__tail__ = node;
    }

    this.length += 1;
  }

  /**
   * 向列表的特定位置插入一个新的项
   * @param position
   * @param element
   */
  insert(position: number, element: T): boolean {
    //检查越界值
    if (position >= 0 && position <= this.length) { //{1}
      // const node = new LinkNode(element);
      const node: CircularLinkedNode<T> = {
        element,
        next: null as any,
        prev: null as any,
      };
      node.prev = node;
      node.next = node;

      this.forEach((current, index, previous) => {
        if (position === index) {
          node.prev = current.prev;
          node.next = current;
          current.prev = node;
          previous.next = node;

          if (position === 0) this.__head__ = node;
          if (position === this.length) this.__tail__ = node;

          this.length++; //更新列表的长度
          return true;
        }
      });
      return true;
    } else {
      return false; //{6}
    }
  }

  /**
   * 从列表中移除一项
   */
  remove(element: T): T | null {
    return this.removeAt(
      this.indexOf(element),
    );
  }

  /**
   * 返回元素在列表中的索引。如果列表中没有该元素则返回-1
   * @param element
   */
  indexOf(element: T): number {
    let index = -1;
    this.forEach((current, i) => {
      if (current && current.element === element) {
        index = i;
        return true;
      }
    });
    return index;
  }

  /**
   * 从列表的特定位置移除一项
   * @param position
   */
  removeAt(position: number): T | null {
    if (this.__head__ && position > -1 && position < this.length) {
      let current: CircularLinkedNode<T> = this.__head__;

      this.forEach((cu, index, pr, next) => {
        if (index === position) {
          pr.next = next;
          next.prev = pr;
          current = cu;
          return true;
        }
      });
      this.length--;
      return current.element;
    } else {
      return null;
    }
  }

  /**
   * 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
   */
  isEmpty(): boolean {
    return this.length === 0;
  }

  /**
   * 反转链表
   */
  reverse(): this | void {
    if (this.__head__) {
      this.forEach((current, index, prev, next) => {
        if (current) {
          current.next = prev;
          current.prev = next;
        }
      });
      const head = this.__head__;
      this.__head__ = this.__tail__;
      this.__tail__ = head;
    }

    return this;
  }
}

const li2 = new CircularLinkedList<number>();
li2.append(10);
li2.append(9);
li2.append(8);
li2.append(7);
console.log(li2.toString());
li2.reverse();
console.log(li2.toString());
li2.remove(2);
console.log(li2.toString());
li2.insert(0, 1);
console.log(li2.head);
console.log(li2.toString());
li2.removeAt(0);
console.log(li2.toString());
li2.removeAt(3);
console.log(li2.toString());
console.log(li2.tail);
