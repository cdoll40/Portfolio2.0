import React from "react";

const Skills = () => {
	return (
		<div name="skills" className="pt-4 pb-8">
			<div className="pb-4">
				<h1 className="text-3xl font-bold">Skills / Qualifications</h1>
			</div>
			<div className="flex justify-left px-6 text-lg">
				<ul className="text-slate-300">
					<li>
						University of Southern Mississippi, Bachelor of Science in Computer
						Science, GPA: 3.72
					</li>
					<li className="pt-1">
						Languages: HTML, CSS, JavaScript, TypeScript, C#
					</li>
					<li className="pt-1">Frameworks: Next.js Express.js, .NET</li>
					<li className="pt-1">Libraries: React.js, Axios</li>
				</ul>
			</div>
		</div>
	);
};

export default Skills;
