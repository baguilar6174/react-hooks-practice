import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todo.reducer';

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const onNewTodo = (todo) => {
		const action = {
			type: '[TODO] Add Todo',
			payload: todo,
		};
		dispatch(action);
	};

	const onRemoveTodo = (id) => {
		const action = {
			type: '[TODO] Remove Todo',
			payload: id,
		};
		dispatch(action);
	};

	const onToggleTodo = (id) => {
		const action = {
			type: '[TODO] Toggle Todo',
			payload: id,
		};
		dispatch(action);
	};

	return {
		todos,
		onNewTodo,
		onRemoveTodo,
		onToggleTodo,
		todosCount: todos.length,
		todosPendingCount: todos.filter((todo) => !todo.done).length,
	};
};
