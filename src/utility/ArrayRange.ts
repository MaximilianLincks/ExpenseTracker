function arrayRange<T>(seed: T, generator: (val: T) => T, count: number) : T[] {
  if (count == 0) return [];
  let arr: T[] = [seed];

  for (let i = 1; i < count; i++) {
    arr.push(generator(arr[arr.length-1]));
  }
  return arr;
};
export default arrayRange;