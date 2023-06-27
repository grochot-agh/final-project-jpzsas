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
	const [postId, setPostId] = useState('');

	const handleCommentClick = (postId) => {
		setOpenComment(!openComment);
		if (postId !== '') {
			setPostId(postId);
		} else {
			setPostId('');
		}
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
		<div className="home-gradient h-full flex items-center flex-col pb-12">
			{openComment && <CommentsSection height="trending" postId={postId} />}
			{loading ? (
				<div className="sl:flex hidden">
					<Loading />
				</div>
			) : (
				<div className="sl:flex hidden w-full flex-row items-center justify-around flex-wrap">
					<RenderPosts
						data={allPosts}
						title="No posts found"
						onCommentClick={handleCommentClick}
					/>
				</div>
			)}

			{loading ? (
				<div className="sl:hidden flex">
					<Loading />
				</div>
			) : (
				<div className="sl:hidden flex flex-col items-between justify-between">
					<RenderPosts
						data={allPosts}
						title="No posts found"
						onCommentClick={handleCommentClick}
					/>
				</div>
			)}
		</div>
	);
};

export default Trending;
