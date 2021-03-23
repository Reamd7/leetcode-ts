import main from '../49.字母异位词分组';

describe('字母异位词分组', () => {
  it('给定 nums = [2, 1, 2, 0, 2, 1, 2]', () => {
    expect(
      main(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']).map(v => v.sort()),
    ).toMatchObject([
      ['ate', 'eat', 'tea'],
      ['nat', 'tan'],
      ['bat'],
    ].map(v => v.sort()));
  });
});
