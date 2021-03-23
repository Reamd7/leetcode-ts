import main from './969.煎饼排序';
function run(target: number[]): number[] {
  const queue = main(target);
  for (const K of queue) {
    target.slice(0, K).reverse().forEach((v, i) => (target[i] = v));
  }
  return target;
}
describe('煎饼排序', () => {
  it('1. [10, 5, 1, 6, 3, 8, 2, 4, 7, 9]', () => {
    const target = [10, 5, 1, 6, 3, 8, 2, 4, 7, 9];
    const sort = [...target].sort(((a, b) => (a - b)));

    expect(run( target )).toEqual(sort);
  });
});
