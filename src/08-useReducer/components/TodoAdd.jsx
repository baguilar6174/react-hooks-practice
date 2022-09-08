import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';

const initialForm = {
	task: '',
};

export const TodoAdd = ({ onNewTodo }) => {
	const { form, onInputChange, onResetForm } = useForm(initialForm);
	const { task } = form;

	const onSubmitForm = (e) => {
		e.preventDefault();
		if (task.length <= 1) return;
		const todo = {
			id: new Date().getTime(),
			description: task,
			done: false,
		};
		onNewTodo(todo);
		onResetForm();
	};

	return (
		<form onSubmit={onSubmitForm}>
			<input
				type='text'
				placeholder='Task'
				className='form-control'
				name='task'
				value={task}
				onChange={onInputChange}
			/>
			<button type='submit' className='btn btn-outline-primary mt-3'>
				Add
			</button>
		</form>
	);
};

TodoAdd.propTypes = {
	onNewTodo: PropTypes.func.isRequired,
};
