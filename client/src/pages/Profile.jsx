import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	TrendingPane,
	ProfileForm,
	ProfileSmallForm,
	CommentsSection,
} from '../components';

const Profile = () => {
	const navigate = useNavigate();
	const [activeLogin, setActiveLogin] = useState(false);
	const [activePassword, setActivePassword] = useState(false);
	const [activeEmail, setActiveEmail] = useState(false);
	const [activeDelete, setActiveDelete] = useState(false);
	const [activeCollection, setActiveCollection] = useState(true);
	const [openComment, setOpenComment] = useState(false);
	const [userData, setUserData] = useState('');

	useEffect(() => {
		fetch('http://localhost:8000/user/profile', {
			method: 'POST',
			crossDomain: true,
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
			body: JSON.stringify({
				token: window.localStorage.getItem('token'),
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data, 'userData');
				setUserData(data.data);

				if (data.data == 'Token expired') {
					alert('Token expired, please log in again');
					window.localStorage.clear();
					navigate('/login');
					window.location.reload();
				}
			});
	}, []);

	const deleteAccount = async (id) => {
		if (window.confirm('Are you sure you want to delete your account?')) {
			try {
				const response = await fetch('http://localhost:8000/user/delete-acc', {
					method: 'POST',
					crossDomain: true,
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
						'Access-Control-Allow-Origin': '*',
					},
					body: JSON.stringify({
						userID: id,
					}),
				});
				const data = await response.json();
				console.log(data);
				if (response.status === 200) {
					alert('Account deleted successfully');
					window.localStorage.clear();
					navigate('/');
					window.location.reload();
				} else {
					alert('Could not delete account, try again');
				}
			} catch (err) {
				console.log(err);
			}
		}
	};

	const handleClick = (option) => {
		setActiveLogin(option === 'login');
		setActivePassword(option === 'password');
		setActiveEmail(option === 'email');
		setActiveDelete(option === 'delete');
		setActiveCollection(option === 'collection');
	};

	return (
		<div className="home-gradient md:h-[77.5vh] h-[100vh] flex md:flex-row flex-col">
			{openComment && <CommentsSection height="78vh" />}
			<div className="md:block hidden h-full bg-[#825f5f] dark:bg-[#463232] w-[470px] border-r-4 border-solid border-[#af9595] dark:border-[#211717]">
				<h1 className="text-[30px] text-[#ECE0E0] dark:text-black text-justify profile-dashboard cream-glow dark:dark-shadow">
					WELCOME BACK{' '}
					<span className="text-[#7B2789]"> {userData.login} </span> !
				</h1>
				<p
					onClick={() => handleClick('login')}
					className={`text-[20px] text-[#7B2789] text-justify profile-dashboard hover:bg-[#ECE0E0] dark:hover:bg-[#313338] ${
						activeLogin ? 'bg-[#ECE0E0] dark:bg-[#313338]' : ''
					}`}
				>
					LOGIN CHANGE
				</p>
				<p
					onClick={() => handleClick('password')}
					className={`text-[20px] text-[#AD2121] text-justify profile-dashboard hover:bg-[#ECE0E0] dark:hover:bg-[#313338] ${
						activePassword ? 'bg-[#ECE0E0] dark:bg-[#313338]' : ''
					}`}
				>
					PASSWORD CHANGE
				</p>
				<p
					onClick={() => handleClick('email')}
					className={`text-[20px] text-[#ECE0E0] dark:text-black text-justify profile-dashboard hover:bg-[#7B2789] ${
						activeEmail ? 'bg-[#7B2789]' : ''
					}`}
				>
					EMAIL CHANGE
				</p>
				<p
					onClick={() => handleClick('delete')}
					className={`text-[20px] text-[#ECE0E0] dark:text-black text-justify profile-dashboard hover:bg-[#AD2121] ${
						activeDelete ? 'bg-[#AD2121]' : ''
					}`}
				>
					DELETE MY ACCOUNT
				</p>
				<p
					onClick={() => handleClick('collection')}
					className={`text-[20px] text-[#7B2789] text-justify profile-dashboard hover:bg-[#ECE0E0] dark:hover:bg-[#313338] ${
						activeCollection ? 'bg-[#ECE0E0] dark:bg-[#313338]' : ''
					}`}
				>
					SHOW MY ARTIFY COLLECTION
				</p>
			</div>
			<div className="w-full bg-[#855E5E] dark:bg-[#463232] h-[40%] md:hidden flex flex-col justify-around">
				<p
					onClick={() => handleClick('login')}
					className={`text-[#7B2789] profilesm-link hover:bg-[#ECE0E0] dark:hover:bg-[#313338] ${
						activeLogin ? 'bg-[#ECE0E0] dark:bg-[#313338]' : ''
					}`}
				>
					LOGIN CHANGE
				</p>
				<p
					onClick={() => handleClick('password')}
					className={`text-[#AD2121] profilesm-link hover:bg-[#ECE0E0] dark:hover:bg-[#313338] ${
						activePassword ? 'bg-[#ECE0E0] dark:bg-[#313338]' : ''
					}`}
				>
					PASSWORD CHANGE
				</p>
				<p
					onClick={() => handleClick('email')}
					className={`text-[#ECE0E0] dark:text-black profilesm-link hover:bg-[#7B2789] ${
						activeEmail ? 'bg-[#7B2789]' : ''
					}`}
				>
					EMAIL CHANGE
				</p>
				<p
					onClick={() => handleClick('delete')}
					className={`text-[#ECE0E0] dark:text-black profilesm-link hover:bg-[#AD2121] ${
						activeDelete ? 'bg-[#AD2121]' : ''
					}`}
				>
					DELETE MY ACCOUNT
				</p>
				<p
					onClick={() => handleClick('collection')}
					className={`text-[#7B2789] profilesm-link hover:bg-[#ECE0E0] dark:hover:bg-[#313338] ${
						activeCollection ? 'bg-[#ECE0E0] dark:bg-[#313338]' : ''
					}`}
				>
					SHOW MY ARTIFY COLLECTION
				</p>
			</div>

			<div className="w-[1060px] h-full relative md:block hidden">
				{activeLogin && (
					<ProfileForm
						title="LOGIN CHANGE"
						type="login"
						firstText="NEW LOGIN"
						secondText="ENTER PASSWORD"
						buttonText="ACCEPT"
						textColor="#7B2789"
						textColor2="#AD2121"
						buttonColor="#AD2121"
						threeInputs={false}
						id={userData._id}
					/>
				)}

				{activePassword && (
					<ProfileForm
						title="PASSWORD CHANGE"
						type="password"
						firstText="ENTER CURRENT PASSWORD"
						secondText="ENTER NEW PASSWORD"
						thirdText="ENTER NEW PASSWORD AGAIN"
						buttonText="ACCEPT"
						textColor="#7B2789"
						textColor2="#AD2121"
						buttonColor="#AD2121"
						threeInputs={true}
						id={userData._id}
					/>
				)}

				{activeEmail && (
					<ProfileForm
						title="EMAIL CHANGE"
						type="email"
						firstText="NEW EMAIL"
						secondText="ENTER PASSWORD"
						buttonText="ACCEPT"
						textColor="#7B2789"
						textColor2="#AD2121"
						buttonColor="#AD2121"
						threeInputs={false}
						id={userData._id}
					/>
				)}

				{activeDelete && (
					<div className="h-full flex flex-col items-center justify-center">
						<h1 className="text-[50px] text-[#ECE0E0] dark:text-[#313338]">
							Do you really want to leave us?
						</h1>
						<p className="text-[35px] text-[#AD2121]">Accept the warning</p>
						<button
							onClick={() => deleteAccount(userData._id)}
							className="w-[150px] h-[50px]  mt-4 rounded-[10px] text-[#ECE0E0] bg-[#AD2121]"
						>
							DELETE
						</button>
					</div>
				)}

				{activeCollection && (
					<div className="h-full flex justify-around pb-5">
						<div className="flex self-start">
							<TrendingPane />
						</div>
						<div className="flex self-end">
							<TrendingPane />
						</div>
					</div>
				)}
			</div>

			<div className="w-full h-[60%] md:hidden flex">
				{activeLogin && (
					<ProfileSmallForm
						type="text"
						firstText="NEW LOGIN"
						secondText="ENTER PASSWORD"
						thirdText=""
						buttonText="ACCEPT"
						textColor="#7B2789"
						textColor2="#AD2121"
						buttonColor="#AD2121"
						threeInputs={false}
						id={userData._id}
					/>
				)}
				{activePassword && (
					<ProfileSmallForm
						type="password"
						firstText="ENTER CURRENT PASSWORD"
						secondText="ENTER NEW PASSWORD"
						thirdText="ENTER NEW PASSWORD AGAIN"
						buttonText="ACCEPT"
						textColor="#7B2789"
						textColor2="#AD2121"
						buttonColor="#AD2121"
						threeInputs={true}
						id={userData._id}
					/>
				)}
				{activeEmail && (
					<ProfileSmallForm
						type="email"
						firstText="NEW EMAIL"
						secondText="ENTER PASSWORD"
						thirdText=""
						buttonText="ACCEPT"
						textColor="#7B2789"
						textColor2="#AD2121"
						buttonColor="#AD2121"
						threeInputs={false}
						id={userData._id}
					/>
				)}

				{activeDelete && (
					<div className="flex flex-col items-center justify-center text-center">
						<h1 className="text-[40px] text-[#ECE0E0] dark:text-[#313338]">
							Do you really want to leave us?
						</h1>
						<p className="text-[35px] text-[#AD2121]">Accept the warning</p>
						<button
							onClick={() => deleteAccount(userData._id)}
							className="w-[150px] h-[50px]  mt-4 rounded-[10px] text-[#ECE0E0] bg-[#AD2121]"
						>
							DELETE
						</button>
					</div>
				)}

				{activeCollection && (
					<div className="h-full flex flex-col items-center justify-center w-full">
						<TrendingPane />
					</div>
				)}
			</div>
		</div>
	);
};

export default Profile;
