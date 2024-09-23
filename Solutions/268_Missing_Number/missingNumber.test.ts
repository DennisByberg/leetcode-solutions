import { describe, expect, it } from 'vitest';
import missingNumber from './missingNumber';

describe(missingNumber, () => {
  it('Should return the only number in the range that is missing from the array', () => {
    expect(missingNumber([3, 0, 1])).toEqual(2);
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toEqual(8);
    expect(missingNumber([0, 1, 2])).toEqual(3);
    expect(
      missingNumber([
        45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32, 4,
        16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30, 25, 47,
        0, 31, 42, 24, 10, 14,
      ])
    ).toEqual(18);
  });
});
