import React from 'react';

const ProfileSmallForm = ({
	type,
	firstText,
	secondText,
	thirdText,
	buttonText,
	textColor,
	textColor2,
	buttonColor,
	threeInputs,
}) => {
	return (
		<div className="flex flex-col h-full w-full px-10 py-10">
			<label className={`text-[25px] text-[${textColor}]`} htmlFor={`${type}`}>
				{firstText}
			</label>
			<input
				className={`text-[25px] bg-[#ECE0E0] dark:bg-[#313338] rounded-[10px] outline-none border-none mb-4`}
				type={`${type}`}
				id={`${type}`}
			/>
			<label className={`text-[25px] text-[${textColor2}]`} htmlFor="password">
				{secondText}
			</label>
			<input
				className={`text-[25px] bg-[#ECE0E0] dark:bg-[#313338] rounded-[10px] outline-none border-none mb-4`}
				type="password"
				id="password"
			/>
			{threeInputs && (
				<>
					<label
						className={`text-[25px] text-[${textColor2}]`}
						htmlFor="password"
					>
						{thirdText}
					</label>
					<input
						className={`text-[25px] bg-[#ECE0E0] dark:bg-[#313338] rounded-[10px] outline-none border-none mb-4`}
						type="password"
						id="password"
					/>
				</>
			)}
			<button
				className={`mt-6 text-[25px] bg-[${buttonColor}] text-[#ECE0E0] dark:text-[#313338] rounded-[10px] hover:bg-[${textColor}]`}
				type="submit"
			>
				{buttonText}
			</button>
		</div>
	);
};

export default ProfileSmallForm;
