import main from './859.亲密字符串';

describe('亲密字符串', () => {
  it('1. A = "aaaaaaaa", B = "aaaaaaaa" => true', () => {
    expect(
      main('aaaaaaaa', 'aaaaaaaa'),
    ).toEqual(true);
  });
  it('2. A = "ab", B = "aa" => false', () => {
    expect(
      main('ab', 'aa'),
    ).toEqual(false);
  });
  it('3. A = "ba", B = "ab" => true', () => {
    expect(
      main('ba', 'ab'),
    ).toEqual(true);
  });
  it('4. A = "aaaaaaabc", B = "aaaaaaacb" => true', () => {
    expect(
      main('aaaaaaabc', 'aaaaaaacb'),
    ).toEqual(true);
  });
  it('5. A = "", B = "aaaaaaacb" => false', () => {
    expect(
      main('', 'aaaaaaacb'),
    ).toEqual(false);
  });
  it('6. A = "ab", B = "ab" => false', () => {
    expect(
      main('ab', 'ab'),
    ).toEqual(false);
  });
  it('7. A = "abcd", B = "badc" => false', () => {
    expect(
      main('abcd', 'badc'),
    ).toEqual(false);
  });
  it('8. A = "", B = "" => false', () => {
    expect(
      main('', ''),
    ).toEqual(false);
  });
  it('9. A = "abab", B = "abab" => true', () => {
    expect(
      main('abab', 'abab'),
    ).toEqual(true);
  });
});
