import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart, AiOutlineDownload } from 'react-icons/ai';
import { MdContentCopy } from 'react-icons/md';
import { FaComment } from 'react-icons/fa';
import { IoPaperPlane } from 'react-icons/io5';
import { downloadImage } from '../utils';

const TrendingPane = ({ _id, creator, prompt, image }) => {
	const [liked, setLiked] = useState(false);
	const [likes, setLikes] = useState(0);
	const [share, setShare] = useState(false);
	const [copied, setCopied] = useState('');

	const handleCopy = () => {
		setShare(!share);
		setCopied(image);
		navigator.clipboard.writeText(image);
		setTimeout(() => {
			setCopied(false), 3000;
		});
	};

	const handleClick = () => {
		setLiked(!liked);
		setLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1));
	};
	return (
		<div className="flex flex-col justify-center items-center mt-16">
			<div className="relative group">
				<img
					src={image}
					alt={prompt}
					className="w-[410px] h-[260px] rounded-[15px] object-cover bg-white"
				/>

				{share && (
					<div className="flex w-full h-[70px] bg-[#855E5E] dark:bg-[#181616] absolute bottom-0 rounded-bl-[13px] rounded-br-[13px] justify-around items-center">
						<input
							type="text"
							value={image}
							className="bg-[#a68888] dark:bg-[#252121] text-[#ECE0E0] dark:text-[#855e5e] text-[18px] w-[330px] h-[50px] rounded-[15px] outline-none border-none flex items-center px-3"
						/>
						<div
							onClick={handleCopy}
							className="bg-[#a68888] dark:bg-[#252121] w-[50px] h-[50px] rounded-[15px] flex justify-center items-center cursor-pointer"
						>
							<MdContentCopy className="text-[#AD2121] w-[30px] h-[30px]" />
						</div>
					</div>
				)}
				{!share && (
					<div className="group-hover:flex w-full h-full absolute bottom-0 hidden rounded-[15px] bg-black bg-opacity-50 flex-col justify-between">
						<p className="text-l text-white px-3 py-2 font-['Baumans']">
							<span className="text-[#7B2789]">Prompt: </span>
							{prompt}
						</p>
						<div className="flex flex-row justify-between px-3 py-3">
							<p className="text-m text-white font-['Baumans']">
								<span className="text-[#AD2121]">By: </span>
								{creator}
							</p>
							<AiOutlineDownload
								className="text-2xl text-white cursor-pointer"
								onClick={() => downloadImage(_id, image)}
							/>
						</div>
					</div>
				)}
			</div>
			<div className="flex flex-row items-center justify-between w-[370px]">
				<div className="flex flex-row items-center justify-center">
					{liked ? (
						<AiFillHeart
							className="text-[#AD2121] text-[30px] cursor-pointer"
							onClick={handleClick}
						/>
					) : (
						<AiOutlineHeart
							className="text-[#AD2121] text-[30px] cursor-pointer"
							onClick={handleClick}
						/>
					)}

					<p className="text-[#AD2121] text-[30px]">{likes}</p>
				</div>
				<div className="flex flex-row items-center justify-center">
					<FaComment className="text-[#7B2789] text-[30px] cursor-pointer" />
					<p className="text-[#7B2789] text-[30px]">0</p>
				</div>
				<div
					onClick={() => setShare(!share)}
					className="flex flex-row items-center justify-center"
				>
					<IoPaperPlane className="text-[#ECE0E0] dark:text-[#4c4f55] text-[30px] cursor-pointer" />
					<p className="text-[#ECE0E0] dark:text-[#4c4f55] text-[20px]">
						share
					</p>
				</div>
			</div>
		</div>
	);
};

export default TrendingPane;
