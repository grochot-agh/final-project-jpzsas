import React from 'react';
import { TrendingPane } from '../components';

const RenderPosts = ({ data, title, onCommentClick }) => {
	if (data?.length > 0) {
		return data.map((post) => (
			<TrendingPane
				key={post._id}
				{...post}
				onCommentClick={() => onCommentClick(post._id)}
			/>
		));
	}

	return (
		<h2 className="mt-5 font-bold text-[#855E5E] text-xl uppercase">{title}</h2>
	);
};

export default RenderPosts;
