import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	desktopImsImages,
	discordImages,
	portfolioImages,
	webImsImages,
} from "../assets/importImages";
import DialogBox from "./DialogBox";

const Projects = () => {
	const projects = [
		{
			id: 0,
			thumbnail: portfolioImages[0].src,
			gallery: portfolioImages,
			title: "Portfolio 1.0",
			link: "https://github.com/cdoll40/portfolio",
			content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
		{
			id: 1,
			thumbnail: discordImages[0].src,
			gallery: discordImages,
			title: "Discord Bot",
			link: "https://github.com/cdoll40/JS-Discord-Bot",
			content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
		{
			id: 2,
			thumbnail: desktopImsImages[0].src,
			gallery: desktopImsImages,
			title: "Inventory Management System Desktop App",
			link: "https://github.com/cdoll40/WPF_InventoryManagementSystem",
			content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
		{
			id: 3,
			thumbnail: webImsImages[0].src,
			gallery: webImsImages,
			title: "Inventory Management System Web App",
			link: "https://github.com/cdoll40/Inventory-Management-System",
			content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
	];

	const [selectedProject, setSelectedProject] = useState(null);

	const handleProjectClick = (project) => {
		setSelectedProject(project);
	};

	return (
		<div
			name="projects"
			className="pt-4 pb-8 mx-auto flex flex-col justify-center"
		>
			<h1 className="text-3xl font-bold">Projects</h1>
			<p className="text-slate-300 text-lg mt-1">
				Some of my current and previous projects.
			</p>
			<p className="text-slate-300 text-lg mb-2">Click for more info.</p>

			<div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 px-12 sm:px-0 m-4">
				{projects.map((project) => (
					<div
						key={project.id}
						onClick={() => handleProjectClick(project)}
						className="flex flex-col border-solid border border-slate-700 rounded-md p-2 duration-200 hover:scale-105"
					>
						<div className="relative h-40">
							<img
								src={project.thumbnail}
								alt=""
								className="absolute h-full w-full object-fill rounded-md"
							/>
						</div>
						<p className="py-2 flex-grow text-slate-300">{project.title}</p>
						<div className="flex items-center justify-center mt-1">
							<div className="m-2 w-1/2 justify-center text-center border-solid border border-slate-700 rounded-md text-slate-300">
								<Link
									to={project.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<button
										onClick={(e) => e.stopPropagation()}
										className="p-2 duration-200 hover:scale-105"
									>
										See on GitHub
									</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>

			{selectedProject && (
				<div
					className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-40"
					onClick={() => setSelectedProject(null)}
				>
					<DialogBox
						project={selectedProject}
						onClose={() => setSelectedProject(null)}
					/>
				</div>
			)}
		</div>
	);
};

export default Projects;
