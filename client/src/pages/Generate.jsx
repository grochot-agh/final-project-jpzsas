import React from 'react';
const CreateImagePage = () => {
	return (
		<div className="home-gradient h-[77.5vh] flex items-center z-0 flex-col">
			<div className="flex flex-col w-full px-5">
				<label className="text-[30px] text-[#855E5E]">
					Enter a detailed prompt
				</label>
				<textarea className="w-[1500px] h-[60px] bg-[#ECE0E0] rounded-[15px] outline-none border-none text-[15px] resize-nones font-['Arial'] p-2" />
			</div>
			<div className="flex flex-row justify-between w-full overflow-hidden h-ful px-40 py-5">
				<div className="w-[800px] h-[400px] bg-[#ECE0E0] self-end rounded-[10px]" />
				<div className="flex flex-col h-full w-[350px]">
					<p className="text-[20px] text-[#7B2789] mb-2">
						You don’t have any idea? Try this:
					</p>
					<button className="bg-[#7B2789] text-[#ECE0E0] w-[220px] h-[60px] rounded-[10px]">
						CLICK ON ME!
					</button>
					<button className="self-end mt-[230px] w-[150px] h-[60px] text-[#ECE0E0] bg-[#AD2121] rounded-[10px]">
						REGENERATE
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreateImagePage;
