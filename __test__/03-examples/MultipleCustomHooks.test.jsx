import { screen, render, fireEvent } from '@testing-library/react';
import MultipleCustomHooks from '../../src/03-examples/MultipleCustomHooks';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Tests on MultipleCustomHooks components', () => {
	const mockIncrement = jest.fn();

	useCounter.mockReturnValue({
		counter: 1,
		increment: mockIncrement,
	});

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('should show default component', () => {
		useFetch.mockReturnValue({ data: null, isLoading: true, error: null });
		render(<MultipleCustomHooks />);
		expect(screen.getByText('Loading...'));
		expect(screen.getByText('The Breaking Bad API'));
		const nextButton = screen.getByRole('button', { name: 'Next quote' });
		expect(nextButton.disabled).toBe(true);
		/* screen.debug(); */
	});

	test('should show a quote', () => {
		useFetch.mockReturnValue({
			data: [{ author: 'Bryan', quote: 'Hello world' }],
			isLoading: false,
			error: null,
		});
		render(<MultipleCustomHooks />);
		/* screen.debug(); */
		expect(screen.getAllByText('Hello world'));
		const nextButton = screen.getByRole('button', { name: 'Next quote' });
		expect(nextButton.disabled).toBe(false);
	});

	test('should call increment function (useCounter Hook)', () => {
		useFetch.mockReturnValue({
			data: [{ author: 'Bryan', quote: 'Hello world' }],
			isLoading: false,
			error: null,
		});

		render(<MultipleCustomHooks />);
		/* screen.debug(); */
		const nextButton = screen.getByRole('button', { name: 'Next quote' });
		fireEvent.click(nextButton);

		expect(mockIncrement).toHaveBeenCalled();
	});
});
