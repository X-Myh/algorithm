/**
 * author iWuzhi
 * date 2020-07-06 22:01:25
 */

import { Heapify, maxHeapify } from './index';



describe('Heap#maxHeapify', () => {
  const sourceList = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
  test('[4, 1, 3, 2, 16, 9, 10, 14, 8, 7], 5 should be [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]', () => {
    maxHeapify(sourceList, 5);
    expect(sourceList).toEqual([4, 1, 3, 2, 16, 9, 10, 14, 8, 7]);
  })
  test('[4, 1, 3, 2, 16, 9, 10, 14, 8, 7], 4 should be [4, 1, 3, 14, 16, 9, 10, 2, 8, 7]', () => {
    maxHeapify(sourceList, 4);
    expect(sourceList).toEqual([4, 1, 3, 14, 16, 9, 10, 2, 8, 7]);
  });
})