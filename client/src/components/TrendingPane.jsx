import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart, AiOutlineDownload } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import { IoPaperPlane } from 'react-icons/io5';
import { downloadImage } from '../utils';

const TrendingPane = ({ _id, name, prompt, image }) => {
	const [liked, setLiked] = useState(false);
	const [likes, setLikes] = useState(0);

	const handleClick = () => {
		setLiked(!liked);
		setLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1));
	};
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="relative group">
				<img
					src={image}
					alt={prompt}
					className="w-[310px] h-[210px] rounded-[15px] object-contain bg-white"
				/>
				<div className="group-hover:flex w-full h-full absolute bottom-0 hidden rounded-[15px] bg-black bg-opacity-50 flex-col justify-between">
					<p className="text-l text-white px-3 py-2">{prompt}</p>
					<div className="flex flex-row justify-between px-3 py-3">
						<p className="text-m text-white">{name}</p>
						<AiOutlineDownload
							className="text-2xl text-white cursor-pointer"
							onClick={() => downloadImage(_id, image)}
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-row items-center justify-between w-[270px]">
				<div className="flex flex-row items-center justify-center">
					{liked ? (
						<AiFillHeart
							className="text-[#AD2121] text-[20px] cursor-pointer"
							onClick={handleClick}
						/>
					) : (
						<AiOutlineHeart
							className="text-[#AD2121] text-[20px] cursor-pointer"
							onClick={handleClick}
						/>
					)}

					<p className="text-[#AD2121] text-[20px]">{likes}</p>
				</div>
				<div className="flex flex-row items-center justify-center">
					<FaComment className="text-[#7B2789] text-[20px] cursor-pointer" />
					<p className="text-[#7B2789] text-[20px]">12345</p>
				</div>
				<div className="flex flex-row items-center justify-center">
					<IoPaperPlane className="text-[#ECE0E0] dark:text-[#4c4f55] text-[20px] cursor-pointer" />
					<p className="text-[#ECE0E0] dark:text-[#4c4f55] text-[15px]">
						share
					</p>
				</div>
			</div>
		</div>
	);
};

export default TrendingPane;
