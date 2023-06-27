import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
	id,
}) => {
	const navigate = useNavigate();
	const [login, setLogin] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [currPassword, setCurrPassword] = useState('');
	const [sndPassword, setSndPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (window.localStorage.getItem('google') == 'true') {
			alert('Please log in with email to perform this operation');
			return;
		}
		try {
			const response = await fetch(
				'http://localhost:8000/user/update-account',
				{
					method: 'POST',
					crossDomain: true,
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
						'Access-Control-Allow-Origin': '*',
					},
					body: JSON.stringify({
						login,
						email,
						password,
						currPassword,
						sndPassword,
						id,
					}),
				}
			);
			const data = await response.json();
			console.log(data);
			if (response.status === 200) {
				alert('Account updated successfully, please login again');
				window.localStorage.clear();
				navigate('/login');
				window.location.reload();
			} else {
				alert(`Couldn't update account, try again: ${data.message}`);
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="h-full flex flex-col justify-center items-center">
			<h1 className="text-[40px] text-[#ECE0E0] dark:text-[#313338] self-start ml-[26%]">
				{title}
			</h1>
			<form onSubmit={handleSubmit} className="flex flex-col w-[500px]">
				<label
					htmlFor={`${type}`}
					className={`text-[25px] text-[${textColor}] mb-3`}
				>
					{firstText}
				</label>
				<input
					onChange={
						type === 'email'
							? (e) => setEmail(e.target.value)
							: type === 'password'
							? (e) => setPassword(e.target.value)
							: (e) => setLogin(e.target.value)
					}
					className="profile-input"
					type={`${type}`}
					id={`${type}`}
				/>
				<label
					htmlFor={`${type}`}
					className={`text-[25px] text-[${textColor2}] mb-3`}
				>
					{secondText}
				</label>
				<input
					onChange={(e) => setCurrPassword(e.target.value)}
					className="profile-input"
					type="password"
					id="password"
				/>

				{threeInputs && (
					<>
						<label
							htmlFor={`${type}`}
							className={`text-[25px] text-[${textColor2}] mb-3`}
						>
							{thirdText}
						</label>
						<input
							onChange={(e) => setSndPassword(e.target.value)}
							className="profile-input"
							type="password"
							id="password"
						/>
					</>
				)}

				<button
					className={`bg-[${buttonColor}] text-[25px] hover:bg-[${textColor}] text-[#ECE0E0] dark:text-[#313338] rounded-[10px] w-[400px]`}
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
