import React from 'react';

const SearchBar = () => {
	return (
		<div className="flex justify-center items-center">
			<label className="text-[#7B2789] text-[40px] mr-4" for="search">
				SE<span className="text-[#AD2121]">A</span>RCH
			</label>
			<input
				type="text"
				className="rounded-[15px] w-[1100px] h-[40px] text-[30px] border-none outline-none bg-[#ECE0E0]"
			/>
		</div>
	);
};

export default SearchBar;
