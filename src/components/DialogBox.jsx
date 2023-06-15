import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export default function DialogBox({ onClose, project }) {
	const [open, setOpen] = useState(true);
	const [read, setRead] = useState(null);

	const dialogRef = useRef(null);

	const url = `${project.link}/blob/master/README.md`
		.replace("/blob", "")
		.replace("github", "raw.githubusercontent");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				if (response.ok) {
					const text = await response.text();
					const formattedText = text.replace(
						/(?:\r\n|\r|\n){2}/g,
						"<br /><br />"
					);
					setRead(formattedText);
				} else {
					console.error(
						"Error fetching data. Response status: ",
						response.status
					);
					setRead("No README available.");
				}
			} catch (error) {
				console.error("Error fetching data:", error);
				setRead("No README available.");
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (dialogRef.current && !dialogRef.current.contains(event.target)) {
				handleClose();
			}
		};

		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	const handleClose = () => {
		setOpen(false);
		onClose();
	};

	return (
		<div
			className={`fixed inset-0 flex items-center justify-center z-50 max-w-screen-lg mx-auto ${
				open ? "visible" : "invisible"
			}`}
		>
			<div ref={dialogRef} className="bg-[#303030] w-full mx-2 rounded-md">
				<div className="flex justify-between items-center px-4 pt-4 pb-2">
					<h2 className="text-xl font-bold">{project.title}</h2>
					<button onClick={handleClose}>
						<AiOutlineClose size={24} className="text-slate-200" />
					</button>
				</div>
				<div className="border-t border-slate-500" />
				<div className="overflow-y-auto max-h-[32rem] p-4">
					<div className="grid grid-cols-4 gap-4">
						{project.gallery.map((image) => (
							<div key={project.id} className="relative h-32">
								<img
									src={image}
									alt="Image 1"
									className="absolute h-full w-full object-fill rounded-md"
								/>
							</div>
						))}
					</div>

					<div dangerouslySetInnerHTML={{ __html: read }} className="pt-4" />
					{/* <p>{read}</p> */}
				</div>
				<div className="m-4 w-1/5 float-right justify-center text-center border-solid border border-slate-500 rounded-md text-slate-200">
					<Link to={project.link} target="_blank" rel="noopener noreferrer">
						<button className="p-2 duration-200 hover:scale-105">
							See on GitHub
						</button>
					</Link>
				</div>
				<div className="border-t border-slate-500" />
			</div>
		</div>
	);
}
