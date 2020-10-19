import BaseSort from './BaseSort';

/**
 * 选择排序：首先找到数组中最小的元素，其次，将它和数组的第一个元素交换位置。
 * 再次：在剩下的元素中找到最小的元素，将他和数组中第二个元素交换位置。
 * ...
 *
 *
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
        if (this.less(arr[j], arr[min])) min = j; // 找到最小值（min）下标
      }
      this.exchange(arr, index, min); // 交换第一个数和最小值。
    }
    return arr;
  }

  less(a: number, b: number) {
    return a < b;
  }
}
