import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks';

describe('Tests on useForm hook', () => {
	const initialForm = {
		name: 'Bryan',
		email: 'baguilar@test.com',
	};

	test('should return defautl values', () => {
		const { result } = renderHook(() => useForm(initialForm));
		expect(result.current).toEqual({
			name: initialForm.name,
			email: initialForm.email,
			form: initialForm,
			onInputChange: expect.any(Function),
			onResetForm: expect.any(Function),
		});
	});

	test('should change the form name', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const { onInputChange } = result.current;
		act(() => {
			onInputChange({
				target: {
					name: 'name',
					value: 'Alex',
				},
			});
		});
		expect(result.current.name).toBe('Alex');
		expect(result.current.form.name).toBe('Alex');
	});

	test('should reset the values', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const { onInputChange, onResetForm } = result.current;
		act(() => {
			onInputChange({
				target: {
					name: 'name',
					value: 'Alex',
				},
			});
			onResetForm();
		});
		expect(result.current.name).toBe(initialForm.name);
		expect(result.current.form.name).toBe(initialForm.name);
	});
});
