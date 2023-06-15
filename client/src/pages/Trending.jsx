import React from 'react';
import { TrendingPane } from '../components';

const Trending = () => {
	return (
		<div className="home-gradient md:h-[77.5vh] h-full flex items-center flex-col py-5">
			<div className="md:flex hidden w-full flex-row items-center justify-around mb-6">
				<TrendingPane />
				<TrendingPane />
				<TrendingPane />
			</div>
			<div className="md:flex hidden w-full flex-row items-center justify-around">
				<TrendingPane />
				<TrendingPane />
			</div>
			<div className="md:hidden flex flex-col items-between justify-between">
				<TrendingPane />
				<TrendingPane />
				<TrendingPane />
				<TrendingPane />
				<TrendingPane />
			</div>
		</div>
	);
};

export default Trending;
