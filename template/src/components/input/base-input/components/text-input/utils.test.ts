import { defaultSanitizer, defaultFormatter } from './utils';

describe('test default sanitizer', () => {
  it('should return the same value on call', () => {
    const testValue = 'Test Value';
    expect(defaultSanitizer(testValue)).toBe(testValue);
  });
});

describe('test default formatter', () => {
  it('should return the same value on call', () => {
    const testValue = 'Test Value';
    expect(defaultFormatter(testValue)).toBe(testValue);
  });
});
