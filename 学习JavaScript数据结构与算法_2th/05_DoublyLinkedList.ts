/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

interface DoublyLinkNode<T> {
  element: T;
  prev: DoublyLinkNode<T> | null; // 指向列表中上一个节点项的指针
  next: DoublyLinkNode<T> | null; // 指向列表中下一个节点项的指针
}

export class DoublyLinkedList<T> {
  protected length = 0;
  protected __head__: DoublyLinkNode<T> | null = null;
  protected __tail__: DoublyLinkNode<T> | null = null;

  get size() {
    return this.length;
  }
  get head() {
    return this.__head__;
  }
  get tail() {
    return this.__tail__;
  }

  /**
   * @param cb 回调函数，当返回 true 时候，中断循环。
   * @param keepOrder true 保证原有顺序 => 动态修改了 length 不影响，修改了任何一个 next 指针的指向也不影响保证原有方向的循环。
   */
  forEach(
    cb: (current: DoublyLinkNode<T> | null, index: number, prev: DoublyLinkNode<T> | null, next: DoublyLinkNode<T> | null) => void | true,
    keepOrder = true,
  ) {
    if (this.__head__) {
      let current: DoublyLinkNode<T> | null = this.__head__;
      let prev: DoublyLinkNode<T> | null = this.__head__.prev;
      let next: DoublyLinkNode<T> | null = this.__head__.next;
      const size = this.size;
      if (cb(current, 0, prev, next)) {
        return ;
      }
      let index = 1;
      if (keepOrder) {
        prev = current;
        current = next;
        next = current ? current.next : null;
      } else {
        current = current.next;
        prev = current ? current.prev : null;
        next = current ? current.next : null;
      }
      while (index < (keepOrder ? size : this.size)) {
        if (cb(current, index, prev, next)) {
          return ;
        }
        if (keepOrder) {
          prev = current;
          current = next;
          next = current ? current.next : null;
        } else {
          current = current ? current.next : null;
          prev = current ? current.prev : null;
          next = current ? current.next : null;
        }
        index++;
      }
    }
  }

  append(element: T) {
    const node: DoublyLinkNode<T> = {
      element,
      prev: null,
      next: null,
    };
    if (this.__tail__) {
      this.__tail__.next = node;
      node.prev = this.__tail__;
      this.__tail__ = node;
    } else {
      this.__head__ = this.__tail__ = node;
    }
    this.length += 1;
  }
  /**
   * 向列表的特定位置插入一个新的项
   * @param position
   * @param element
   */
  insert(position: number, element: T) {
    //检查越界值
    if (position >= 0 && position <= this.length) { //{1}
      // const node = new LinkNode(element);
      const node: DoublyLinkNode<T> = {
        element,
        next: null,
        prev: null,
      };
      this.forEach((current, index, previous) => {
        if (position === index) {
          if (previous) {
            previous.next = node;
            node.prev = previous;
          }
          if (current) {
            node.next = current;
            current.prev = node;
          }

          if (!node.prev) this.__head__ = node;
          if (!node.next) this.__tail__ = node;

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
  remove(element: T) {
    return this.removeAt(
      this.indexOf(element),
    );
  }

  indexOf(element: T) {
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
    if (this.length > 0 && position > -1 && position < this.length) {
      let current: DoublyLinkNode<T> | null = this.__head__;

      if (position === 0 && this.__head__) {
        this.__head__ = this.__head__.next;
        this.__head__ && (this.__head__ .prev = null);
      } else if (position === this.size - 1 && this.__tail__) {
        this.__tail__ = this.__tail__.prev;
        this.__tail__ && (this.__tail__ .next = null);
      } else {
        this.forEach((cu, index, pr, next) => {
          if (index === position) {
            pr && (pr.next = (cu ? cu.next : null));
            next && (next.prev = (cu ? cu.prev : null));
            current = cu;
            return true;
          }
        });
      }
      this.length--;
      return current ? current.element : null;
    } else {
      return null;
    }
  }

  /**
   * 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
   */
  isEmpty() {
    return this.size === 0;
  }

  toString() {
    let current = this.__head__;
    let string = '';
    while (current) {
      string +=
        current.element + (current.next ? 'n' : '');
      current = current.next;
    }
    return string;
  };

  reverse() {
    if (this.__head__) {
      this.forEach((current, index, prev, next) => {
        if (current) {
          current.next = prev;
          current.prev = next;
        }
      });
      const h = this.__head__;
      this.__head__ = this.__tail__;
      this.__tail__ = h;
    }

    return this;
  }
}

const li2 = new DoublyLinkedList<number>();
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
