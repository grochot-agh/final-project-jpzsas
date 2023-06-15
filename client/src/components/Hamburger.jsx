import React from 'react';

const Hamburger = ({ onClick }) => {
	return (
		<>
			<div
				onClick={onClick}
				className="sm:hidden mr-4  flex flex-col items-center justify-center cursor-pointer"
			>
				<div className="w-[45px] h-[6px] rounded-[5px] bg-[#855E5E] mb-1.5" />
				<div className="w-[45px] h-[6px] rounded-[5px] bg-[#855E5E] mb-1.5" />
				<div className="w-[45px] h-[6px] rounded-[5px] bg-[#855E5E]" />
			</div>
		</>
	);
};

export default Hamburger;
