import React from 'react';
import { useDarkMode } from '../hooks';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeIcon = () => {
	const [darkTheme, setDarkTheme] = useDarkMode();
	const handleMode = () => setDarkTheme(!darkTheme);

	return (
		<span onClick={handleMode}>
			{darkTheme ? (
				<FaSun className="cursor-pointer text-[#ECE0E0] dark:text-[#4c4f55] text-[40px]" />
			) : (
				<FaMoon className="cursor-pointer text-[#ECE0E0] dark:text-[#4c4f55] text-[40px] rotate-[225deg]" />
			)}
		</span>
	);
};

export default ThemeIcon;
