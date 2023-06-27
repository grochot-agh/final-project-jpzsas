import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaQuestion } from 'react-icons/fa';
import { MobileLogin } from '../components';
import { googleLogout } from '@react-oauth/google';

const Navbar = () => {
	const navigate = useNavigate();
	const [activeGenerate, setActiveGenerate] = useState(false);
	const [activeTrending, setActiveTrending] = useState(false);
	const [activeProfile, setActiveProfile] = useState(false);
	const [activeHelp, setActiveHelp] = useState(false);
	const [activeMain, setActiveMain] = useState(false);

	const handleClick = (option) => {
		setActiveGenerate(option === 'generate');
		setActiveTrending(option === 'trending');
		setActiveProfile(option === 'profile');
		setActiveHelp(option === 'help');
		setActiveMain(option === 'main');
	};

	const logOut = () => {
		window.localStorage.clear();
		navigate('/login');
		window.location.reload();
	};

	const gglLogout = () => {
		googleLogout();
		window.localStorage.clear();
		navigate('/login');
		window.location.reload();
	};

	return (
		<nav className="overflow-hidden w-full md:h-[80px] h-[60px] flex justify-between items-center light-gradient dark:dark-gradient nav-border dark:border-[#432a2a] md:pl-10 pl-4 z-20">
			<Link
				className="flex flex-row text-center items-center justify-between md:w-[270px] w-[150px] md:h-[60px] h-[30px]"
				to="/"
			>
				<img
					src={logo}
					alt="ArtIfy logo"
					className="object-contain w-8 md:w-14"
				/>
				<h1
					onClick={() => handleClick('main')}
					className="font-normal text-[35px] md:text-[65px] text-[#855E5E]"
				>
					<span className="text-[#ad2121]">A</span>RT
					<span className="text-[#7b2789]">I</span>FY
				</h1>
			</Link>
			<MobileLogin />
			<div className="md:flex hidden flex-row h-full md:w-[800px] w-[600px] justify-center items-center">
				<Link
					onClick={() => handleClick('generate')}
					to="/generate"
					className={`text-[#7B2789] nav-links md:w-[300px] w-[100px] dark:hover:bg-[#211717] ${
						activeGenerate ? 'bg-[#855E5E] dark:bg-[#211717]' : ''
					}`}
				>
					GENERATE
				</Link>
				<Link
					onClick={() => handleClick('trending')}
					to="/trending"
					className={`text-[#ECE0E0] dark:text-[#4c4f55] nav-links md:w-[300px] w-[100px] hover:bg-[#7B2789] ${
						activeTrending ? 'bg-[#7B2789]' : ''
					}`}
				>
					TRENDING
				</Link>
				<div
					className={`group nav-links md:w-[300px] w-[100px] hover:bg-[#855E5E] dark:hover:bg-[#211717] ${
						activeProfile ? 'bg-[#855E5E] dark:bg-[#211717]' : ''
					}`}
				>
					<Link
						onClick={() => handleClick('profile')}
						to={`${
							window.localStorage.getItem('loggedIn') == 'true'
								? '/profile'
								: '/login'
						}`}
						className={`text-[#AD2121] `}
					>
						MY PROFILE
					</Link>
					<div className="group-hover:flex hidden w-[250px] h-[150px] profile-gradient dark:profile-dark-gradient absolute top-[76px] z-10 flex-col justify-around items-start">
						<Link
							to="/login"
							className="text-[#ECE0E0] dark:text-[#4c4f55] text-[25px] border-b-4 border-t-4 border-solid border-[#af9595] dark:border-[#432a2a] w-full  cursor-pointer"
						>
							LOG IN
						</Link>
						<Link
							to="/register"
							className="text-[#7B2789] text-[25px] border-b-4 border-solid border-[#af9595] dark:border-[#432a2a] w-full cursor-pointer"
						>
							REGISTER
						</Link>
						<p
							onClick={
								window.localStorage.getItem('google') == 'true'
									? gglLogout
									: logOut
							}
							className="text-[#AD2121] text-[25px] w-full cursor-pointer"
						>
							LOG OUT
						</p>
					</div>
				</div>
				<Link
					onClick={() => handleClick('help')}
					to="/help"
					className={`text-[#ECE0E0] dark:text-[#4c4f55] nav-links md:w-[50px] w-[20px] ${
						activeHelp ? 'bg-[#AD2121]' : ''
					}`}
				>
					<FaQuestion className="md:text-[25px] text-[12px]" />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
