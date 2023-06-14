import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import { IoPaperPlane } from 'react-icons/io5';
const TrendingPane = () => {
	const [liked, setLiked] = useState(false);
	const [likes, setLikes] = useState(0);

	const handleClick = () => {
		setLiked(!liked);
		setLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1));
	};
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="w-[310px] h-[210px] bg-[#ECE0E0] rounded-[15px]" />
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
					<IoPaperPlane className="text-[#ECE0E0] text-[20px] cursor-pointer" />
					<p className="text-[#ECE0E0] text-[20px]">share</p>
				</div>
			</div>
		</div>
	);
};

export default TrendingPane;
