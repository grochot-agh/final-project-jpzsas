import React from 'react';
import { SearchBar, Gallery } from '../components';

const Home = () => {
	return (
		<div className="home-gradient sm:h-[77.5vh] h-[80.1vh] flex items-center flex-col py-5">
			<SearchBar />
			<Gallery />
		</div>
	);
};

export default Home;
