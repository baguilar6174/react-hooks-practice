import { useTodo } from '../hooks';
import { TodoAdd, TodoList } from './components';

export const TodoApp = () => {
	const {
		todos,
		onNewTodo,
		onRemoveTodo,
		onToggleTodo,
		todosCount,
		todosPendingCount,
	} = useTodo();

	return (
		<>
			<h1>
				Todo App ({todosCount}) <small>pending: {todosPendingCount} </small>{' '}
			</h1>
			<hr />
			<div className='row'>
				<div className='col-7'>
					<TodoList
						todos={todos}
						onRemoveTodo={onRemoveTodo}
						onToggleTodo={onToggleTodo}
					/>
				</div>
				<div className='col-5'>
					<h4>Add TODO</h4>
					<hr />
					<TodoAdd onNewTodo={onNewTodo} />
				</div>
			</div>
		</>
	);
};
