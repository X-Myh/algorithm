/**
 * author iWuzhi
 * date 2020-10-17 10:44:24
 */


interface IQuickSort {
  (source: number[], p: number, r: number): number [];
}

const _exchange = <T extends unknown>(source: T[], a: number, b: number): T[] => {
  const aItem = source.splice(a, 1, source[b])[0];
  source[b] = aItem;
  return source;
}
const _slice = (source: number[], p: number, r: number) : number[] => {
  const splitLast = source[r];
  let moveIndex = -1;
  for (let i = p; i < r - p; i ++) {
    if (source[i] < splitLast) {
      moveIndex ++;
      _exchange(source, moveIndex, i);
    }
  }
  _exchange(source, moveIndex + 1, r);
  return [moveIndex];
}

const QuickSort: IQuickSort = function (source, p, r) {
  if (p < r) {
    const [moveIndex] = _slice(source, p, r);
    QuickSort(source, p, moveIndex);
    QuickSort(source, moveIndex + 2, r);
  }
  return source;
}

export const slice = _slice;
export default QuickSort;

