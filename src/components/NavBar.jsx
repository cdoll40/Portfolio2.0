import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
	const links = [
		{
			id: 0,
			name: "skills",
		},
		{
			id: 1,
			name: "techStack",
		},
		{
			id: 2,
			name: "projects",
		},
		{
			id: 3,
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
							{link.name.replace(/([A-Z])/g, " $1")}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavBar;
