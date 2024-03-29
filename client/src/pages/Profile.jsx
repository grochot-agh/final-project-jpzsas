import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	TrendingPane,
	ProfileForm,
	ProfileSmallForm,
	CommentsSection,
	Loading,
	RenderPosts,
} from '../components';

const Profile = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [activeLogin, setActiveLogin] = useState(false);
	const [activePassword, setActivePassword] = useState(false);
	const [activeEmail, setActiveEmail] = useState(false);
	const [activeDelete, setActiveDelete] = useState(false);
	const [activeCollection, setActiveCollection] = useState(true);
	const [openComment, setOpenComment] = useState(false);
	const [userData, setUserData] = useState('');
	const [userPosts, setUserPosts] = useState([]);
	const [postId, setPostId] = useState('');

	const handleCommentClick = (postId) => {
		setOpenComment(!openComment);
		if (postId !== '') {
			setPostId(postId);
			console.log(postId);
		} else {
			setPostId('');
		}
	};

	//get user's posts
	const fetchUserPosts = async (creator) => {
		setLoading(true);
		try {
			const response = await fetch(
				`http://localhost:8000/api/v1/post/${creator}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			if (response.status === 200) { //success
				const result = await response.json(); //make result a json object
				setUserPosts(result.data.reverse()); 
				console.log(userPosts);
			}
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		if (window.localStorage.getItem('google') !== 'true') {
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
					fetchUserPosts(data.data.login);
					if (data.data == 'Token expired') {
						alert('Token expired, please log in again');
						window.localStorage.clear();
						navigate('/login');
						window.location.reload();
					}
				});
		} else {
			fetchUserPosts(window.localStorage.getItem('login'));
		}
	}, []);

	//delete user account
	const deleteAccount = async (id) => {
		if (window.localStorage.getItem('google') == 'true') { //in case user registered using google account
			alert('You cannot delete your google account');
			return;
		}
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
				if (response.status === 200) { //success in deleting account
					alert('Account deleted successfully');
					window.localStorage.clear(); //clear local storage
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

	//handle click on profile options
	const handleClick = (option) => {
		setActiveLogin(option === 'login');
		setActivePassword(option === 'password');
		setActiveEmail(option === 'email');
		setActiveDelete(option === 'delete');
		setActiveCollection(option === 'collection');
	};

	//return profile page
	return (
		<div className="home-gradient w-full sl:h-[100vh] flex sl:flex-row flex-col">
			{openComment && <CommentsSection height="profile" postId={postId} />}
			<div className="sl:block hidden bg-[#825f5f] dark:bg-[#463232] w-[470px] border-r-4 border-solid border-[#af9595] dark:border-[#211717]">
				<h1 className="text-[30px] text-[#ECE0E0] dark:text-black text-justify profile-dashboard cream-glow dark:dark-shadow">
					WELCOME BACK &nbsp;
					<span className="text-[#7B2789]">
						{' '}
						{window.localStorage.getItem('google') == 'true'
							? window.localStorage.getItem('login')
							: userData.login}{' '}
						{''}
					</span>
					!
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

			<div className="w-full bg-[#855E5E] dark:bg-[#463232] h-[27.5vh] sl:hidden flex flex-col justify-around">
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

			<div className="w-[1060px] h-[100vh] flex justify-center items-center relative sl:block hidden">
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
					<div className=" flex flex-col items-center justify-center py-64">
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
					<div className=" flex justify-around flex-wrap">
						{loading ? (
							<Loading />
						) : (
							<RenderPosts
								data={userPosts}
								title="No posts yet"
								onCommentClick={handleCommentClick}
							/>
						)}
					</div>
				)}
			</div>

			<div className="w-full h-full sl:hidden flex">
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
					<div className="flex flex-col h-[73.5vh] w-full items-center justify-center text-center px-3">
						<h1 className="text-[35px] text-[#ECE0E0] dark:text-[#313338]">
							Do you really want to leave us?
						</h1>
						<p className="text-[30px] text-[#AD2121]">Accept the warning</p>
						<button
							onClick={() => deleteAccount(userData._id)}
							className="w-[150px] h-[50px]  mt-4 rounded-[10px] text-[#ECE0E0] bg-[#AD2121]"
						>
							DELETE
						</button>
					</div>
				)}

				{activeCollection && (
					<div className="flex flex-col items-center justify-center w-full">
						{loading ? (
							<Loading />
						) : (
							<RenderPosts
								data={userPosts}
								title="No posts yet"
								onCommentClick={handleCommentClick}
							/>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Profile;
