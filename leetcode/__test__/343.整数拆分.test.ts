import main from '../343.整数拆分';

describe('煎饼排序', () => {
  it('1 => 1', () => {
    expect(main(1)).toEqual(1);
  });
  it('2 => 1', () => {
    expect(main(2)).toEqual(1);
  });
  it('3 => 2', () => {
    expect(main(3)).toEqual(2);
  });
});
