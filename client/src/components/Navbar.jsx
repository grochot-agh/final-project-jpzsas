import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaQuestion } from 'react-icons/fa';
import { Hamburger, HamburgerOpened, ThemeIcon } from '../components';

const Navbar = () => {
	const [loggedIn, setLoggedIn] = useState(true);
	const [activeGenerate, setActiveGenerate] = useState(false);
	const [activeTrending, setActiveTrending] = useState(false);
	const [activeProfile, setActiveProfile] = useState(false);
	const [activeHelp, setActiveHelp] = useState(false);
	const [activeMain, setActiveMain] = useState(false);
	const [open, setOpen] = useState(false);

	let links = [
		{
			name: 'MY PROFILE',
			path: loggedIn ? '/profile' : '/register',
			color: 'text-[#AD2121]',
		},
		{
			name: 'TRENDING',
			path: '/trending',
			color: 'text-[#ECE0E0] dark:text-[#221F1F]',
		},
		{ name: 'GENERATE', path: '/generate', color: 'text-[#7B2789]' },
		{
			name: 'HELP',
			path: '/help',
			color: 'text-[#ECE0E0] dark:text-[#221F1F]',
		},
		{
			name: 'ABOUT US',
			path: '/about',
			color: 'text-[#ECE0E0] dark:text-[#221F1F]',
		},
	];
	const handleClick = (option) => {
		setActiveGenerate(option === 'generate');
		setActiveTrending(option === 'trending');
		setActiveProfile(option === 'profile');
		setActiveHelp(option === 'help');
		setActiveMain(option === 'main');
	};

	const menuClick = () => {
		setOpen(!open);
	};

	return (
		<nav className="overflow-hidden w-full md:h-[80px] h-[60px] flex justify-between items-center light-gradient dark:dark-gradient nav-border dark:border-[#432a2a] md:pl-10 pl-4 z-10">
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
			{open ? (
				<HamburgerOpened onClick={menuClick} />
			) : (
				<Hamburger onClick={menuClick} />
			)}

			{open && (
				<div className="md:hidden h-[77%] w-[70%] bg-[#855E5E] dark:bg-[#463232] z-10 absolute top-[60px] right-0 flex flex-col items-center py-20">
					{links.map((link, i) => (
						<Link
							onClick={() => setOpen(!open)}
							key={i}
							className={`text-[35px] ${
								i === links.length - 1 ? 'border-b-2' : ''
							} border-t-2 border-solid border-[#ECE0E0] dark:border-[#211717] w-full pl-24 ${
								link.color
							}`}
							to={link.path}
						>
							{link.name}
						</Link>
					))}
					<div className="flex flex-row justify-between w-full px-4 items-center text-center absolute bottom-4">
						<p className="text-[30px] text-[#ECE0E0] dark:text-[#221F1F]">
							D<span className="text-[#AD2121]">A</span>RK MODE
						</p>
						<ThemeIcon />
					</div>
				</div>
			)}
			<div className="md:flex hidden flex-row h-full md:w-[800px] w-[600px] justify-center items-center">
				<Link
					onClick={() => handleClick('generate')}
					to="/generate"
					className={`text-[#7B2789] nav-links md:w-[300px] w-[100px] ${
						activeGenerate ? 'bg-[#d0b6b6] dark:bg-[#313338]' : ''
					}`}
				>
					GENERATE
				</Link>
				<Link
					onClick={() => handleClick('trending')}
					to="/trending"
					className={`text-[#ECE0E0] dark:text-[#4c4f55] nav-links md:w-[300px] w-[100px] ${
						activeTrending ? 'bg-[#7B2789]' : ''
					}`}
				>
					TRENDING
				</Link>
				<Link
					onClick={() => handleClick('profile')}
					to={`${loggedIn ? '/profile' : '/register'}`}
					className={`text-[#AD2121] nav-links md:w-[300px] w-[100px] ${
						activeProfile ? 'bg-[#d0b6b6] dark:bg-[#313338]' : ''
					}`}
				>
					MY PROFILE
				</Link>
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
