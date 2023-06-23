import React, { useState } from 'react';

const SearchBar = ({ allPosts, setSearchResults }) => {
	const [searchText, setSearchText] = useState('');
	const [searchTimeout, setSearchTimeout] = useState(null);

	const handleSearch = (e) => {
		clearTimeout(searchTimeout);
		setSearchText(e.target.value);
		console.log(searchText);

		setSearchTimeout(
			setTimeout(() => {
				const searchResult = allPosts.filter(
					(post) =>
						String(post.tag).toLowerCase().includes(searchText.toLowerCase()) ||
						String(post.prompt).toLowerCase().includes(searchText.toLowerCase())
				);
				setSearchResults(searchResult);
			}, 500)
		);
	};

	return (
		<div className="flex justify-center items-center md:mb-0 mb-6">
			<label
				className="text-[#7B2789] md:text-[40px] text-[25px] mr-4"
				htmlFor="search"
			>
				SE<span className="text-[#AD2121]">A</span>RCH
			</label>
			<input
				value={searchText}
				onChange={handleSearch}
				type="text"
				className="rounded-[15px] md:w-[1100px] w-[350px] md:h-[40px] h-[30px] md:text-[30px] text-[20px] border-none outline-none bg-[#ECE0E0] dark:bg-[#312D2D]"
			/>
		</div>
	);
};

export default SearchBar;
