import main from '../111.二叉树的最小深度';
import { createTree } from '../util';

describe('二叉树的最小深度', () => {
  it('[3,9,20,null,null,15,7] -> 2', () => {
    expect(
      main(createTree([3,9,20,null,null,15,7])),
    ).toEqual(2);
  });
  it('[2,null,3,null,4,null,5,null,6] -> 5', () => {
    expect(
      main(createTree([2,null,3,null,4,null,5,null,6])),
    ).toEqual(5);
  });
});
