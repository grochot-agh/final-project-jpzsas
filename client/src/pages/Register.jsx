import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [sndPassword, setSndPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (email && login && password && sndPassword) {
			try {
				const response = await fetch('http://localhost:8000/user/register', {
					method: 'POST',
					crossDomain: true,
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
						'Access-Control-Allow-Origin': '*',
					},
					body: JSON.stringify({
						email,
						login,
						password,
						sndPassword,
					}),
				});
				const data = await response.json();
				console.log(data);
				if (response.status === 201) {
					alert('Registration successful!');
					navigate('/login');
				} else {
					alert(data.message);
				}
			} catch (err) {
				console.log(err);
			}
		}
	};

	return (
		<div className="home-gradient h-[100vh] flex items-center flex-col py-5">
			<h1 className="text-[25px] text-[#ECE0E0] dark:text-[#313338] mb-2">
				CREATE YOUR ACCOUNT
			</h1>

			<form onSubmit={handleSubmit} className="flex flex-col w-[400px]">
				<label className="text-[20px] text-[#855E5E]" htmlFor="email">
					E-MAIL ADDRESS
				</label>
				<input
					onChange={(e) => setEmail(e.target.value)}
					className="bg-[#ECE0E0] dark:bg-[#313338] w-[400px] h-[40px] text-[20px] rounded-[10px] mb-2 outline-none border-none"
					type="email"
					id="email"
				/>
				<label className="text-[20px] text-[#7B2789]" htmlFor="login">
					LOGIN
				</label>
				<input
					onChange={(e) => setLogin(e.target.value)}
					className="bg-[#ECE0E0] dark:bg-[#313338] w-[400px] h-[40px] text-[20px] rounded-[10px] mb-2 outline-none border-none"
					type="text"
					id="login"
				/>
				<label className="text-[20px] text-[#AD2121]" htmlFor="password">
					ENTER PASSWORD
				</label>
				<input
					onChange={(e) => setPassword(e.target.value)}
					className="bg-[#ECE0E0] dark:bg-[#313338] w-[400px] h-[40px] text-[20px] rounded-[10px] mb-3 border-none outline-none"
					type="password"
					id="password"
				/>
				<label className="text-[20px] text-[#AD2121]" htmlFor="password_second">
					ENTER YOUR PASSWORD AGAIN
				</label>
				<input
					onChange={(e) => setSndPassword(e.target.value)}
					className="bg-[#ECE0E0] dark:bg-[#313338] w-[400px] h-[40px] text-[20px] rounded-[10px] mb-3 border-none outline-none"
					type="password"
					id="password_second"
				/>
				<button
					type="submit"
					name="submit"
					className="w-[400px] h-[40px] text-[20px] rounded-[10px] bg-[#7B2789] text-[#ECE0E0] dark:text-[#313338] mb-8"
				>
					REGISTER
				</button>
			</form>
			<div className="flex flex-col w-[400px]">
				<h2 className="md:text-[10px] text-[15px] text-[#ECE0E0] dark:text-[#313338] text-right md:mb-1 mb-2">
					YOU ALREADY HAVE AN ACCOUNT?
				</h2>
				<Link
					to="/login"
					className="w-[400px] h-[40px] text-[20px] rounded-[10px] bg-[#AD2121] text-[#ECE0E0] dark:text-[#313338] flex justify-center items-center"
				>
					LOGIN
				</Link>
			</div>
		</div>
	);
};

export default Register;
