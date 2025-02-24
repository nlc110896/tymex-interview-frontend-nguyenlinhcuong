import { formatPrice, getGradient } from '@/utilities';
import { gradients } from '@/common';

describe('Units Utilities', () => {
  test('Format Price', () => {
    expect(formatPrice(0)).toBe('0');
    expect(formatPrice(45.75)).toBe('45,75');
  });
});
