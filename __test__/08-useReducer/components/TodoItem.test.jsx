import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../../src/08-useReducer/components/TodoItem';

describe('Test on <TodoItem/>', () => {
	const todo = {
		id: 1,
		description: 'First task',
		done: false,
	};

	const onRemoveTodoMock = jest.fn();
	const onToggleTodoMock = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	test('must show the task to be completed', () => {
		render(
			<TodoItem
				todo={todo}
				onRemoveTodo={onRemoveTodoMock}
				onToggleTodo={onToggleTodoMock}
			/>
		);
		const liElement = screen.getByRole('listitem');
		expect(liElement.className).toBe(
			'list-group-item d-flex justify-content-between'
		);
	});

	test('span call toggle TODO with click', () => {
		render(
			<TodoItem
				todo={todo}
				onRemoveTodo={onRemoveTodoMock}
				onToggleTodo={onToggleTodoMock}
			/>
		);
		const spanElement = screen.getByLabelText('span');
		fireEvent.click(spanElement);
		expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
	});

	test('button call delete TODO with click', () => {
		render(
			<TodoItem
				todo={todo}
				onRemoveTodo={onRemoveTodoMock}
				onToggleTodo={onToggleTodoMock}
			/>
		);
		const buttonElement = screen.getByRole('button', { name: 'Delete' });
		fireEvent.click(buttonElement);
		expect(onRemoveTodoMock).toHaveBeenCalledWith(todo.id);
	});
});
