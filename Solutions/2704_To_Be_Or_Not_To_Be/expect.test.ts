import { describe, it, expect as vitestExpect } from 'vitest';
import expect from './expect';

describe('expect', () => {
  it('should return true for equal values with toBe', () => {
    vitestExpect(expect(5).toBe(5)).toBe(true);
  });

  it('should throw "Not Equal" for non-equal values with toBe', () => {
    vitestExpect(() => expect(5).toBe(null)).toThrow('Not Equal');
  });

  it('should return true for non-equal values with notToBe', () => {
    vitestExpect(expect(5).notToBe(null)).toBe(true);
  });

  it('should throw "Equal" for equal values with notToBe', () => {
    vitestExpect(() => expect(5).notToBe(5)).toThrow('Equal');
  });
});
