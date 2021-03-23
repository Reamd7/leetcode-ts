import main from './908.最小差值-i';

describe('最小差值', () => {
  it('main([0, 10], 2) => 6', () => {
    expect(
      main([0, 10], 2),
    ).toEqual(6);
  });
  it('main([1], 0) => 0', () => {
    expect(main([1], 0)).toEqual(0);
  });

  it('main([1,3,6], 3) => 0', () => {
    expect(main([1,3,6], 3)).toEqual(0);
  });
});
