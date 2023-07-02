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

	//return home page
	return (
		<div className="home-gradient dark:home-dark-gradient h-[100vh] flex items-center flex-col py-5 overflow-x-hidden">
			<SearchBar allPosts={allPosts} setSearchResults={setSearchResults} />
			<Gallery allPosts={allPosts} filteredPosts={searchResults} />
		</div>
	);
};

export default Home;
