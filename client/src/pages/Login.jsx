import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="home-gradient h-[77.5vh] flex items-center justify-center flex-col py-5">
			<h1 className="text-[25px] text-[#ECE0E0]">LOG IN TO YOUR ACCOUNT</h1>
			<div className="w-[35px] h-[35px] bg-[#fff] flex justify-center items-center rounded-[10px] cursor-pointer mt-3 mb-3">
				<FcGoogle className="text-[30px]" />
			</div>
			<div className="flex flex-row items-center justify-center">
				<div className="w-[185px] h-[2px] bg-[#ECE0E0]" />
				<p className="ml-1.5 mr-1.5 text-[#ECE0E0] text-[15px]">or</p>
				<div className="w-[185px] h-[2px] bg-[#ECE0E0]" />
			</div>

			<form className="flex flex-col w-[400px]">
				<label className="text-[20px] text-[#7B2789]" for="login">
					LOGIN
				</label>
				<input
					className="bg-[#ECE0E0] w-[400px] h-[40px] text-[20px] rounded-[10px] mb-3 outline-none border-none"
					type="text"
					id="login"
				/>
				<label className="text-[20px] text-[#AD2121]" for="password">
					PASSWORD
				</label>
				<input
					className="bg-[#ECE0E0] w-[400px] h-[40px] text-[20px] rounded-[10px] mb-5 border-none outline-none"
					type="password"
					id="password"
				/>
				<Link to="/profile">
					<button
						type="submit"
						name="submit"
						className="w-[400px] h-[40px] text-[20px] rounded-[10px] bg-[#AD2121] text-[#ECE0E0] mb-10"
					>
						LOGIN
					</button>
				</Link>
			</form>
			<div className="flex flex-col w-[400px]">
				<h2 className="text-[10px] text-[#ECE0E0] text-right mb-1">
					YOU DON'T HAVE AN ACCOUNT?
				</h2>
				<Link
					to="/register"
					className="w-[400px] h-[40px] text-[20px] rounded-[10px] bg-[#7B2789] text-[#ECE0E0] flex justify-center items-center"
				>
					REGISTER
				</Link>
			</div>
		</div>
	);
};

export default Login;
