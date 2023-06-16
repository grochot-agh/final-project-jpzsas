import React from 'react';

const AboutUs = () => {
	return (
		<div className="w-full md:h-[77.6vh] home-gradient flex flex-col">
			<h1 className="self-center md:text-[40px] text-[30px] text-[#ECE0E0] dark-shadow">
				About Us
			</h1>
			<p className="md:text-[22px] text-[20px] md:mx-20 mx-8 text-justify md:mb-5 mb-3">
				Welcome to ArtIfy, the ultimate AI-powered image generating and sharing
				social media app. At ArtIfy, we believe in the boundless creativity that
				arises when artificial intelligence meets the world of art. Our platform
				serves as a vibrant hub where technology and artistic expression
				seamlessly intertwine, empowering users to unleash their imagination and
				bring their artistic visions to life.
			</p>
			<div className="md:mx-10 mx-5">
				<h2 className="md:text-[20px] text-[22px] text-[#AD2121] dark-shadow">
					Passion for AI and Art
				</h2>
				<p className="text-[18px] font-['Arial'] text-justify">
					At the core of ArtIfy lies our unwavering passion for both artificial
					intelligence and art. We are driven by the remarkable potential that
					AI holds in revolutionizing the way we create, experience, and
					appreciate art. With a deep appreciation for the beauty and diversity
					of artistic forms, we are dedicated to fostering a community where
					artists, creators, and enthusiasts can connect, collaborate, and
					inspire one another.
				</p>
				<h2 className="md:text-[20px] text-[22px] text-[#7B2789] dark-shadow">
					AI-Powered Image Generation
				</h2>
				<p className="text-[18px] font-['Arial'] text-justify">
					ArtIfy's cutting-edge AI algorithms enable users to effortlessly
					generate captivating images, providing a source of inspiration and an
					endless well of creative possibilities.
				</p>
				<h2 className="md:text-[20px] text-[22px] text-[#AD2121] dark-shadow">
					Image Sharing and Community
				</h2>
				<p className="text-[18px] font-['Arial'] text-justify">
					ArtIfy goes beyond being a mere image generator; it is a thriving
					social media platform that encourages collaboration and community
					engagement. Our user-friendly interface allows you to effortlessly
					share your creations with a global audience of fellow artists and art
					enthusiasts.
				</p>
				<h2 className="md:text-[20px] text-[22px] text-[#7B2789] dark-shadow">
					Join ArtIfy
				</h2>
				<p className="text-[18px] font-['Arial'] text-justify">
					We invite you to join our vibrant community of artists, creators, and
					art lovers. Experience the exhilarating fusion of AI and art, where
					technology becomes a catalyst for unleashing your creative potential.
				</p>
			</div>
		</div>
	);
};

export default AboutUs;