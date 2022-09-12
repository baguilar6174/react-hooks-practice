import { Home } from '../../../src/09-useContext/pages/Home';
import { UserContext } from '../../../src/09-useContext/context/UserContext';
import { render, screen } from '@testing-library/react';

describe('Tests on <Home/>', () => {
	const user = {
		id: 1,
		name: 'Bryan',
	};

	test('should show the component without user', () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<Home />
			</UserContext.Provider>
		);
		const preTag = screen.getByLabelText('pre');
		expect(preTag.innerHTML).toBe('null');
	});

	test('should show the component with user', () => {
		render(
			<UserContext.Provider value={{ user }}>
				<Home />
			</UserContext.Provider>
		);
		const preTag = screen.getByLabelText('pre');
		expect(preTag.innerHTML).toContain(user.name);
	});
});
