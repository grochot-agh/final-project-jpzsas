import React, { useState, useEffect } from 'react';
import {
	CommentsSection,
	TrendingPane,
	Loading,
	RenderPosts,
} from '../components';

const Trending = () => {
	const [openComment, setOpenComment] = useState(false);
	const [allPosts, setAllPosts] = useState([]);
	const [loading, setLoading] = useState(false);

	const handleCommentClick = () => {
		setOpenComment(!openComment);
	};

	const fetchPosts = async () => {
		setLoading(true);
		try {
			const response = await fetch('http://localhost:8000/api/v1/post', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response.status === 200) {
				const result = await response.json();
				setAllPosts(result.data.reverse());
			}
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div className="home-gradient md:h-full h-full flex items-center flex-col pb-12">
			{openComment && <CommentsSection height="trending" />}
			{loading ? (
				<Loading />
			) : (
				<div className="md:flex hidden w-full flex-row items-center justify-around flex-wrap">
					<RenderPosts
						data={allPosts}
						title="No posts found"
						onCommentClick={handleCommentClick}
					/>
				</div>
			)}

			{loading ? (
				<Loading />
			) : (
				<div className="md:hidden flex flex-col items-between justify-between">
					<RenderPosts
						data={allPosts.slice(0, 6)}
						title="No posts found"
						onCommentClick={handleCommentClick}
					/>
				</div>
			)}
		</div>
	);
};

export default Trending;
