import React, { useState } from 'react';
import { TrendingPane, ProfileForm, ProfileSmallForm } from '../components';

const Profile = () => {
	const [activeLogin, setActiveLogin] = useState(false);
	const [activePassword, setActivePassword] = useState(false);
	const [activeEmail, setActiveEmail] = useState(false);
	const [activeDelete, setActiveDelete] = useState(false);
	const [activeCollection, setActiveCollection] = useState(true);
	const [login, setLogin] = useState('JP2137');

	const handleClick = (option) => {
		setActiveLogin(option === 'login');
		setActivePassword(option === 'password');
		setActiveEmail(option === 'email');
		setActiveDelete(option === 'delete');
		setActiveCollection(option === 'collection');
	};

	return (
		<div className="home-gradient md:h-[77.5vh] h-[100vh] flex md:flex-row flex-col">
			<div className="md:block hidden h-full bg-[#825f5f] w-[470px] border-r-4 border-solid border-[#af9595]">
				<h1 className="text-[30px] text-[#ECE0E0] text-justify profile-dashboard cream-glow">
					WELCOME BACK <span className="text-[#7B2789]"> {login} </span> !
				</h1>
				<p
					onClick={() => handleClick('login')}
					className={`text-[20px] text-[#7B2789] text-justify profile-dashboard hover:bg-[#ECE0E0] ${
						activeLogin ? 'bg-[#ECE0E0]' : ''
					}`}
				>
					LOGIN CHANGE
				</p>
				<p
					onClick={() => handleClick('password')}
					className={`text-[20px] text-[#AD2121] text-justify profile-dashboard hover:bg-[#ECE0E0] ${
						activePassword ? 'bg-[#ECE0E0]' : ''
					}`}
				>
					PASSWORD CHANGE
				</p>
				<p
					onClick={() => handleClick('email')}
					className={`text-[20px] text-[#ECE0E0] text-justify profile-dashboard hover:bg-[#7B2789] ${
						activeEmail ? 'bg-[#7B2789]' : ''
					}`}
				>
					EMAIL CHANGE
				</p>
				<p
					onClick={() => handleClick('delete')}
					className={`text-[20px] text-[#ECE0E0] text-justify profile-dashboard hover:bg-[#AD2121] ${
						activeDelete ? 'bg-[#AD2121]' : ''
					}`}
				>
					DELETE MY ACCOUNT
				</p>
				<p
					onClick={() => handleClick('collection')}
					className={`text-[20px] text-[#7B2789] text-justify profile-dashboard hover:bg-[#ECE0E0] ${
						activeCollection ? 'bg-[#ECE0E0]' : ''
					}`}
				>
					SHOW MY ARTIFY COLLECTION
				</p>
			</div>
			<div className="w-full bg-[#855E5E] h-[40%] md:hidden flex flex-col justify-around">
				<p
					onClick={() => handleClick('login')}
					className={`text-[#7B2789] profilesm-link hover:bg-[#ECE0E0] ${
						activeLogin ? 'bg-[#ECE0E0]' : ''
					}`}
				>
					LOGIN CHANGE
				</p>
				<p
					onClick={() => handleClick('password')}
					className={`text-[#AD2121] profilesm-link hover:bg-[#ECE0E0] ${
						activePassword ? 'bg-[#ECE0E0]' : ''
					}`}
				>
					PASSWORD CHANGE
				</p>
				<p
					onClick={() => handleClick('email')}
					className={`text-[#ECE0E0] profilesm-link hover:bg-[#7B2789] ${
						activeEmail ? 'bg-[#7B2789]' : ''
					}`}
				>
					EMAIL CHANGE
				</p>
				<p
					onClick={() => handleClick('delete')}
					className={`text-[#ECE0E0] profilesm-link hover:bg-[#AD2121] ${
						activeDelete ? 'bg-[#AD2121]' : ''
					}`}
				>
					DELETE MY ACCOUNT
				</p>
				<p
					onClick={() => handleClick('collection')}
					className={`text-[#7B2789] profilesm-link hover:bg-[#ECE0E0] ${
						activeCollection ? 'bg-[#ECE0E0]' : ''
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
					/>
				)}

				{activeDelete && (
					<div className="h-full flex flex-col items-center justify-center">
						<h1 className="text-[50px] text-[#ECE0E0]">
							Do you really want to leave us?
						</h1>
						<p className="text-[35px] text-[#AD2121]">Accept the warning</p>
					</div>
				)}

				{activeCollection && (
					<div className="h-full flex flex-col items-center">
						<h1 className="text-[40px] text-[#ECE0E0]">YOUR COLLECTION</h1>
						<div className="flex flex-row gap-3">
							<TrendingPane />
							<TrendingPane />
							<TrendingPane />
						</div>
						<div className="flex flex-row gap-3">
							<TrendingPane />
							<TrendingPane />
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
					/>
				)}

				{activeDelete && (
					<div className="flex flex-col items-center justify-center text-center">
						<h1 className="text-[40px] text-[#ECE0E0]">
							Do you really want to leave us?
						</h1>
						<p className="text-[35px] text-[#AD2121]">Accept the warning</p>
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
