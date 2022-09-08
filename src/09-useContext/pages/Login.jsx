import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const Login = () => {
	const { user, setUser } = useContext(UserContext);

	return (
		<>
			<h1>Login</h1>
			<hr />
			<pre>{JSON.stringify(user, null, 4)}</pre>
			<button
				onClick={() =>
					setUser({
						id: 123,
						name: 'Bryan',
						email: 'baguilar@test.com',
					})
				}
				className='btn btn-primary'
			>
				Set user
			</button>
		</>
	);
};
