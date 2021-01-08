import BaseSort from './BaseSort';

export default class InsertSort extends BaseSort<number> {
  sort(arr: Array<number>): number[] {
    const N = arr.length;
    for (let index = 1; index < N; index++) { // N
      for (let j = index; j > 0 && this.less(arr[j], arr[j - 1]); j--) {
        // 不断向前交换，直到遇见一个比j小的数。
        this.exchange(arr, j, j - 1);
      }
    }
    return arr;
  }
}
