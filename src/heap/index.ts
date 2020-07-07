/**
 * author iWuzhi
 * date 2020-07-06 21:08:25
 */


type ISourceList = Array<number>;

export const Heapify = (sourceList: ISourceList,  delay?: number, records?: Array<Array<number>>) => {
  const lastBeforeChildIndex = sourceList.length % 2 === 0 ? sourceList.length / 2 : Math.floor(sourceList.length / 2);
  for (let i = lastBeforeChildIndex; i > 0; i --) {
    maxHeapify(sourceList, i, delay, records);
  }
  return sourceList;
}

export const maxHeapify = (sourceList: ISourceList, index: number, delay?: number, records?: Array<Array<number>>) => {
  const leftIndex = 2 * index, rightIndex = leftIndex + 1;
  let _s = sourceList;
  sourceList = new Proxy(sourceList, {
    get(arr, key) {
      if (key === 'length') return arr[key];
      return arr[(key as number) - 1];
    },
    set(arr, key, value) {
      if (key === 'length') return arr[key] =value;
      return arr[Number(key) - 1] = value;
    }
  });
  let [largestIndex, largestVal] = [index, sourceList[index]];
  if (leftIndex <= sourceList.length && sourceList[leftIndex] > largestVal) {
    largestIndex = leftIndex;
    largestVal = sourceList[largestIndex];
  }
  if (rightIndex <= sourceList.length && sourceList[rightIndex] > largestVal) {
    largestIndex = rightIndex;
    largestVal = sourceList[largestIndex];
  }
  if (largestIndex !== index) {
    largestVal = sourceList[largestIndex];
    sourceList[largestIndex] = sourceList[index];
    sourceList[index] = largestVal;
    records?.push([index, largestIndex]);
    if (delay) {
      setTimeout(() => {
        maxHeapify(_s, largestIndex, delay, records);
      }, delay);
    } else {
      maxHeapify(_s, largestIndex, delay, records);
    }
  };
}