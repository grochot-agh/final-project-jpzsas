import React from 'react';

const HamburgerOpened = ({ onClick }) => {
	return (
		<div onClick={onClick} className="md:hidden flex cursor-pointer">
			<div className="w-[45px] h-[6px] rounded-[5px] bg-[#d0b6b6] transform origin-center rotate-45 translate-x-7" />
			<div className="w-[45px] h-[6px] rounded-[5px] bg-[#d0b6b6] transform -rotate-45 origin-center -translate-x-4" />
		</div>
	);
};

export default HamburgerOpened;
