import BaseSort from "./BaseSort";

/**
 * 这就是(分组+插入)排序
 * @param arr 排序数组
 */
export default class ShellSort extends BaseSort<number> {
  sort(arr: Array<number>) {
    const N = arr.length;
    let gap = 1;
    while (gap < N/3) gap = 3*gap + 1; // 动态定义间隔序列
    while (gap >= 1) {
      // 将数组变为h有序
      for (let i = gap; i < N; i++) {
        // !! 子序列插入排序 , 对比插入排序
        // 将 a[i] 插入到 a[i - h], a[i - 2*h], a[i - 3*h] 之中
        for (let j = i; j >= gap && this.less(arr[j], arr[j-gap]); j-=gap) {
          this.exchange(arr, j, j-gap);
        }
      }
      gap = Math.floor(gap / 3) // 缩小增量 -> 1

    }
    return arr
  }

  less(a: number, b: number) {
    return a < b
  }
}
