import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
	Home,
	Generate,
	Trending,
	Profile,
	Login,
	Register,
	Help,
	AboutUs,
} from './pages';
import { Navbar, Footer } from './components';

const App = () => {
	const isUserLoggedIn = window.localStorage.getItem('loggedIn');
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/generate" element={<Generate />} />
				<Route path="/trending" element={<Trending />} />
				<Route
					path="/profile"
					element={isUserLoggedIn == 'true' ? <Profile /> : <Login />}
				/>
				<Route
					path="/login"
					element={isUserLoggedIn == 'true' ? <Profile /> : <Login />}
				/>
				<Route
					path="/register"
					element={isUserLoggedIn == 'true' ? <Profile /> : <Register />}
				/>
				<Route path="/help" element={<Help />} />
				<Route path="/about" element={<AboutUs />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
