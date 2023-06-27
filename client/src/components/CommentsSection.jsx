import React, { useState, useEffect } from 'react';

const CommentsSection = ({ height, postId }) => {
	const [comment, setComment] = useState('');
	const [allComments, setAllComments] = useState([]);

	const calculateDate = (comslate) => {
		const currentDate = new Date();
		const commentDate = new Date(comslate);
		const difference = Math.floor((currentDate - commentDate) / 1000);

		if (difference < 60) {
			return `${difference} seconds ago`;
		} else if (difference < 3600) {
			const minutes = Math.floor(difference / 60);
			return `${minutes} minute/s ago`;
		} else if (difference < 86400) {
			const hours = Math.floor(difference / 3600);
			return `${hours} hour/s ago`;
		} else {
			const days = Math.floor(difference / 86400);
			return `${days} day/s ago`;
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(
				'http://localhost:8000/api/v1/post/comment',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						postId,
						user: !window.localStorage.getItem('login')
							? 'Anonymous'
							: window.localStorage.getItem('login'),
						comment,
					}),
				}
			);
			const data = await response.json();
			if (response.status === 201) {
				alert('Comment added successfully!');
				setComment('');
			} else {
				alert("Couldn't add comment!");
			}
		} catch (err) {
			console.log(err);
		}
	};

	const fetchComments = async (postId) => {
		try {
			const response = await fetch(
				`http://localhost:8000/api/v1/post/comment/${postId}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			const result = await response.json();
			if (response.status === 200) {
				if (result.data.length > 0) {
					setAllComments(result.data.reverse());
					window.localStorage.setItem(`${postId}-num`, `${result.data.length}`);
				}
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchComments(postId);
	});

	return (
		<div
			className={`flex flex-col absolute sl:top-[80px] top-[60px] sl:left-[30px] left-[15px] comments-gradient dark:comments-dark-gradient w-[450px] h-[85%] z-10 border-l-4 border-r-4 border-[#af9595] dark:border-[#211717]`}
		>
			<div className="w-full h-full px-3 py-2">
				{allComments.length === 0 ? (
					<p className="text-[20px] text-[#AD2121]">No comments yet!</p>
				) : (
					allComments.map((comment) => (
						<div key={comment._id}>
							<p className="text-[20px] text-[#AD2121]">
								{comment.user} x {calculateDate(comment.createdAt)}
							</p>
							<p className="text-[18px] text-[#5B5151] dark:text-[#855E5E] font-['Baumans'] mb-4">
								{comment.comment}
							</p>
						</div>
					))
				)}
			</div>
			<form
				onSubmit={handleSubmit}
				className="absolute bottom-7 h-[150px] w-full bg-[#855E5E] dark:bg-[#291818]"
			>
				<textarea
					onChange={(e) => setComment(e.target.value)}
					value={comment}
					className="border-none outline-none resize-none w-full h-[120px] font-['Baumans'] px-4 py-4 bg-transparent text-[#ECE0E0] dark:text-[#855E5E] placeholder:text-[#ECE0E0] dark:placeholder:text-[#855E5E]"
					placeholder="Add a comment"
				/>
				<button
					type="submit"
					className="w-full h-[50px] bg-[#7b2789] text-lg text-[#ECE0E0] dark:text-[#855E5E] border-b-4 border-[#af9595] dark:border-[#211717]"
				>
					Send comment
				</button>
			</form>
		</div>
	);
};

export default CommentsSection;
