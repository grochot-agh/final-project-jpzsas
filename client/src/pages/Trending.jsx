import React from 'react';
import { TrendingPane } from '../components';

const Trending = () => {
	return (
		<div className="home-gradient h-[77.5vh] flex items-center flex-col py-5 overflow-hidden">
			<div className="flex w-full flex-row items-center justify-around mb-6">
				<TrendingPane />
				<TrendingPane />
				<TrendingPane />
			</div>
			<div className="flex w-full flex-row items-center justify-around">
				<TrendingPane />
				<TrendingPane />
			</div>
		</div>
	);
};

export default Trending;
