/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// class LinkNode<T> {
//   element: T;
//   next: LinkNode<T> | null = null; // 指向列表中下一个节点项的指针

//   constructor(element: T) {
//     this.element = element;
//   }
// }

interface LinkNode<T> {
  element: T;
  next: LinkNode<T> | null
}

export class LinkedList<T> {
  protected length = 0;
  protected __head__: LinkNode<T> | null = null; // 需要存储第一个节点的引用
  get head() {
    return this.__head__;
  }
  /**
   * 返回链表包含的元素个数。与数组的length属性类似
   */
  get size() {
    return this.length;
  }
  /**
   * 向列表尾部添加一个新的项。
   */
  append(element: T) {
    // const node = new LinkNode(element);
    const node: LinkNode<T> = {
      element,
      next: null,
    };
    let current: LinkNode<T>;
    if (this.__head__ === null) {
      this.__head__ = node;
    } else {
      current = this.__head__;
      // 循环列表直到找到最后一项
      while (current.next) {
        current = current.next;
      }

      current.next = node;
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
      const node: LinkNode<T> = {
        element,
        next: null,
      };
      this.forEach((current, index, previous) => {
        if (position === index) {
          previous && (previous.next = node);
          current && (node.next = current);

          if (index === 0) {
            this.__head__ = node;
          }

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

  /**
   * 返回元素在列表中的索引。如果列表中没有该元素则返回-1
   * @param element
   */
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
      let current: LinkNode<T> | null = this.__head__;

      if (position === 0 && this.__head__) {
        this.__head__ = this.__head__.next;
      } else {
        this.forEach((cu, index, pr) => {
          if (index === position) {
            pr && (pr.next = (cu ? cu.next : null));
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
    return this.length === 0;
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
  /**
   * @param cb 回调函数，当返回 true 时候，中断循环。
   * @param keepOrder true 保证原有顺序 => 动态修改了 length 不影响，修改了任何一个 next 指针的指向也不影响保证原有方向的循环。
   */
  forEach(cb: (current: LinkNode<T> | null, index: number, prev: LinkNode<T> | null) => void | true, keepOrder = true) {
    if (this.__head__) {
      let current: LinkNode<T> | null = this.__head__;
      let previous: LinkNode<T> | null = null;
      let next: LinkNode<T> | null = this.__head__.next;
      const size = this.size;
      if (cb(current, 0, previous)) {
        return ;
      }
      let index = 1;
      previous = current;
      if (keepOrder) {
        current = next;
        next = current ? current.next : null;
      } else {
        current = current.next;
        next = current ? current.next : null;
      }
      while (index < (keepOrder ? size : this.size)) {
        if (cb(current, index, previous)) {
          return ;
        }
        previous = current;
        if (keepOrder) {
          current = next;
          next = current ? current.next : null;
        } else {
          current = current ? current.next : null;
          next = current ? current.next : null;
        }
        index++;
      }
    }
  }

  /**
   * 反转链表
   */
  reverse() {
    if (this.__head__) {
      this.forEach((current, index, prev) => {
        const next = current ? current.next : null;
        if (current) {
          current.next = prev;
        }
        if (!next) {
          this.__head__ = current;
        }
      });
    }

    return this;
  }
}

const li = new LinkedList<number>();
li.append(1);
li.append(2);
li.append(3);
li.append(4);
console.log(li.toString());
li.reverse();
console.log(li.toString());
li.remove(2);
li.insert(0, 1);
console.log(li.toString());
li.removeAt(1);
console.log(li.toString());
