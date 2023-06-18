import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import ImageDialogBox from "./ImageDialogBox";

export default function DialogBox({ onClose, project }) {
	const [open, setOpen] = useState(true);
	const [read, setRead] = useState(null);
	const [selectedImage, setSelectedImage] = useState(null);

	const dialogRef = useRef(null);

	const [loading, setLoading] = useState(true);

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
			} finally {
				setLoading(false); // Set loading to false when the fetch is completed (success or error)
			}
		};

		fetchData();
	}, []);

	const handleClose = () => {
		setOpen(false);
		onClose();
	};

	const handleImageClick = (image) => {
		setSelectedImage(image);
	};

	return (
		<div
			onClick={(e) => e.stopPropagation()}
			className={`fixed inset-0 flex items-center justify-center z-40 max-w-screen-lg max-h-fit m-auto ${
				open ? "visible" : "invisible"
			}`}
		>
			<div ref={dialogRef} className="bg-[#303030] w-full m-2 rounded-md">
				{loading && (
					<div className="w-full h-1 bg-gray-300">
						<div
							style={{ width: "100%" }}
							className="h-full bg-blue-500 animate-loading-bar"
						></div>
					</div>
				)}

				<div className="flex justify-between items-center px-4 pt-4 pb-2">
					<h2 className="text-xl font-bold">{project.title}</h2>
					<button onClick={handleClose}>
						<AiOutlineClose size={24} className="text-slate-200" />
					</button>
				</div>

				<div className="border-t border-slate-500" />

				<div>
					{!loading && (
						<div className="overflow-y-auto p-4 max-h-[32rem]">
							<div className="grid grid-cols-4 gap-4">
								{project.gallery.map((image) => (
									<div
										key={image.id}
										className="relative h-32 duration-200 hover:scale-105"
										onClick={() => handleImageClick(image.src)}
									>
										<img
											src={image.src}
											alt="Image"
											className="absolute h-full w-full object-fill rounded-md"
										/>
									</div>
								))}
							</div>

							<div
								dangerouslySetInnerHTML={{ __html: read }}
								className="pt-4"
							/>
							{/* <p>{read}</p> */}
						</div>
					)}
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

			{selectedImage && (
				<div
					onClick={() => setSelectedImage(null)}
					className="fixed top-0 left-0 right-0 bottom-0 items-center justify-center bg-black bg-opacity-50 z-50"
				>
					<ImageDialogBox image={selectedImage} />
				</div>
			)}
		</div>
	);
}
