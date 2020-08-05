export default abstract class BaseSort<T>  {
  abstract sort(arr: Array<T>): Array<T>
  /**
   * 排序条件
   */
  abstract compare(a: T, b: T): boolean

  protected exchange(arr: Array<T>, index: number, jndex: number) {
    [arr[index],arr[jndex]] = [arr[jndex],arr[index]]
    return arr
  }

  protected show(arr: Array<T>) {
    console.log(JSON.stringify(arr))
  }

  protected isSorted(arr: Array<T>) {
    for (let index = 1; index < arr.length; index++) {
      if (this.compare(arr[index], arr[index-1])) return false
    }
    return true
  }
}
