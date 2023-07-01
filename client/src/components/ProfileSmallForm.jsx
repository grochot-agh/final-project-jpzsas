import React, { useState } from 'react';
import { FiEye } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

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
	id,
}) => {
	const navigate = useNavigate();
	const [login, setLogin] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [currPassword, setCurrPassword] = useState('');
	const [sndPassword, setSndPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [showSndPassword, setShowSndPassword] = useState(false);
	const [showThirdPassword, setShowThirdPassword] = useState(false);

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
		<form
			onSubmit={handleSubmit}
			className="flex flex-col w-full h-[100vh] px-10 py-10"
		>
			<label className={`text-[25px] text-[${textColor}]`} htmlFor={`${type}`}>
				{firstText}
			</label>
			<div className="flex flex-row items-center text-center">
				<input
					onChange={
						type === 'email'
							? (e) => setEmail(e.target.value)
							: type === 'password'
							? (e) => setPassword(e.target.value)
							: (e) => setLogin(e.target.value)
					}
					className={`text-[25px] bg-[#ECE0E0] dark:bg-[#313338] rounded-[10px] outline-none border-none mb-4 w-full ${
						type === 'password' ? 'mr-4' : ''
					} `}
					type={type === 'password' && showPassword ? 'text' : `${type}`}
					id={`${type}`}
				/>
				{type === 'password' && (
					<FiEye
						onClick={() => setShowPassword(!showPassword)}
						className="w-[25px] h-[25px] mb-4 cursor-pointer text-[#ECE0E0] dark:text-[#313338]"
					/>
				)}
			</div>

			<label className={`text-[25px] text-[${textColor2}]`} htmlFor="password">
				{secondText}
			</label>
			<div className="flex flex-row items-center text-center">
				<input
					onChange={(e) => setCurrPassword(e.target.value)}
					className={`text-[25px] bg-[#ECE0E0] dark:bg-[#313338] rounded-[10px] outline-none border-none mb-4 mr-4 w-full`}
					type={showSndPassword ? 'text' : 'password'}
					id="password"
				/>
				<FiEye
					onClick={() => setShowSndPassword(!showSndPassword)}
					className="w-[25px] h-[25px] mb-4 cursor-pointer text-[#ECE0E0] dark:text-[#313338]"
				/>
			</div>

			{threeInputs && (
				<>
					<label
						className={`text-[25px] text-[${textColor2}]`}
						htmlFor="password"
					>
						{thirdText}
					</label>
					<div className="flex flex-row items-center text-center">
						<input
							onChange={(e) => setSndPassword(e.target.value)}
							className={`text-[25px] bg-[#ECE0E0] dark:bg-[#313338] rounded-[10px] outline-none border-none mb-4 mr-4 w-full`}
							type={showThirdPassword ? 'text' : 'password'}
							id="password"
						/>
						<FiEye
							onClick={() => setShowThirdPassword(!showThirdPassword)}
							className="w-[25px] h-[25px] mb-4 cursor-pointer text-[#ECE0E0] dark:text-[#313338]"
						/>
					</div>
				</>
			)}

			<button
				className={`mt-6 text-[25px] bg-[${buttonColor}] text-[#ECE0E0] dark:text-[#313338] rounded-[10px] hover:bg-[${textColor}]`}
				type="submit"
			>
				{buttonText}
			</button>
		</form>
	);
};

export default ProfileSmallForm;
