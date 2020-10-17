/**
 * author iWuzhi
 * date 2020-10-17 15:43:14
 */

import QuickSort, { slice } from '../../quick-sort';


describe('QuickSort', () => {

  describe('#slice', () => {
    test('[3, 1] should be [3, 1]', () => {
      const source = [3, 1];
      expect(slice(source, 0, 1)).toEqual([-1]);
      expect(source).toEqual([1, 3]);
    });
    test('[3, 1, 4, 6, 5] should be [3, 1, 4, 5, 6] and return 3', () => {
      const source = [3, 1, 4, 6, 5];
      expect(slice(source, 0, 4)).toEqual([2]);
      expect(source).toEqual([3, 1, 4, 5, 6]);
    });

    test('[3, 1, 4] should be [3, 1, 4]', () => {
      const source = [3, 1, 4];
      slice(source, 0, 2);
      expect(source).toEqual([3, 1, 4]);
    });
  });

  describe("QuickSort", () => {
    test('[3, 1] should be [1, 3]', () => {
      const source = [3, 1];
      QuickSort(source, 0, 1);
      expect(source).toEqual([1, 3]);
    });

    test('[3, 1, 4] should be [1, 3, 4]', () => {
      const source = [3, 1, 4];
      QuickSort(source, 0, 2);
      expect(source).toEqual([1, 3, 4]);
    });

    test('[3, 1, 4, 6, 5] should be [1, 3, 4, 5, 6]', () => {
      const source = [3, 1, 4, 6, 5];
      QuickSort(source, 0, 4);
      expect(source).toEqual([1, 3, 4, 5, 6]);
    });
  });

});