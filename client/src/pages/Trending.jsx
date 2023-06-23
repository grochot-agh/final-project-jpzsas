import React, { useState, useEffect } from 'react';
import { CommentsSection, TrendingPane, Loading } from '../components';

const RenderPosts = ({ data, title }) => {
	if (data?.length > 0) {
		return data.map((post) => <TrendingPane key={post._id} {...post} />);
	}

	return (
		<h2 className="mt-5 font-bold text-[#855E5E] text-xl uppercase">{title}</h2>
	);
};

const Trending = () => {
	const [openComment, setOpenComment] = useState(false);
	const [allPosts, setAllPosts] = useState(null);
	const [loading, setLoading] = useState(false);
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
			{openComment && <CommentsSection height="110vh" />}
			{loading ? (
				<Loading />
			) : (
				<div className="md:flex hidden w-full flex-row items-center justify-around">
					<RenderPosts data={allPosts} title="No posts found" />
				</div>
			)}

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
