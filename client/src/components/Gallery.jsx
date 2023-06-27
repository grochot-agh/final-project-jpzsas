import React, { useState } from 'react';
import { Loading } from '../components';
import noImage from '../assets/NoImage.jpg';

const Gallery = ({ allPosts, filteredPosts }) => {
	const [loading, setLoading] = useState(false);
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
					{filteredPosts && filteredPosts[0] === undefined ? (
						<div className="row-span-2 gallery-pane" />
					) : (
						<div className="row-span-2 gallery-pane">
							<img
								src={
									filteredPosts
										? filteredPosts[0]?.image
										: allPosts[0]?.image
										? allPosts[0]?.image
										: noImage
								}
								alt={
									filteredPosts ? filteredPosts[0]?.prompt : allPosts[0]?.image
								}
								className="w-full h-full object-cover gallery-pane"
							/>
						</div>
					)}
					{filteredPosts && filteredPosts[1] === undefined ? (
						<div className="gallery-pane row-span-2 col-span-2" />
					) : (
						<div className="gallery-pane row-span-2 col-span-2">
							<img
								src={
									filteredPosts
										? filteredPosts[1]?.image
										: allPosts[1]?.image
										? allPosts[1]?.image
										: noImage
								}
								alt={
									filteredPosts ? filteredPosts[1]?.prompt : allPosts[1]?.image
								}
								className="w-full h-full object-cover gallery-pane"
							/>
						</div>
					)}
					{filteredPosts && filteredPosts[2] === undefined ? (
						<div className="gallery-pane" />
					) : (
						<div className="gallery-pane ">
							<img
								src={
									filteredPosts
										? filteredPosts[2]?.image
										: allPosts[2]?.image
										? allPosts[2]?.image
										: noImage
								}
								alt={
									filteredPosts ? filteredPosts[2]?.prompt : allPosts[2]?.image
								}
								className="w-full h-full object-cover gallery-pane"
							/>
						</div>
					)}

					{filteredPosts && filteredPosts[3] === undefined ? (
						<div className="gallery-pane" />
					) : (
						<div className="gallery-pane ">
							<img
								src={
									filteredPosts
										? filteredPosts[3]?.image
										: allPosts[3]?.image
										? allPosts[3]?.image
										: noImage
								}
								alt={
									filteredPosts ? filteredPosts[2]?.prompt : allPosts[2]?.image
								}
								className="w-full h-full object-cover gallery-pane"
							/>
						</div>
					)}
				</div>
			)}
			<div className="md:hidden flex flex-row items-center justify-around w-[500px]">
				<h1 className="text-[30px] font-normal text-[#AD2121] cursor-pointer">{`<`}</h1>
				{loading ? (
					<Loading />
				) : (
					<div className="gallery-pane w-[350px] h-[350px] mt-10">
						<img
							src={
								filteredPosts
									? filteredPosts[0]?.image
									: allPosts[0]?.image
									? allPosts[0]?.image
									: noImage
							}
							alt={
								filteredPosts ? filteredPosts[0]?.prompt : allPosts[0]?.image
							}
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
