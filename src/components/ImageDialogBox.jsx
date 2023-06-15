import React, { useState, useEffect, useRef } from "react";

export default function ImageDialogBox({ onImageClose, image }) {
	const imageDialogRef = useRef(null);
	const [imageDialogOpen, setImageDialogOpen] = useState(true);

	// useEffect(() => {
	// 	const handleOutsideImageClick = (event) => {
	// 		if (
	// 			imageDialogRef.current &&
	// 			!imageDialogRef.current.contains(event.target)
	// 		) {
	// 			handleImageClose();
	// 		}
	// 	};

	// 	document.addEventListener("mousedown", handleOutsideImageClick);

	// 	return () => {
	// 		document.removeEventListener("mousedown", handleOutsideImageClick);
	// 	};
	// }, []);

	const handleImageClose = () => {
		setImageDialogOpen(false);
		onImageClose();
	};

	return (
		<div
			onClick={(e) => e.stopPropagation()}
			// className={`fixed inset-0 flex items-center justify-center z-50 max-w-screen-lg mx-auto ${
			className={`fixed inset-0 flex items-center justify-center z-40 max-w-screen-lg max-h-fit m-auto border-4 border-solid border-red-950
				imageDialogOpen ? "visible" : "invisible"
			}`}
		>
			<div ref={imageDialogRef} className="m-2 rounded-md">
				<img src={image} alt="Image" className="w-auto h-auto rounded-md" />
			</div>
		</div>
	);
}
