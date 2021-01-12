/**
 * 栈：后进先出（LIFO）原则的有序集合
 *
 * 在栈里，新元素都靠近栈顶，旧元素都接近栈底
 */

export default class Stack<T> {
  private item: T[] = [];
  /**
   * 添加一个（或几个）新元素到栈顶
   * @param e
   */
  push(...item: T[]): void {
    this.item.unshift(...item);
  }

  pop(): T | undefined {
    return this.item.shift();
  };

  get size(): number {
    return this.item.length;
  }
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * 栈只能访问顶。
   * @returns
   */
  peek(): T | undefined {
    return this.item[0];
  }

  clear(): void {
    this.item = [];
    // 另外也可以多次调用pop方法，把数组中的元素全部移除，这样也能实现clear方法。
    // while (this.pop() !== undefined) {
    //   ;
    // }
  }

  print(): void {
    console.log(this.item);
  }

  toString(): string {
    return this.item.join(',');
  }
}


const s = new Stack<number>();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.print();

/**
 * 进制转换算法
 */
function baseConverter(num: number, base = 2): string {
  let decNumber = num;
  const remStack = new Stack<number>();
  let binaryString = '';
  while (decNumber > 0) {
    const rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = (decNumber - rem) / base;
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop()?.toString();
  }
  return binaryString;
}

console.log(baseConverter(3, 2));

/**
 * 递归 => 数学归纳法？
 * 程序的一般写法就好比是数列的通项公式。
 * 程序的递归写法就好比是数列的递推公式。
 * ----------------------------------------------
 * 汉诺塔问题
 * move(n from A to C) = move(n-1 from A to B) + move(A to C) + move(n-1 from B to C`)
 * 分解为子问题：
 * (1)先把A上的n-1个圆盘，通过和C的操作移动到B上。
 * (2)把A剩下的最大的一个盘移动到C。
 * (3)再把B上的n-1个盘，通过和A的操作移动到C上。
 * 不管怎么移动问题和子问题的关系都可以是这三步，下面就可以开始递归。
 * @param n
 * @param A
 * @param C
 * @param B
 */
function towerOfHanoi(n: number, A: Stack<number>, C: Stack<number>, B: Stack<number>): void {
  if (n > 0) {
    towerOfHanoi(n - 1, A, B, C); // 将 n-1 从 A -> B
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    C.push(A.pop()!); // 目标元素 n A -> C
    console.log('-----');
    console.log('Source: ' + A.toString());
    console.log('Helper: ' + B.toString());
    console.log('Dest: ' + C.toString());
    towerOfHanoi(n - 1, B, C, A); // 将 n-1 从 B -> C
  }
}


const source = new Stack<number>();
source.push(3);
source.push(2);
source.push(1);

const dest = new Stack<number>();
const helper = new Stack<number>();
source.print();
helper.print();
dest.print();

towerOfHanoi(source.size, source, dest, helper);


