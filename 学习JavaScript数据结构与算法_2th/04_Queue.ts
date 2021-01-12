/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**
 * 先进先出
 */

class Queue<T> {
  protected items: T[] = [];

  constructor(items: T[]) {
    this.items = items;
  }

  enqueue(...items: T[]): void {
    this.items.push(...items);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  front(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  get size(): number {
    return this.items.length;
  }

  print(): void {
    console.log(this.items);
  }
}

// class QueueElement<T> {
//   element: T;
//   priority: number;
//   constructor(element: T, priority: number) {
//     this.element = element;
//     this.priority = priority;
//   }
// }

// class PriorityQueue<T> {
//   protected items: QueueElement<T>[] = [];

//   enqueue(element: T, priority: number): void {
//     const queueElement = new QueueElement(element, priority);
//     let added = false;

//     for (let index = 0; index < this.size; index++) {
//       const element = this.items[index];
//       if (queueElement.priority < element.priority) { // 最小优先队列
//         // if (queueElement.priority > element.priority) { // 最大优先队列
//         this.items.splice(index, 0, queueElement);
//         added = true;
//         break;
//       }
//     }
//     if (!added) {
//       this.items.push(queueElement); //{5}
//     }
//   }

//   dequeue(): QueueElement<T> | undefined {
//     return this.items.shift();
//   }

//   front(): QueueElement<T> | undefined {
//     return this.items[0];
//   }

//   isEmpty(): boolean {
//     return this.size === 0;
//   }

//   get size(): number {
//     return this.items.length;
//   }

//   print(): void {
//     for (let i = 0; i < this.items.length; i++) {
//       console.log(`${this.items[i].element} -
//       ${this.items[i].priority}`);
//     }
//   }
// }


// 循环队列
// 击鼓传花 = 花不动人动。
function hotPotato(nameList: string[]): string | number {
  const queue = new Queue(nameList);
  let eliminated = '';

  while (queue.size > 1) {
    const num = Math.floor(Math.random() * 10); // 随机传花。
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()!); // 击鼓传花，A B C => B C A
    }
    eliminated = queue.dequeue()!;
    console.log(eliminated + '在击鼓传花游戏中被淘汰。');
  }
  return queue.dequeue()!;
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const winner = hotPotato(names);
console.log('The winner is: ' + winner);
