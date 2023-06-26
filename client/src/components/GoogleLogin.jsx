import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';

const GoogleLogin = () => {
	const [user, setUser] = useState([]);

	const login = useGoogleLogin({
		onSuccess: (codeResponse) => setUser(codeResponse),
		onError: (err) => console.log('Login Failed', err),
	});

	useEffect(() => {
		if (user.access_token) {
			axios
				.get(
					`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
					{
						headers: {
							Authorization: `Bearer ${user.access_token}`,
							Accept: 'application/json',
						},
					}
				)
				.then((res) => {
					window.localStorage.setItem('loggedIn', true);
					window.localStorage.setItem('login', res.data.name);
					window.localStorage.setItem('google', true);
					window.location.reload();
				})
				.catch((err) => console.log(err));
		} else {
			console.log('no user');
		}
	}, [user]);

	return (
		<button
			type="submit"
			onClick={() => login()}
			className="w-[35px] h-[35px] bg-[#fff] dark:bg-[#313338] flex justify-center items-center rounded-[10px] cursor-pointer mt-3 mb-3"
		>
			<FcGoogle className="text-[30px]" />
		</button>
	);
};

export default GoogleLogin;
