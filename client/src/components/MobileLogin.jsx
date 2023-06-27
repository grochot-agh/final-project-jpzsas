import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Hamburger, HamburgerOpened, ThemeIcon } from '../components';
import { googleLogout } from '@react-oauth/google';

const MobileLogin = () => {
	const navigate = useNavigate();
	const isUserLoggedIn = window.localStorage.getItem('loggedIn');
	const [open, setOpen] = useState(false);

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

	const menuClick = () => {
		setOpen(!open);
	};

	let links = [
		{
			name: 'MY PROFILE',
			path: isUserLoggedIn == 'true' ? '/profile' : '/login',
			color: 'text-[#AD2121]',
			click: () => setOpen(!open),
		},
		{
			name: 'LOGIN',
			path: isUserLoggedIn == 'true' ? '/profile' : '/login',
			color: 'text-[#C0A6A6] dark:text-[#855E5E]',
			click: () => setOpen(!open),
		},
		{
			name: 'REGISTER',
			path: isUserLoggedIn == 'true' ? '/profile' : '/register',
			color: 'text-[#C0A6A6] dark:text-[#855E5E]',
			click: () => setOpen(!open),
		},
		{
			name: 'LOG OUT',
			path: '/login',
			color: 'text-[#C0A6A6] dark:text-[#855E5E]',
			click: () => {
				setOpen(!open);
				if (window.localStorage.getItem('google') === 'true') {
					gglLogout();
				} else {
					logOut();
				}
			},
		},
		{
			name: 'TRENDING',
			path: '/trending',
			color: 'text-[#7B2789]',
			click: () => setOpen(!open),
		},
		{ name: 'GENERATE', path: '/generate', color: 'text-[#7B2789]' },
		{
			name: 'HELP',
			path: '/help',
			color: 'text-[#ECE0E0] dark:text-[#221F1F]',
			click: () => setOpen(!open),
		},
		{
			name: 'ABOUT US',
			path: '/about',
			color: 'text-[#ECE0E0] dark:text-[#221F1F]',
			click: () => setOpen(!open),
		},
	];

	return (
		<>
			{open ? (
				<HamburgerOpened onClick={menuClick} />
			) : (
				<Hamburger onClick={menuClick} />
			)}
			{open && (
				<div className="md:hidden h-[80%] w-[55%] bg-[#855E5E] dark:bg-[#463232] z-20 absolute top-[60px] right-0 flex flex-col items-center py-10">
					{links.map((link, i) => (
						<Link
							onClick={link.click}
							key={i}
							className={`text-[35px] ${
								i === links.length - 1 ? 'border-b-2' : ''
							} border-t-2 border-solid border-[#ECE0E0] dark:border-[#211717] w-full pl-5 ${
								link.color
							}`}
							to={link.path}
						>
							{link.name}
						</Link>
					))}
					<div className="flex flex-row justify-between w-full px-4 items-center text-center absolute bottom-4">
						<p className="text-[20px] text-[#ECE0E0] dark:text-[#221F1F]">
							CH<span className="text-[#AD2121]">A</span>NGE MODE
						</p>
						<ThemeIcon />
					</div>
				</div>
			)}
		</>
	);
};

export default MobileLogin;
