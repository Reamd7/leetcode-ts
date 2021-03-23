import main from '../26.删除排序数组中的重复项';

describe('移除元素', () => {
  it('给定 nums = [0,0,1,1,1,2,2,3,3,4,4]', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4];
    const res = [0, 1, 2, 3, 4];
    const N = res.length;
    expect(main(nums)).toEqual(N);
    expect(nums.slice(0, N)).toEqual(res);
  });

  it('给定 nums = [0,0,1,1,1,2,2,3,3,4,4, 100]', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 100];
    const res = [0, 1, 2, 3, 4, 100];
    const N = res.length;
    expect(main(nums)).toEqual(N);
    expect(nums.slice(0, N)).toEqual(res);
  });
});
