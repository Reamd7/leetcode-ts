import main from './27.移除元素';

describe('移除元素', () => {
  it('给定 nums = [0,1,0,3,12, 0, 1], target = 9', () => {
    const nums = [0, 1, 0, 3, 12, 0, 1];
    expect(
      main(nums, 0),
    ).toEqual(4);
  });
  it('给定 nums = [0,1,0,3, 0 ,12], target = 9', () => {
    const nums = [0, 1, 0, 3, 0, 12];
    expect(
      main(nums, 0),
    ).toEqual(3);
  });
});
