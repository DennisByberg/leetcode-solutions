import { describe, expect, it } from 'vitest';
import { createCounter } from './createCounter';

describe(createCounter, () => {
  it('Should handle increment, reset, and decrement calls correctly for init = 5', () => {
    const counter = createCounter(5);
    expect(counter.increment()).toEqual(6);
    expect(counter.reset()).toEqual(5);
    expect(counter.decrement()).toEqual(4);
  });

  it('Should handle multiple increment, decrement, and reset calls correctly for init = 0', () => {
    const counter = createCounter(0);
    expect(counter.increment()).toEqual(1);
    expect(counter.increment()).toEqual(2);
    expect(counter.decrement()).toEqual(1);
    expect(counter.reset()).toEqual(0);
    expect(counter.reset()).toEqual(0);
  });
});
