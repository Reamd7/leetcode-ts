import main from './860.柠檬水找零';

describe('柠檬水找零', () => {
  it('1. [10] => false', () => {
    expect(
      main([10]),
    ).toEqual(false);
  });
  it('2. [5,5,10] => true', () => {
    expect(
      main([5,5,10]),
    ).toEqual(true);
  });
  it('3. [10,10] => false', () => {
    expect(
      main([10,10]),
    ).toEqual(false);
  });
  it('4. [5,5,10,10,20] => false', () => {
    expect(
      main([5,5,10,10,20]),
    ).toEqual(false);
  });

  it('5. [5,5,5,10,20] => true', () => {
    expect(
      main([5,5,5,10,20]),
    ).toEqual(true);
  });
});
