import React from 'react';

const SearchBar = () => {
	return (
		<div className="flex justify-center items-center sm:mb-0 mb-6">
			<label
				className="text-[#7B2789] sm:text-[40px] text-[25px] mr-4"
				for="search"
			>
				SE<span className="text-[#AD2121]">A</span>RCH
			</label>
			<input
				type="text"
				className="rounded-[15px] sm:w-[1100px] w-[350px] sm:h-[40px] h-[30px] sm:text-[30px] text-[20px] border-none outline-none bg-[#ECE0E0]"
			/>
		</div>
	);
};

export default SearchBar;
