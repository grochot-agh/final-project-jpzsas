import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRandomPrompt } from '../utils';
import { Loading } from '../components';

const Generate = () => {
	const navigate = useNavigate();
	const [generating, setGenerating] = useState(false);
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		creator:
			window.localStorage.getItem('loggedIn') == 'true'
				? window.localStorage.getItem('login')
				: '',
		prompt: '',
		image: '',
		hashtag: '',
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleRandom = () => {
		const rndPrompt = getRandomPrompt(form.prompt);
		setForm({ ...form, prompt: rndPrompt });
	};

	const generateImg = async () => {
		if (form.prompt) {
			try {
				setGenerating(true);
				const response = await fetch('http://localhost:8000/api/v1/ai', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						prompt: form.prompt,
					}),
				});

				const data = await response.json();
				setForm({ ...form, image: `data:image/jpeg;base64,${data.image}` });
			} catch (err) {
				alert(err);
			} finally {
				setGenerating(false);
			}
		} else {
			alert('Please provide a proper prompt');
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (form.prompt && form.image && form.creator && form.hashtag) {
			setLoading(true);
			try {
				const response = await fetch(`http://localhost:8000/api/v1/post`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
						'Access-Control-Allow-Origin': '*',
					},
					body: JSON.stringify({
						creator: form.creator,
						prompt: form.prompt,
						image: form.image,
						hashtag: form.hashtag,
					}),
				});

				const data = await response.json();
				console.log(data);
				if (response.status === 201) {
					alert('Post created successfully!');
					navigate('/');
				} else {
					alert('Post was not created, try again');
				}
			} catch (err) {
				alert(err);
			} finally {
				setLoading(false);
			}
		} else {
			alert('Please log in and provide a prompt and a hashtag to save');
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="home-gradient h-[100vh] flex items-center z-0 flex-col"
		>
			<div className="flex flex-col w-full px-5 py-3">
				<label
					htmlFor="prompt"
					className="text-[30px] text-[#855E5E] sl:self-auto self-center"
				>
					Enter a detailed prompt
				</label>
				<input
					type="text"
					name="prompt"
					id="prompt"
					value={form.prompt}
					onChange={handleChange}
					className="sl:w-[1500px] sl:h-[60px] w-[450px] bg-[#ECE0E0] dark:bg-[#313338] rounded-[15px] outline-none border-none text-[15px] font-['Baumans'] p-2 self-center"
				/>
			</div>
			<div className="sl:flex hidden flex-row justify-around w-full overflow-hidden h-full px-40 py-28">
				<div className="w-[384px] h-[384px] bg-[#ECE0E0] dark:bg-[#313338] self-end rounded-[10px] flex justify-center items-center">
					{form.image ? (
						<img
							src={form.image}
							alt={form.prompt}
							className="w-full h-full object-contain rounded-[10px]"
						/>
					) : (
						''
					)}
					{generating && <Loading />}
				</div>
				<div className="flex flex-col h-full w-[350px] justify-around">
					<p className="text-[20px] text-[#7B2789]">
						You don’t have any idea? Try this:
					</p>
					<button
						type="button"
						onClick={handleRandom}
						className="bg-[#7B2789] text-[#ECE0E0] dark:text-[#313338] w-[220px] h-[60px] rounded-[10px]"
					>
						CLICK ON ME!
					</button>
					<div className="w-128 h-32 flex flex-col justify-center items-center">
						<p className="text-[35px] text-[#855E5E] dark:text-[#855E5E]">
							ADD A HASHTAG
						</p>
						<input
							onChange={handleChange}
							name="hashtag"
							value={form.hashtag}
							type="text"
							placeholder="animal view game"
							className="w-128 h-16 rounded-2xl outline-none border-none font-['Baumans'] text-[30px] text-center text-[#855E5E] bg-[#ECE0E0] dark:bg-[#312D2D] pl-4 placeholder:text-[20px] dark:placeholder:text-black"
						/>
					</div>
					<div className="flex flex-row justify-around">
						<button
							type="button"
							onClick={generateImg}
							className="self-end w-[150px] h-[60px] text-[#ECE0E0] dark:text-[#313338] bg-[#AD2121] rounded-[10px]"
						>
							{generating ? 'GENERATING...' : 'GENERATE'}
						</button>
						<button
							type="submit"
							className="self-end w-[150px] h-[60px] text-[#ECE0E0] dark:text-[#313338] bg-[#7B2789] rounded-[10px]"
						>
							{loading ? 'POSTING...' : 'POST'}
						</button>
					</div>
				</div>
			</div>

			<div className="sl:hidden flex flex-col items-center justify-around h-full">
				<p className="text-[20px] text-[#7B2789]">
					You don’t have any idea? Try this:
				</p>
				<button
					type="button"
					onClick={handleRandom}
					className="w-[400px] h-[40px] text-[20px] text-[#ECE0E0] dark:text-[#313338] bg-[#7B2789] rounded-[10px]"
				>
					CLICK ON ME!
				</button>
				<div className="w-[256px] h-[256px] bg-[#ECE0E0] dark:bg-[#313338] rounded-[10px]">
					{form.image ? (
						<img
							src={form.image}
							alt={form.prompt}
							className="w-full h-full object-contain rounded-[10px]"
						/>
					) : (
						''
					)}
					{generating && <Loading />}
				</div>
				<div>
					<p className="text-[#7B2789] text-[20px]">ADD A HASHTAG</p>
					<input
						onChange={handleChange}
						name="hashtag"
						value={form.hashtag}
						type="text"
						placeholder="animal view game"
						className="w-128 h-16 rounded-2xl outline-none border-none font-['Baumans'] text-[30px] text-center text-[#855E5E] bg-[#ECE0E0] dark:bg-[#312D2D] pl-4 placeholder:text-[20px] dark:placeholder:text-black"
					/>
				</div>
				<div className="w-full flex flex-row justify-around">
					<button
						type="button"
						onClick={generateImg}
						className="w-[180px] h-[40px] text-[20px] text-[#ECE0E0] dark:text-[#313338] bg-[#AD2121] rounded-[10px]"
					>
						{generating ? 'GENERATING...' : 'GENERATE'}
					</button>
					<button
						type="submit"
						className="w-[180px] h-[40px] text-[20px] text-[#ECE0E0] dark:text-[#313338] bg-[#7B2789] rounded-[10px]"
					>
						{loading ? 'POSTING...' : 'POST'}
					</button>
				</div>
			</div>
		</form>
	);
};

export default Generate;
