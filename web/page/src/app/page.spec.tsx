import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from './page';

test('Page', () => {
	expect(() => render(<Page />)).not.toThrow();
	expect(render(<Page />)).toBeDefined();
});
