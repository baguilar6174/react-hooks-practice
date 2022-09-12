import PropTypes from 'prop-types';

export const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }) => {
	return (
		<li className='list-group-item d-flex justify-content-between'>
			<span
				className={`${todo.done && 'text-decoration-line-through'}`}
				onClick={() => onToggleTodo(todo.id)}
				aria-label='span'
			>
				{todo.description}
			</span>{' '}
			<button onClick={() => onRemoveTodo(todo.id)} className='btn btn-danger'>
				Delete
			</button>{' '}
		</li>
	);
};

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	onRemoveTodo: PropTypes.func.isRequired,
	onToggleTodo: PropTypes.func.isRequired,
};
