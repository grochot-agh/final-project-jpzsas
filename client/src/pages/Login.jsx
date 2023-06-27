import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '../components';

const Login = () => {
	const navigate = useNavigate();
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const responseMessage = (response) => {
		console.log(response);
	};

	const errMessage = (err) => {
		console.log(err);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:8000/user/login', {
				method: 'POST',
				crossDomain: true,
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
				body: JSON.stringify({
					login,
					password,
				}),
			});
			const data = await response.json();
			console.log(data);
			console.log(data.data);
			if (response.status === 200) {
				alert('Login successful!');
				window.localStorage.setItem('token', data.data);
				window.localStorage.setItem('loggedIn', true);
				window.localStorage.setItem('login', login);
				navigate('/profile');
				window.location.reload();
			} else {
				alert('Login failed, try again');
				window.localStorage.clear();
				navigate('/login');
				window.location.reload();
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="home-gradient h-[100vh] flex items-center justify-center flex-col py-5">
			<h1 className="text-[25px] text-[#ECE0E0] dark:text-[#313338]">
				LOG IN TO YOUR ACCOUNT
			</h1>
			<GoogleLogin />
			<div className="flex flex-row items-center justify-center">
				<div className="w-[185px] h-[2px] bg-[#ECE0E0] dark:bg-[#313338]" />
				<p className="ml-1.5 mr-1.5 text-[#ECE0E0] dark:text-[#313338] text-[15px]">
					or
				</p>
				<div className="w-[185px] h-[2px] bg-[#ECE0E0] dark:bg-[#313338]" />
			</div>

			<form onSubmit={handleSubmit} className="flex flex-col w-[400px]">
				<label className="text-[20px] text-[#7B2789]" htmlFor="login">
					LOGIN
				</label>
				<input
					onChange={(e) => setLogin(e.target.value)}
					className="bg-[#ECE0E0] dark:bg-[#313338] w-[400px] h-[40px] text-[20px] rounded-[10px] mb-3 outline-none border-none"
					type="text"
					id="login"
				/>
				<label className="text-[20px] text-[#AD2121]" htmlFor="password">
					PASSWORD
				</label>
				<input
					onChange={(e) => setPassword(e.target.value)}
					className="bg-[#ECE0E0] dark:bg-[#313338] w-[400px] h-[40px] text-[20px] rounded-[10px] mb-5 border-none outline-none"
					type="password"
					id="password"
				/>
				<button
					type="submit"
					name="submit"
					className="w-[400px] h-[40px] text-[20px] rounded-[10px] bg-[#AD2121] text-[#ECE0E0] dark:text-[#313338] mb-10"
				>
					LOGIN
				</button>
			</form>
			<div className="flex flex-col w-[400px]">
				<h2 className="text-[15px] text-[#ECE0E0] dark:text-[#313338] text-right md:mb-1 mb-2">
					YOU DON'T HAVE AN ACCOUNT?
				</h2>
				<Link
					to="/register"
					className="w-[400px] h-[40px] text-[20px] rounded-[10px] bg-[#7B2789] text-[#ECE0E0] dark:text-[#313338] flex justify-center items-center"
				>
					REGISTER
				</Link>
			</div>
		</div>
	);
};

export default Login;
