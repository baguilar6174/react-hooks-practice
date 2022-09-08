import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { UserProvider } from './context/UserProvider';
import { About, Home, Login } from './pages';

export const MainApp = () => {
	return (
		<UserProvider>
			<h1>MainApp</h1>
			<hr />
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='login' element={<Login />} />
				<Route path='about' element={<About />} />
				<Route path='/*' element={<Navigate to='/login' />} />
			</Routes>
		</UserProvider>
	);
};
