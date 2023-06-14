import React from 'react';

const Gallery = () => {
	return (
		<div class="flex flex-col justify-center items-center">
			<h1 className="text-[40px] text-[#855E5E]">EXPLORE THE GALLERY</h1>
			<div class="grid grid-cols-4 grid-rows-2 gap-2 w-[1260px] h-[380px]">
				<div class=" row-span-2 gallery-pane"></div>
				<div class="gallery-pane row-span-2 col-span-2"></div>
				<div class="gallery-pane "></div>
				<div class="gallery-pane "></div>
			</div>
		</div>
	);
};

export default Gallery;
