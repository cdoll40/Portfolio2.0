import React from "react";
import { Link } from "react-router-dom";
import ManagerHome from "../assets/projects/ManagerHome.PNG";
import DiscordBot from "../assets/projects/DiscordBot.PNG";
import Portfolio from "../assets/projects/Portfolio.PNG";

const Projects = () => {
	const projects = [
		{
			id: 0,
			src: Portfolio,
			title: "Portfolio 1.0",
			link: "https://github.com/cdoll40/portfolio",
		},
		{
			id: 1,
			src: DiscordBot,
			title: "Discord Bot",
			link: "https://github.com/cdoll40/Jesco",
		},
		{
			id: 2,
			src: ManagerHome,
			title: "Inventory Management System Web App",
			link: "https://github.com/cdoll40/Inventory-Management-System",
		},
		{
			id: 3,
			src: Portfolio,
			title: "Inventory Management System Desktop App",
			link: "https://github.com/cdoll40/portfolio",
		},
	];

	return (
		<div
			name="projects"
			className="pt-4 pb-8 mx-auto flex flex-col justify-center"
		>
			<h1 className="text-3xl font-bold">Projects</h1>
			<p className="text-slate-300 text-lg mt-1 mb-2">
				Some of my current and previous projects.
			</p>

			<div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 px-12 sm:px-0 m-4">
				{projects.map(({ id, src, title, link }) => (
					<div
						key={id}
						className="flex flex-col border-solid border border-slate-700 rounded-md p-2"
					>
						<img src={src} alt="" className=" h-36 rounded-md" />
						<p className="pt-2 flex-grow text-slate-300">{title}</p>
						<div className="flex items-center justify-center mt-1">
							<button className="m-2 p-2 w-1/3 duration-200 hover:scale-105 border-solid border border-slate-700 rounded-md text-slate-300">
								More Info
							</button>
							<div className="m-2 w-1/3 justify-center text-center border-solid border border-slate-700 rounded-md text-slate-300">
								<Link to={link} target="_blank" rel="noopener noreferrer">
									<button className="p-2 duration-200 hover:scale-105">
										Repo
									</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
