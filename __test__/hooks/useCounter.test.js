import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Tests on useCounter hook', () => {
	test('should return defautl values', () => {
		const {
			result: { current },
		} = renderHook(() => useCounter());
		const { counter, decrement, increment, reset } = current;
		expect(counter).toBe(0);
		expect(decrement).toEqual(expect.any(Function));
		expect(increment).toEqual(expect.any(Function));
		expect(reset).toEqual(expect.any(Function));
	});

	test('should generate a counter with 100 as initial value', () => {
		const {
			result: { current },
		} = renderHook(() => useCounter(100));
		const { counter } = current;
		expect(counter).toBe(100);
	});

	test('should increase the counter', () => {
		const { result } = renderHook(() => useCounter());
		const { increment } = result.current;
		act(() => {
			increment();
			increment(2);
		});
		expect(result.current.counter).toBe(3);
	});

	test('should decrease the counter', () => {
		const { result } = renderHook(() => useCounter(5));
		const { decrement } = result.current;
		act(() => {
			decrement();
			decrement(2);
		});
		expect(result.current.counter).toBe(2);
	});

	test('should reset the counter', () => {
		const { result } = renderHook(() => useCounter());
		const { reset, increment } = result.current;
		act(() => {
			increment(2);
			reset();
		});
		expect(result.current.counter).toBe(0);
	});
});
