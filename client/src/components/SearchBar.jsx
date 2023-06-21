import React from 'react';

const SearchBar = () => {
	return (
		<div className="flex justify-center items-center md:mb-0 mb-6">
			<label
				className="text-[#7B2789] md:text-[40px] text-[25px] mr-4"
				htmlFor="search"
			>
				SE<span className="text-[#AD2121]">A</span>RCH
			</label>
			<input
				type="text"
				className="rounded-[15px] md:w-[1100px] w-[350px] md:h-[40px] h-[30px] md:text-[30px] text-[20px] border-none outline-none bg-[#ECE0E0] dark:bg-[#312D2D]"
			/>
		</div>
	);
};

export default SearchBar;
