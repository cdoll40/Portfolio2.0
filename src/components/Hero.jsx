import React from "react";
import heroImage from "../assets/heroImage.png";

const Hero = () => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center mb-4">
			<div className="w-1/3 flex flex-col md:mr-4 mb-4 items-center">
				<img src={heroImage} alt="hImg" className="rounded-2xl w-8/12" />
			</div>
			<div className="w-2/3">
				<h1 className="text-5xl font-bold mb-2">Cody Doll</h1>
				<p className="text-lg text-slate-300 mr-8">cdoll831@gmail.com</p>
				<div className="flex mb-6">
					<p className="text-lg font-bold">My Links:</p>
					<div className="flex divide-x divide-solid divide-slate-700">
						<p className="text-lg text-slate-300 px-8">LinkedIn</p>
						<p className="text-lg text-slate-300 px-8">GitHub</p>
						<p className="text-lg text-slate-300 px-8">Resume</p>
					</div>
				</div>
				<p className="text-lg mb-6 text-slate-300">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in
					aspernatur labore hic consequuntur vero, quia deleniti asperiores
					eligendi maiores
				</p>
			</div>
		</div>
	);
};

export default Hero;
