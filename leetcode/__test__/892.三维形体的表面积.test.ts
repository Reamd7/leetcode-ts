import main from '../892.三维形体的表面积';

describe('三维形体的表面积', () => {
  it('1. [[2]] => 10', () => {
    expect(
      main([[2]]),
    ).toEqual(10);
  });
  it('2. [[1,2],[3,4]] => 34', () => {
    expect(
      main([[1,2],[3,4]]),
    ).toEqual(34);
  });
  it('3. [[1,0],[0,2]] => 16', () => {
    expect(
      main([[1,0],[0,2]]),
    ).toEqual(16);
  });
  it('4. [[1,1,1],[1,0,1],[1,1,1]] => 32', () => {
    expect(
      main([[1,1,1],[1,0,1],[1,1,1]]),
    ).toEqual(32);
  });

  it('5. [[2,2,2],[2,1,2],[2,2,2]] => 32', () => {
    expect(
      main([[2,2,2],[2,1,2],[2,2,2]]),
    ).toEqual(46);
  });
});
