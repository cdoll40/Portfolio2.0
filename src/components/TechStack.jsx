import React from "react";

const TechStack = () => {
	return (
		<div name="techStack" className="pt-4 pb-8">
			<h1 className="text-2xl font-bold">Tech Stacks</h1>
			<div className="flex flex-wrap items-center m-2 justify-left">
				<div className="m-2 border-solid border border-slate-700 rounded-md p-2 text-slate-300 text-center">
					React, Nodejs, Expressjs, MySQL
				</div>
				<div className="m-2 border-solid border border-slate-700 rounded-md p-2 text-slate-300 text-center">
					Nextjs, Nodejs, Expressjs, MongoDB
				</div>
				<div className="m-2 border-solid border border-slate-700 rounded-md p-2 text-slate-300 text-center">
					MERN Stack
				</div>
				<div className="m-2 border-solid border border-slate-700 rounded-md p-2 text-slate-300 text-center">
					.NET Framework, MySQL
				</div>
				<div className="m-2 border-solid border border-slate-700 rounded-md p-2 text-slate-300 text-center">
					Vite, React, TailwindCSS
				</div>
			</div>
		</div>
	);
};

export default TechStack;
