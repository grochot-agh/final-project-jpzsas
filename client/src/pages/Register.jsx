import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className="home-gradient md:h-[77.5vh] h-[80.1vh] flex items-center flex-col py-5">
			<h1 className="text-[25px] text-[#ECE0E0] mb-2">CREATE YOUR ACCOUNT</h1>

			<form className="flex flex-col w-[400px]">
				<label className="text-[20px] text-[#855E5E]" for="email">
					E-MAIL ADDRESS
				</label>
				<input
					className="bg-[#ECE0E0] w-[400px] h-[40px] text-[20px] rounded-[10px] mb-2 outline-none border-none"
					type="email"
					id="email"
				/>
				<label className="text-[20px] text-[#7B2789]" for="login">
					LOGIN
				</label>
				<input
					className="bg-[#ECE0E0] w-[400px] h-[40px] text-[20px] rounded-[10px] mb-2 outline-none border-none"
					type="text"
					id="login"
				/>
				<label className="text-[20px] text-[#AD2121]" for="password">
					ENTER PASSWORD
				</label>
				<input
					className="bg-[#ECE0E0] w-[400px] h-[40px] text-[20px] rounded-[10px] mb-3 border-none outline-none"
					type="password"
					id="password"
				/>
				<label className="text-[20px] text-[#AD2121]" for="password_second">
					ENTER YOUR PASSWORD AGAIN
				</label>
				<input
					className="bg-[#ECE0E0] w-[400px] h-[40px] text-[20px] rounded-[10px] mb-3 border-none outline-none"
					type="password"
					id="password_second"
				/>
				<button
					type="submit"
					name="submit"
					className="w-[400px] h-[40px] text-[20px] rounded-[10px] bg-[#7B2789] text-[#ECE0E0] mb-8"
				>
					REGISTER
				</button>
			</form>
			<div className="flex flex-col w-[400px]">
				<h2 className="md:text-[10px] text-[15px] text-[#ECE0E0] text-right md:mb-1 mb-2">
					YOU ALREADY HAVE AN ACCOUNT?
				</h2>
				<Link
					to="/login"
					className="w-[400px] h-[40px] text-[20px] rounded-[10px] bg-[#AD2121] text-[#ECE0E0] flex justify-center items-center"
				>
					LOGIN
				</Link>
			</div>
		</div>
	);
};

export default Register;
