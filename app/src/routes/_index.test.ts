import { describe, test, afterEach, expect, beforeEach, vi } from 'vitest';
import { cleanup, render, screen, fireEvent } from '@testing-library/svelte';

import index from './index.svelte';

vi.mock('$app/navigation', () => {
	return {
		goto: vi.fn(),
	};
});

describe('Index', () => {
	afterEach(() => {
		vi.restoreAllMocks();
		cleanup();
	});

	test('shows greeing', async () => {
		render(index, {});

		const welcome = screen.getByText('Welcome to SvelteKit');
		expect(welcome).to.be.visible;
	});
});
