import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import ThemeIcon from './ThemeIcon';

const Footer = () => {
	return (
		<footer className="overflow-hidden w-full h-[80px] flex justify-between items-center footer-gradient dark:footer-dark-gradient footer-border md:px-10 px-6 py-2 dark:border-[#432a2a]">
			<Link
				className="flex flex-row text-center items-center justify-between md:w-[270px] w-[150px] md:h-[60px] h-[30px]"
				to="/"
			>
				<img
					src={logo}
					alt="ArtIfy logo"
					className="object-contain w-8 md:w-14"
				/>
				<h1 className="font-normal text-[35px] md:text-[65px] text-[#DBC3C3] dark:text-[#4c4f55]">
					<span className="text-[#ad2121]">A</span>RT
					<span className="text-[#7b2789]">I</span>FY
				</h1>
			</Link>
			<Link
				to="/about"
				className="md:flex hidden cursor-pointer text-[35px] text-[#ECE0E0] dark:text-[#4c4f55]"
			>
				ABOUT US
			</Link>
			<span className="ml-60 md:flex hidden">
				<ThemeIcon />
			</span>
		</footer>
	);
};

export default Footer;
