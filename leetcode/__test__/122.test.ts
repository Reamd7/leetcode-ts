import maxProfit from '../122.买卖股票的最佳时机-ii';

describe('买卖股票的最佳时机', () => {
  it('[7,1,5,3,6,4] -> 7', () => {
    expect(
      maxProfit([7,1,5,3,6,4]),
    ).toEqual(7);
  });
  it('[1,2,3,4,5] -> 4', () => {
    expect(
      maxProfit([1,2,3,4,5]),
    ).toEqual(4);
  });
  it('[7,6,4,3,1] -> 0', () => {
    expect(
      maxProfit([7,6,4,3,1]),
    ).toEqual(0);
  });
});