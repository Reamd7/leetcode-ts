import main from './80.删除排序数组中的重复项-ii';

describe('删除排序数组中的重复项-ii', () => {
  it('给定 nums = [0, 0, 1, 1, 1, 1, 2, 2, 35, 36, 44, 44, 44]', () => {
    const nums = [0, 0, 1, 1, 1, 1, 2, 2, 35, 36, 44, 44, 44];
    const res = [0, 0, 1, 1, 2, 2, 35, 36, 44, 44];
    const N = res.length;
    expect(main(nums)).toEqual(N);
    expect(nums.slice(0, N)).toEqual(res);
  });

  it('给定 nums = [0,0,1,1,1,2,2,3,3,4,4,100]', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 100];
    const res = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 100];
    const N = res.length;
    expect(main(nums)).toEqual(N);
    expect(nums.slice(0, N)).toEqual(res);
  });
});
