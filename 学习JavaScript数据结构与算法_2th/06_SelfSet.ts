/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
class SelfSet {
  protected item: Record<string | number, string | number> = {};
  protected length = 0;

  has(value: string | number) {
    return value in this.item;
  }

  add(value: string | number) {
    if (!this.has(value)) {
      this.item[value] = value;
      this.length += 1;
      return true;
    }
    return false;
  }
  remove(value: string | number) {
    if (this.has(value)) {
      delete this.item[value];
      this.length -= 1;
      return true;
    }
    return false;
  }

  get size() {
    return this.length;
  }

  values() {
    return Object.keys(this.item);
  }
}

const set = new SelfSet();

set.add(1);
console.log(set.values()); //输出["1"]
console.log(set.has(1)); // 输出true
console.log(set.size); // 输出1
set.add(2);
console.log(set.values()); //输出["1", "2"]
console.log(set.has(2)); //true
console.log(set.size); //2
set.remove(1);
console.log(set.values()); //输出["2"]
set.remove(2);
console.log(set.values()); //输出[]

/**
 * 并集 A∪B = { x | x ∈ A∨x ∈ B }
 * @param A
 * @param B
 */
export function unionSet<T>(A: Set<T>, B: Set<T>) {
  const unionSet = new Set<T>();
  for (const v of A) unionSet.add(v);
  for (const v of B) unionSet.add(v);
  return unionSet;
}

/**
 * 交集 A∩B = { x | x ∈ A∧x ∈ B }
 * @param A
 * @param B
 */
export function intersection<T>(A: Set<T>, B: Set<T>) {
  const intersectionSet = new Set<T>();
  for (const iterator of A) {
    if (B.has(iterator)) {
      intersectionSet.add(iterator);
    }
  }
  return intersectionSet;
}
/**
 * 差集 A-B = { x | x ∈ A ∧ x ∉ B }
 * @param A
 * @param B
 */
export function difference<T>(A: Set<T>, B: Set<T>) {
  const intersectionSet = new Set<T>();
  for (const iterator of A) {
    if (!B.has(iterator)) {
      intersectionSet.add(iterator);
    }
  }
  return intersectionSet;
}
/**
 * 子集 A⊆B ∀x { x ∈ A → x ∈ B }
 * @param A
 * @param B
 */
export function subset<T>(A: Set<T>, B: Set<T>) {
  if (A.size > B.size) {
    return false;
  } else {
    for (const iterator of A) {
      if (!B.has(iterator)){ //{3}
        return false; //{4}
      }
    }
    return true;
  }
}
