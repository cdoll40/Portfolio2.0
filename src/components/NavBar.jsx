import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
	const links = [
		{
			id: 1,
			name: "skills",
		},
		{
			id: 2,
			name: "techStack",
		},
		{
			id: 3,
			name: "projects",
		},
		{
			id: 4,
			name: "experience",
		},
		{
			id: 5,
			name: "workHistory",
		},
	];

	return (
		<div className="flex items-center mb-4 justify-center">
			<ul className="flex">
				{links.map((link) => (
					<li
						key={link.id}
						className="md:px-6 sm:px-5 px-4 pt-4 cursor-pointer capitalize text-lg text-slate-400 hover:scale-105 duration-200"
					>
						<Link to={link.name} smooth duration={500}>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavBar;
