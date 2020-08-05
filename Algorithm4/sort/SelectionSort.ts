import BaseSort from "./BaseSort";

/**
 * 运行时间和输入无关。
 * 数据移动是最少的。
 *
 * @param arr 排序数组
 */
export default class SelectionSort extends BaseSort<number> {
  sort(arr: Array<number>) {
    const N = arr.length;
    for (let index = 0; index < N; index++) { // N
      let min = index; // 最小元素的索引
      for (let j = index + 1; j < N; j++) {  // 迭代当前元素后面的子列
        if (this.compare(arr[j], arr[min])) min = j // 找到最小值（min）
      }
      this.exchange(arr, index, min); // 交换第一个数和最小值。
    }
    return arr
  }

  compare(a: number, b: number) {
    return a < b
  }
}
