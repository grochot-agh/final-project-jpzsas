import React from 'react';

const Gallery = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="sm:text-[40px] text-[30px] text-[#855E5E]">
				EXPLORE THE GALLERY
			</h1>
			<div className="sm:grid hidden grid-cols-4 grid-rows-2 gap-2 w-[1260px] h-[380px]">
				<div className=" row-span-2 gallery-pane"></div>
				<div className="gallery-pane row-span-2 col-span-2"></div>
				<div className="gallery-pane "></div>
				<div className="gallery-pane "></div>
			</div>
			<div className="sm:hidden flex flex-row items-center justify-around w-[500px]">
				<h1 className="text-[30px] font-normal text-[#AD2121] cursor-pointer">{`<`}</h1>
				<div className="gallery-pane w-[350px] h-[350px] mt-10" />
				<h1 className="text-[30px] font-normal text-[#7B2789] cursor-pointer">{`>`}</h1>
			</div>
		</div>
	);
};

export default Gallery;
