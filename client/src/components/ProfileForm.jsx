import React from 'react';

const ProfileForm = ({
	title,
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
		<div className="h-full flex flex-col justify-center items-center">
			<h1 className="text-[40px] text-[#ECE0E0] self-start ml-[26%]">
				{title}
			</h1>
			<form className="flex flex-col w-[500px]">
				<label
					for={`${type}`}
					className={`text-[25px] text-[${textColor}] mb-3`}
				>
					{firstText}
				</label>
				<input className="profile-input" type={`${type}`} id={`${type}`} />
				<label
					for={`${type}`}
					className={`text-[25px] text-[${textColor2}] mb-3`}
				>
					{secondText}
				</label>
				<input className="profile-input" type="password" id="password" />

				{threeInputs && (
					<>
						<label
							for={`${type}`}
							className={`text-[25px] text-[${textColor2}] mb-3`}
						>
							{thirdText}
						</label>
						<input className="profile-input" type="password" id="password" />
					</>
				)}

				<button
					className={`bg-[${buttonColor}] text-[25px] hover:bg-[#ECE0E0] hover:text-[${buttonColor}] text-[#ECE0E0] rounded-[10px] w-[400px]`}
					type="submit"
					name="submit"
				>
					{buttonText}
				</button>
			</form>
		</div>
	);
};

export default ProfileForm;
