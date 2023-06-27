import React, { useState, useEffect } from 'react';
import { Loading } from '../components';
import noImage from '../assets/NoImage.jpg';

const Gallery = ({ allPosts, filteredPosts }) => {
	const [loading, setLoading] = useState(false);
	const [imageSrc, setImageSrc] = useState(() => {
		if (allPosts && allPosts.length > 0) {
			return allPosts[0].image;
		} else if (filteredPosts && filteredPosts.length > 0) {
			return filteredPosts[0].image;
		} else {
			return noImage;
		}
	});

	const [imageAlt, setImageAlt] = useState(() => {
		if (filteredPosts && filteredPosts.length > 0) {
			return filteredPosts[0].prompt;
		} else if (allPosts && allPosts.length > 0) {
			return allPosts[0].prompt;
		} else {
			return '';
		}
	});

	const handleRightArrowClick = () => {
		if (filteredPosts) {
			const currentIndex = filteredPosts.findIndex(
				(post) => post.image === imageSrc
			);
			const nextIndex = currentIndex + 1;

			if (nextIndex < filteredPosts.length) {
				setImageSrc(filteredPosts[nextIndex].image);
				setImageAlt(filteredPosts[nextIndex].prompt);
			} else {
				setImageSrc(filteredPosts[0].image);
				setImageAlt(filteredPosts[0].prompt);
			}
		} else if (allPosts) {
			const currentIndex = allPosts.findIndex(
				(post) => post.image === imageSrc
			);
			const nextIndex = currentIndex + 1;

			if (nextIndex < allPosts.length) {
				setImageSrc(allPosts[nextIndex].image);
				setImageAlt(allPosts[nextIndex].prompt);
			} else {
				setImageSrc(allPosts[0].image);
				setImageAlt(allPosts[0].prompt);
			}
		}
	};

	const handleLeftArrowClick = () => {
		if (filteredPosts) {
			const currentIndex = filteredPosts.findIndex(
				(post) => post.image === imageSrc
			);
			const nextIndex = currentIndex - 1;

			if (nextIndex >= 0) {
				setImageSrc(filteredPosts[nextIndex].image);
				setImageAlt(filteredPosts[nextIndex].prompt);
			} else {
				setImageSrc(filteredPosts[filteredPosts.length - 1].image);
				setImageAlt(filteredPosts[filteredPosts.length - 1].prompt);
			}
		} else if (allPosts) {
			const currentIndex = allPosts.findIndex(
				(post) => post.image === imageSrc
			);
			const nextIndex = currentIndex - 1;

			if (nextIndex >= 0) {
				setImageSrc(allPosts[nextIndex].image);
				setImageAlt(allPosts[nextIndex].prompt);
			} else {
				setImageSrc(allPosts[allPosts.length - 1].image);
				setImageAlt(allPosts[allPosts.length - 1].prompt);
			}
		}
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (allPosts) {
				setImageSrc(allPosts[0].image);
			} else if (filteredPosts) {
				setImageSrc(filteredPosts[0].image);
			} else {
				setImageSrc(noImage);
			}
			handleRightArrowClick();
		}, 50);

		return () => {
			clearTimeout(timeout);
		};
	}, [allPosts, filteredPosts]);

	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="sl:text-[40px] text-[30px] text-[#855E5E]">
				EXPLORE THE GALLERY
			</h1>
			{loading ? (
				<div className="sl:flex hidden">
					<Loading />
				</div>
			) : (
				<div className="sl:grid hidden grid-cols-4 grid-rows-2 gap-2 w-[1260px] h-[380px]">
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
			<div className="sl:hidden flex flex-row items-center justify-around w-[500px]">
				<h1
					onClick={() => handleLeftArrowClick()}
					className="text-[30px] font-normal text-[#AD2121] cursor-pointer"
				>{`<`}</h1>
				{loading ? (
					<Loading />
				) : (
					<div className="gallery-pane w-[350px] h-[350px] mt-10">
						<img
							src={imageSrc}
							alt={imageAlt}
							className="w-full h-full object-cover gallery-pane"
						/>
					</div>
				)}
				<h1
					onClick={() => handleRightArrowClick()}
					className="text-[30px] font-normal text-[#7B2789] cursor-pointer"
				>{`>`}</h1>
			</div>
		</div>
	);
};

export default Gallery;
