import main from '../75.颜色分类';

describe('颜色分类', () => {
  it('给定 nums = [2, 1, 2, 0, 2, 1, 2]', () => {
    const nums = [2, 1, 2, 0, 2, 1, 2];
    const res = [0, 1, 1, 2, 2, 2, 2];
    main(nums);
    expect(nums).toEqual(res);
  });
  it('给定 nums = [2, 2, 2, 2, 2, 1, 2]', () => {
    const nums = [2, 2, 2, 2, 2, 1, 2];
    const res = [1, 2, 2, 2, 2, 2, 2];
    main(nums);
    expect(nums).toEqual(res);
  });

  it('给定 nums = [2]', () => {
    const nums = [2];
    const res = [2];
    main(nums);
    expect(nums).toEqual(res);
  });
  it('给定 nums = [1, 0]', () => {
    const nums = [1, 0];
    const res = [0, 1];
    main(nums);
    expect(nums).toEqual(res);
  });

  it('给定 nums = [1, 2]', () => {
    const nums = [1, 2];
    const res = [1, 2];
    main(nums);
    expect(nums).toEqual(res);
  });

  it('给定 nums = [1, 2, 0]', () => {
    const nums = [1, 2, 0];
    const res = [0, 1, 2];
    main(nums);
    expect(nums).toEqual(res);
  });
});
