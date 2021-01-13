/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * 给定一个key参数，我们就能根据组成key的每个字符的ASCII码值的和得到一个数字。所以，首先需要一个变量来存储这个总和（行{1}）。
 * 然后，遍历key（行{2}）并将从ASCII表中查到的每个字符对应的ASCII值加到hash变量中（可以使用JavaScript的String类中的charCodeAt方法——行{3}）。
 * 最后，返回hash值。为了得到比较小的数值，我们会使用hash值和一个任意数做除法的余数（mod）。
 * @param key
 */
const loseloseHashCode = function (key: string) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % 37;
};
/**
 * 散列表
 */
export class HashTable {
  table: Array<string | undefined> = [];

  put(key: string, value: string) {
    const position = loseloseHashCode(key);
    console.log(position + ' - ' + key);
    this.table[position] = value;
  }

  get(key: string) {
    return this.table[loseloseHashCode(key)];
  }

  remove(key: string) {
    this.table[loseloseHashCode(key)] = undefined;
  }
}

const hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');

// 7.2.4 处理散列表中的冲突
// 有时候，一些键会有相同的散列值。不同的值在散列表中对应相同位置的时候，我们称其为冲突。
// - 分离链接法
//   包括为散列表的每一个位置创建一个链表并将元素存储在里面。它是解决冲突的最简单的方法，但是它在HashTable实例之外还需要额外的存储空间。
//   `[x]: LinkNode<val: {key: string, val: string}, next: LinkNode>`
// - 线性探查
//   另一种解决冲突的方法是线性探查。当想向表中某个位置加入一个新元素的时候，如果索引为index的位置已经被占据了，就尝试index+1的位置。如果index+1的位置也被占据了，就尝试index+2的位置，以此类推。
//   `[x]: LinkNode<val: {key: string, val: string}, next: null>`
//   `[x+1] -> [x+2]`
