import main from './283.移动零';

describe('移动零', () => {
  it('给定 nums = [0,1,0,3,12], target = 9', () => {
    const nums = [0, 1, 0, 3, 12];
    main(nums);
    expect(
      nums,
    ).toEqual([1, 3, 12, 0, 0]);
  });
  it('给定 nums = [0,1,0,3, 0 ,12], target = 9', () => {
    const nums = [0, 1, 0, 3, 0, 12];
    main(nums);
    expect(
      nums,
    ).toEqual([1, 3, 12, 0, 0, 0]);
  });
});
