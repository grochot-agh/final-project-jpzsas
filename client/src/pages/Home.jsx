import React, { useState, useEffect } from 'react';
import { SearchBar, Gallery, Loading } from '../components';

const Home = () => {
	const [allPosts, setAllPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchResults, setSearchResults] = useState(null);

	const fetchPosts = async () => {
		setLoading(true);
		try {
			const response = await fetch('http://localhost:8000/api/v1/post', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response.status === 200) {
				const result = await response.json();
				setAllPosts(result.data.reverse());
				console.log(allPosts);
			}
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div className="home-gradient dark:home-dark-gradient md:h-[77.5vh] h-[80.1vh] flex items-center flex-col py-5">
			<SearchBar allPosts={allPosts} setSearchResults={setSearchResults} />
			<Gallery allPosts={allPosts} filteredPosts={searchResults} />
		</div>
	);
};

export default Home;
