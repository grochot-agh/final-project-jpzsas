import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { WiMoonWaxingCrescent2 } from 'react-icons/wi';

const Footer = () => {
	return (
		<footer className="overflow-hidden w-full h-[80px flex justify-between items-center footer-gradient footer-border sm:px-10 px-6 py-2 ">
			<Link
				className="flex flex-row text-center items-center justify-between md:w-[270px] w-[150px] md:h-[60px] h-[30px]"
				to="/"
			>
				<img
					src={logo}
					alt="ArtIfy logo"
					className="object-contain w-8 sm:w-14"
				/>
				<h1 className="font-normal text-[35px] md:text-[65px] text-[#DBC3C3]">
					<span className="text-[#ad2121]">A</span>RT
					<span className="text-[#7b2789]">I</span>FY
				</h1>
			</Link>
			<p className="text-[35px] text-[#ECE0E0]">ABOUT US:bla bla</p>
			<WiMoonWaxingCrescent2 className="text-[50px] cursor-pointer text-[#ECE0E0CC] rotate-[35deg] ml-60" />
		</footer>
	);
};

export default Footer;
