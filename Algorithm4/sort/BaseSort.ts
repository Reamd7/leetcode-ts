export default abstract class BaseSort<T>  {
  abstract sort(arr: Array<T>): Array<T>

  protected exchange(arr: Array<T>, index: number, jndex: number): T[] {
    if (index !== jndex) {
      [arr[index], arr[jndex]] = [arr[jndex], arr[index]];
    }
    return arr;
  }

  protected show(arr: Array<T>): void {
    console.log(JSON.stringify(arr));
  }

  less(a: number, b: number): boolean {
    return a < b;
  }
}
