/**
 * 哈希函数
 *
 * 1. 它包括初始化一个hash变量并赋值为一个质数（行{1}——大多数实现都使用5381），
 * 2. 然后迭代参数key（行{2}），
 * 3. 将hash与33相乘（用来当作一个魔力数），并和当前迭代到的字符的ASCII码值相加（行{3}）。
 * 4. 最后，我们将使用相加的和与另一个随机质数（比我们认为的散列表的大小要大——在本例中，我们认为散列表的大小为1000）相除的余数。
 */
export function djb2HashCode(key: string): number {
  let hash = 5381; // {1}
  for (let i = 0; i < key.length; i++) { // {2}
    hash = hash * 33 + key.charCodeAt(i); // {3}
  }
  return hash % 1013; // {4} //取模意味着这个数据结构最多存放 1012 个元素
};
