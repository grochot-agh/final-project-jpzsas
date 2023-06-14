import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaQuestion } from 'react-icons/fa';

const Navbar = () => {
	return (
		<nav className="overflow-hidden w-full h-[80px] flex justify-between items-center light-gradient nav-border sm:pl-10 pl-4 z-10">
			<Link
				className="flex flex-row text-center items-center justify-between md:w-[270px] w-[150px] md:h-[60px] h-[30px]"
				to="/"
			>
				<img
					src={logo}
					alt="ArtIfy logo"
					className="object-contain w-8 sm:w-14"
				/>
				<h1 className="font-normal text-[35px] md:text-[65px] text-[#855E5E]">
					<span className="text-[#ad2121]">A</span>RT
					<span className="text-[#7b2789]">I</span>FY
				</h1>
			</Link>
			<div className="sm:flex hidden flex-row h-full md:w-[800px] w-[600px] justify-center items-center">
				<Link
					to="/generate"
					className="text-[#7B2789] nav-links md:w-[300px] w-[100px]"
				>
					GENERATE
				</Link>
				<Link
					to="/trending"
					className="text-[#ECE0E0] nav-links md:w-[300px] w-[100px]"
				>
					TRENDING
				</Link>
				<Link
					to="/profile"
					className="text-[#AD2121] nav-links md:w-[300px] w-[100px]"
				>
					MY PROFILE
				</Link>
				<Link
					to="/login"
					className="text-[#ECE0E0] nav-links md:w-[50px] w-[20px]"
				>
					<FaQuestion className="md:text-[25px] text-[12px]" />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
