import React from 'react';
import { test, expect } from 'vitest';

test('alias works', () => {
  console.log('React version:', React.version);
  console.log('React act:', typeof (React as any).act);
  expect(typeof (React as any).act).toBe('function');
});
