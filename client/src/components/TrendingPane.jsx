import React, { useState, useEffect } from 'react';
import { AiFillHeart, AiOutlineHeart, AiOutlineDownload } from 'react-icons/ai';
import { MdContentCopy } from 'react-icons/md';
import { FaComment } from 'react-icons/fa';
import { IoPaperPlane } from 'react-icons/io5';
import { downloadImage } from '../utils';

const TrendingPane = ({ _id, creator, prompt, image, onCommentClick }) => {
	const [share, setShare] = useState(false);
	const [copied, setCopied] = useState('');
	const [liked, setLiked] = useState({
		users: [],
		liked: [],
	});
	const [numLikes, setNumLikes] = useState({
		postId: [],
		numLikes: 0,
	});

	const [numComments, setNumComments] = useState({
		postId: [],
		numComments: 0,
	});

	const handleCopy = () => {
		setShare(!share);
		setCopied(image);
		navigator.clipboard.writeText(image);
		setTimeout(() => {
			setCopied(false), 3000;
		});
	};

	const likePost = async (user) => {
		try {
			const response = await fetch(
				`http://localhost:8000/api/v1/post/like/${_id}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${window.localStorage.getItem('token')}`,
					},
					body: JSON.stringify({
						user,
					}),
				}
			);
			const data = await response.json();
			if (response.status === 200) {
				console.log('like added succesfully');
				console.log(data.message);
			} else {
				console.log(data.message);
			}
		} catch (err) {
			console.log(err);
			console.log(data.message);
		}
	};

	const unlikePost = async (user) => {
		try {
			const response = await fetch(
				`http://localhost:8000/api/v1/post/unlike/${_id}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${window.localStorage.getItem('token')}`,
					},
					body: JSON.stringify({
						user,
					}),
				}
			);
			const data = await response.json();
			if (response.status === 200) {
				console.log('like removed succesfully');
				console.log(data.message);
			} else {
				console.log(data.message);
			}
		} catch (err) {
			console.log(err);
			console.log(data.message);
		}
	};

	const getLikes = async () => {
		try {
			const response = await fetch(
				`http://localhost:8000/api/v1/post/likes/${_id}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${window.localStorage.getItem('token')}`,
					},
				}
			);
			const data = await response.json();
			if (response.status === 200) {
				setLiked({
					users: data.users,
					liked: true,
				});
				setNumLikes({
					postId: _id,
					numLikes: data.numLikes,
				});
			} else {
				console.log(data.message);
			}
		} catch (err) {
			console.log(err);
			console.log(data.message);
		}
	};

	const getComments = async () => {
		try {
			const response = await fetch(
				`http://localhost:8000/api/v1/post/comment/${_id}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			const data = await response.json();
			if (response.status === 200) {
				setNumComments({
					postId: _id,
					numComments: data.numComms,
				});
			}
		} catch (err) {
			console.log(err);
		}
	};

	const onLikeClick = (id, user) => {
		if (
			window.localStorage.getItem('token') == null ||
			window.localStorage.getItem('login') == null
		) {
			alert('Please login to like a post');
			return;
		}
		if (liked.users.includes(user)) {
			unlikePost(user);
		} else {
			likePost(user);
		}
	};

	useEffect(() => {
		getLikes();
	}, [liked]);

	useEffect(() => {
		getComments();
	}, [numComments]);

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
				<div
					onClick={() => onLikeClick(_id, window.localStorage.getItem('login'))}
					className="flex flex-row items-center justify-center"
				>
					{liked.users.includes(window.localStorage.getItem('login')) ? (
						<AiFillHeart className="text-[#AD2121] text-[30px] cursor-pointer" />
					) : (
						<AiOutlineHeart className="text-[#AD2121] text-[30px] cursor-pointer" />
					)}

					<p className="text-[#AD2121] text-[30px]">{numLikes.numLikes}</p>
				</div>
				<div
					onClick={() => onCommentClick(_id)}
					className="flex flex-row items-center justify-center"
				>
					<FaComment className="text-[#7B2789] text-[30px] cursor-pointer" />
					<p className="text-[#7B2789] text-[30px]">
						{numComments.numComments}
					</p>
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
