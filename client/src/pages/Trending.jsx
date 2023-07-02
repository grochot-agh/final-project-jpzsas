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
		setLoading(true); // set loading as true
		try {
			const response = await fetch('http://localhost:8000/api/v1/post', { //use fetch to send a request to the server
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response.status === 200) { // success
				const result = await response.json(); //make result a json object
				setAllPosts(result.data.reverse()); //reversing posts in array
			}
		} catch (err) {
			console.log(err); //display error on console
		} finally {
			setLoading(false); //set loading as false, no matter the result
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);


	//return trending page
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
