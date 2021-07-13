import maxProfit from '../121.买卖股票的最佳时机';

describe('买卖股票的最佳时机', () => {
  it('[7,6,4,3,1] -> 0', () => {
    expect(
      maxProfit([7, 6, 4, 3, 1]),
    ).toEqual(0);
  });
  it('[7,1,5,3,6,4] -> 5', () => {
    expect(
      maxProfit([7, 1, 5, 3, 6, 4]),
    ).toEqual(5);
  });
});