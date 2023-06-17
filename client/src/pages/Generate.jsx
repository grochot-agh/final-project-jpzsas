import React, { useState } from 'react';
import { getRandomPrompt } from '../utils';
import { Loading } from '../components';
const Generate = () => {
	const [generating, setGenerating] = useState(false);
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		prompt: '',
		image: '',
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleRandom = () => {
		const rndPrompt = getRandomPrompt(form.prompt);
		setForm({ ...form, prompt: rndPrompt });
	};

	return (
		<div className="home-gradient md:h-[77.5vh] h-[80.1vh] flex items-center z-0 flex-col">
			<div className="flex flex-col w-full px-5">
				<label className="text-[30px] text-[#855E5E] md:self-auto self-center">
					Enter a detailed prompt
				</label>
				<input
					type="text"
					value={form.prompt}
					className="md:w-[1500px] md:h-[60px] w-[450px] bg-[#ECE0E0] dark:bg-[#313338] rounded-[15px] outline-none border-none text-[15px] font-['Arial'] p-2 self-center"
				/>
			</div>
			<div className="md:flex hidden flex-row justify-between w-full overflow-hidden h-full px-40 py-5">
				<div className="w-[800px] h-[400px] bg-[#ECE0E0] dark:bg-[#313338] self-end rounded-[10px] flex justify-center items-center">
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
				<div className="flex flex-col h-full w-[350px]">
					<p className="text-[20px] text-[#7B2789] mb-2">
						You don’t have any idea? Try this:
					</p>
					<button
						onClick={handleRandom}
						className="bg-[#7B2789] text-[#ECE0E0] dark:text-[#313338] w-[220px] h-[60px] rounded-[10px]"
					>
						CLICK ON ME!
					</button>
					<button className="self-end mt-[230px] w-[150px] h-[60px] text-[#ECE0E0] dark:text-[#313338] bg-[#AD2121] rounded-[10px]">
						{generating ? 'GENERATING...' : 'GENERATE'}
					</button>
				</div>
			</div>

			<div className="md:hidden flex flex-col items-center justify-around h-full">
				<p className="text-[20px] text-[#7B2789]">
					You don’t have any idea? Try this:
				</p>
				<button
					onClick={handleRandom}
					className="w-[400px] h-[40px] text-[20px] text-[#ECE0E0] dark:text-[#313338] bg-[#7B2789] rounded-[10px]"
				>
					CLICK ON ME!
				</button>
				<div className="w-[400px] h-[250px] bg-[#ECE0E0] dark:bg-[#313338] rounded-[10px]" />
				<button className="w-[400px] h-[40px] text-[20px] text-[#ECE0E0] dark:text-[#313338] bg-[#AD2121] rounded-[10px]">
					{generating ? 'GENERATING...' : 'GENERATE'}
				</button>
			</div>
		</div>
	);
};

export default Generate;
