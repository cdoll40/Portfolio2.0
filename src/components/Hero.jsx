import React from "react";
import heroImage from "../assets/heroImage.png";

const Hero = () => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center mb-4">
			<div className="w-1/3 flex flex-col md:mr-4 mb-4 items-center">
				<img src={heroImage} alt="hImg" className="rounded-2xl w-8/12" />
			</div>
			<div className="w-2/3">
				<h1 className="text-5xl font-bold">Cody Doll</h1>
				<p className="text-base font-bold mb-6">email</p>
				<p className="text-base mb-6 text-slate-300">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in
					aspernatur labore hic consequuntur vero, quia deleniti asperiores
					eligendi maiores
				</p>
				<p className="text-base font-bold">
					links: github linkedin download resume
				</p>
			</div>
		</div>
	);
};

export default Hero;
