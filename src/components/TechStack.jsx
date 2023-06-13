import React from "react";

const TechStack = () => {
	const stacks = [
		{
			id: 0,
			stack: "React, Nodejs, Expressjs, MySQL",
		},
		{
			id: 1,
			stack: "Nextjs, Nodejs, Expressjs, MongoDB",
		},
		{
			id: 2,
			stack: "MERN Stack",
		},
		{
			id: 3,
			stack: ".NET Framework, MySQL",
		},
		{
			id: 4,
			stack: "Vite, React, TailwindCSS",
		},
	];

	return (
		<div name="techStack" className="pt-4 pb-8">
			<h1 className="text-3xl font-bold">Tech Stacks</h1>
			<div className="flex flex-wrap items-center m-2 justify-left text-lg">
				{stacks.map((stack) => (
					<div
						key={stack.id}
						className="m-2 border-solid border border-slate-700 rounded-md p-2 text-slate-300 text-center"
					>
						{stack.stack}
					</div>
				))}
			</div>
		</div>
	);
};

export default TechStack;
