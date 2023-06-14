import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Generate, Trending, Profile, Login, Register } from './pages';
import { Navbar, Footer } from './components';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/generate" element={<Generate />} />
				<Route path="/trending" element={<Trending />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
