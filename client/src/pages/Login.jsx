import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="home-gradient md:h-[77.5vh] h-[80.1vh] flex items-center justify-center flex-col py-5">
			<h1 className="text-[25px] text-[#ECE0E0] dark:text-[#313338]">
				LOG IN TO YOUR ACCOUNT
			</h1>
			<div className="w-[35px] h-[35px] bg-[#fff] dark:bg-[#313338] flex justify-center items-center rounded-[10px] cursor-pointer mt-3 mb-3">
				<FcGoogle className="text-[30px]" />
			</div>
			<div className="flex flex-row items-center justify-center">
				<div className="w-[185px] h-[2px] bg-[#ECE0E0] dark:bg-[#313338]" />
				<p className="ml-1.5 mr-1.5 text-[#ECE0E0] dark:text-[#313338] text-[15px]">
					or
				</p>
				<div className="w-[185px] h-[2px] bg-[#ECE0E0] dark:bg-[#313338]" />
			</div>

			<form className="flex flex-col w-[400px]">
				<label className="text-[20px] text-[#7B2789]" for="login">
					LOGIN
				</label>
				<input
					className="bg-[#ECE0E0] dark:bg-[#313338] w-[400px] h-[40px] text-[20px] rounded-[10px] mb-3 outline-none border-none"
					type="text"
					id="login"
				/>
				<label className="text-[20px] text-[#AD2121]" for="password">
					PASSWORD
				</label>
				<input
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
