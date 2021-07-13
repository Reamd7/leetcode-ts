import rob from '../198.打家劫舍';

describe('打家劫舍', () => {
  it('[2,1,1,2] -> 4', () => {
    expect(
      rob([2,1,1,2]),
    ).toEqual(4);
  });
  it('[2,7,9,3,1] -> 12', () => {
    expect(
      rob([2,7,9,3,1]),
    ).toEqual(12);
  });
});