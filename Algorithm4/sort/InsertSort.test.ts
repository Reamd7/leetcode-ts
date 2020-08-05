import InsertSort from './InsertSort';
describe("插入排序测试", ()=>{
  it('[1,2,3,4,5,6]', () => {
    expect(
      new InsertSort().sort([1,2,3,4,5,6])
    ).toEqual([1,2,3,4,5,6])
  })
  it('[2,1,3,4,5,6]', () => {
    expect(
      new InsertSort().sort([2,1,3,4,5,6])
    ).toEqual([1,2,3,4,5,6])
  })
  it('[6,2,1,3,4,5]', () => {
    expect(
      new InsertSort().sort([6,2,1,3,4,5])
    ).toEqual([1,2,3,4,5,6])
  })
})
