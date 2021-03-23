import main from '../1018.可被-5-整除的二进制前缀';

describe('可被-5-整除的二进制前缀', () => {
  it('1. [0] true', () => {
    expect(main( [0] )).toEqual([true]);
  });

  it('2. [0, 1] false', () => {
    expect(main( [0, 1] )).toEqual([false]);
  });
});
