import React from 'react';

const CommentsSection = ({ height }) => {
	return (
		<div
			className={`flex flex-col absolute md:top-[80px] top-[60px] left-[30px] comments-gradient dark:comments-dark-gradient w-[450px] h-[${
				height === 'trending' ? '90%' : '78%'
			}] z-10 border-l-4 border-r-4 border-[#af9595] dark:border-[#211717]`}
		>
			<div className="w-full h-full px-3 py-2">
				<p className="text-[20px] text-[#AD2121]">/login/ x days/weeks ago</p>
				<p className="text-[18px] text-[#5B5151] dark:text-[#855E5E] font-['Baumans'] mb-4">
					Some comment bla bla bla
				</p>
				<p className="text-[20px] text-[#AD2121]">/login/ x days/weeks ago</p>
				<p className="text-[18px] text-[#5B5151] dark:text-[#855E5E] font-['Baumans'] mb-4">
					Some comment bla bla bla
				</p>
				<p className="text-[20px] text-[#AD2121]">/login/ x days/weeks ago</p>
				<p className="text-[18px] text-[#5B5151] dark:text-[#855E5E] font-['Baumans'] mb-4">
					Some comment bla bla bla
				</p>
				<p className="text-[20px] text-[#AD2121]">/login/ x days/weeks ago</p>
				<p className="text-[18px] text-[#5B5151] dark:text-[#855E5E] font-['Baumans'] mb-4">
					Some comment bla bla bla
				</p>
			</div>
			<div className="absolute bottom-0 h-[150px] w-full bg-[#855E5E] dark:bg-[#291818]">
				<textarea
					className="border-none outline-none resize-none w-full h-full px-4 py-4 bg-transparent text-[#ECE0E0] dark:text-[#855E5E] placeholder:text-[#ECE0E0] dark:placeholder:text-[#855E5E]"
					placeholder="Add a comment"
				/>
			</div>
		</div>
	);
};

export default CommentsSection;
