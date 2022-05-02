import main from '../591.标签验证器';

describe('标签验证器', () => {
  it('1', () => {
    expect(
      main('<DIV>This is the first line <![CDATA[<div>]]></DIV>'),
    ).toEqual(true);
  });
  it('2', () => {
    expect(
      main('<A>  <B> </A>   </B>'),
    ).toEqual(false);
  });
  it('3', () => {
    expect(
      main('<DIV>  div tag is not closed  <DIV>'),
    ).toEqual(false);
  });
  it('4', () => {
    expect(
      main('<DIV>  unmatched <  </DIV>'),
    ).toEqual(false);
  });
  it('5', () => {
    expect(
      main('<DIV> closed tags with invalid tag name  <b>123</b> </DIV>'),
    ).toEqual(false);
  });
  it('6', () => {
    expect(
      main('<DIV> unmatched tags with invalid tag name  </1234567890> and <CDATA[[]]>  </DIV>'),
    ).toEqual(false);
  });

  it('6', () => {
    expect(
      main('<DIV>  unmatched start tag <B>  and unmatched end tag </C>  </DIV>'),
    ).toEqual(false);
  });
  it('6', () => {
    expect(
      main('<![CDATA[wahaha]]]><![CDATA[]> wahaha]]>'),
    ).toEqual(false);
  });

  it('7', () => {
    expect(
      main('<DIV><YFSYYS><UVBNIQ><XPMXUNT><WNGMV><OJJGQREMT><Z><GEJDP><LIQS><NCVYU><RAS><UYFKCJCDN><NA><POJVYT><Z><TDC><VUIZQC><BNANGX><TOF><MR>MK</MR></TOF></BNANGX></VUIZQC></TDC></Z></POJVYT></NA></UYFKCJCDN></RAS></NCVYU></LIQS></GEJDP></Z></OJJGQREMT></WNGMV></XPMXUNT></UVBNIQ></YFSYYS></DIV>'),
    ).toEqual(true);
  });
});
