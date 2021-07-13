import main from '../279.完全平方数';

describe('完全平方数', () => {
  it('input 12, output 3', () => {
    expect(main(12)).toEqual(3);
  });

  it('input 7929, output 2', () => {
    expect(main(7929)).toEqual(2);
  });

  it('input 7927, output 4', () => {
    expect(main(7927)).toEqual(4);
  });

  it('input 6110, output 3', () => {
    expect(main(6110)).toEqual(3);
  });
});
