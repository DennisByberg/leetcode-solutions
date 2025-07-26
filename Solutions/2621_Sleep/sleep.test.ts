import { describe, expect, it } from 'vitest';
import { sleep } from './sleep';

describe(sleep, () => {
  it('It should return a promise that resolves after 100ms', async () => {
    const start = Date.now();
    await sleep(100);
    const end = Date.now();

    // Allow 5ms tolerance for timing variations in different environments
    expect(end - start).toBeGreaterThanOrEqual(95);
  });

  it('It should return a promise that resolves after 200ms', async () => {
    const start = Date.now();
    await sleep(200);
    const end = Date.now();

    // Allow 5ms tolerance for timing variations in different environments
    expect(end - start).toBeGreaterThanOrEqual(195);
  });
});
