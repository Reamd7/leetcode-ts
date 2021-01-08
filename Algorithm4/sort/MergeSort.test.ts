import Sort from './MergeSort';
describe('归并排序', () => {
  it('[344, 11, 4, 3, 2, 113, 6, 1, 9, 8, 5, 7, 19, 123, 22, 10]', () => {
    expect(
      new Sort().sort([344, 11, 4, 3, 2, 113, 6, 1, 9, 8, 5, 7, 19, 123, 22, 10]),
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 19, 22, 113, 123, 344]);
  });
  it('[1, 10, 11, 124941, 113, 2438, 124942, 2, 19, 123, 1839, 8, 9, 1248914, 3, 4, 5, 6, 22, 7, 344]', () => {
    expect(
      new Sort().sort([1, 10, 11, 124941, 113, 2438, 124942, 2, 19, 123, 1839, 8, 9, 1248914, 3, 4, 5, 6, 22, 7, 344]),
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 19, 22, 113, 123, 344, 1839, 2438, 124941, 124942, 1248914]);
  });
  it('[6,2,1,3,4,5]', () => {
    expect(
      new Sort().sort([6, 2, 1, 3, 4, 5]),
    ).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

