import React, { useState } from 'react';
import { CommentsSection, TrendingPane } from '../components';

const Trending = () => {
	const [openComment, setOpenComment] = useState(false);
	return (
		<div className="home-gradient md:h-full h-full flex items-center flex-col pb-12">
			{openComment && <CommentsSection height="110vh" />}
			<div className="md:flex hidden w-full flex-row items-center justify-around">
				<TrendingPane />
				<TrendingPane />
				<TrendingPane />
			</div>
			<div className="md:flex hidden w-full flex-row items-center justify-around">
				<TrendingPane />
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
