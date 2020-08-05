// import { Measure, testWrapper } from "../../utils/Measure";
import SelectionSort from "./SelectionSort";
describe('选择排序', () => {
  it('[1,2,3,4,5,6]', () => {
    expect(
      new SelectionSort().sort([1,2,3,4,5,6])
    ).toEqual([1,2,3,4,5,6])
  })
  it('[2,1,3,4,5,6]', () => {
    expect(
      new SelectionSort().sort([2,1,3,4,5,6])
    ).toEqual([1,2,3,4,5,6])
  })
  it('[6,2,1,3,4,5]', () => {
    expect(
      new SelectionSort().sort([6,2,1,3,4,5])
    ).toEqual([1,2,3,4,5,6])
  })
})

