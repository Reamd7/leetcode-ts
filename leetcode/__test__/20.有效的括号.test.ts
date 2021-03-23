import main from '../20.有效的括号';

describe('有效的括号', () => {
  it('给定 nums = ()()[{}] => true', () => {
    expect(main('()()[{}]')).toEqual(true);
  });

  it('给定 nums = (()[{}] => false', () => {
    expect(main('(()[{}]')).toEqual(false);
  });

  it('给定 nums = ()[({)}] => false', () => {
    expect(main('()[({)}]')).toEqual(false);
  });
});
