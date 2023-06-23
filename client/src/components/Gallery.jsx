import React, { useState, useEffect } from 'react';
import { Loading } from '../components';
import cat from '../assets/cat.jpg';

const Gallery = () => {
	const [loading, setLoading] = useState(false);
	const [allPosts, setAllPosts] = useState(null);

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
				console.log(allPosts);
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
		<div className="flex flex-col justify-center items-center">
			<h1 className="md:text-[40px] text-[30px] text-[#855E5E]">
				EXPLORE THE GALLERY
			</h1>
			{loading ? (
				<div className="md:flex hidden">
					<Loading />
				</div>
			) : (
				<div className="md:grid hidden grid-cols-4 grid-rows-2 gap-2 w-[1260px] h-[380px]">
					<div className="row-span-2 gallery-pane">
						<img
							src={allPosts[0]?.image}
							alt={allPosts[0]?.prompt}
							className="w-full h-full object-cover gallery-pane"
						/>
					</div>
					<div className="gallery-pane row-span-2 col-span-2">
						<img
							src={allPosts[1]?.image}
							alt={allPosts[1]?.prompt}
							className="w-full h-full object-cover gallery-pane"
						/>
					</div>
					<div className="gallery-pane ">
						<img
							src={allPosts[2]?.image}
							alt={allPosts[2]?.prompt}
							className="w-full h-full object-cover gallery-pane"
						/>
					</div>
					<div className="gallery-pane ">
						<img
							src={allPosts[3]?.image}
							alt={allPosts[3]?.prompt}
							className="w-full h-full object-cover gallery-pane"
						/>
					</div>
				</div>
			)}
			<div className="md:hidden flex flex-row items-center justify-around w-[500px]">
				<h1 className="text-[30px] font-normal text-[#AD2121] cursor-pointer">{`<`}</h1>
				{loading ? (
					<Loading />
				) : (
					<div className="gallery-pane w-[350px] h-[350px] mt-10">
						<img
							src={allPosts[0]?.image}
							alt={allPosts[0]?.prompt}
							className="w-full h-full object-cover gallery-pane"
						/>
					</div>
				)}
				<h1 className="text-[30px] font-normal text-[#7B2789] cursor-pointer">{`>`}</h1>
			</div>
		</div>
	);
};

export default Gallery;
