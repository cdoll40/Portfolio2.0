import React, { useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function ImageDialogBox({ image, onClose }) {
	const imageDialogRef = useRef(null);

	return (
		<div
			onClick={(e) => e.stopPropagation()}
			className={`fixed inset-0 flex items-center justify-center z-40 max-w-screen-lg max-h-fit m-auto`}
		>
			<div ref={imageDialogRef} className="m-2 rounded-md">
				<img src={image} alt="Image" className="w-auto h-auto rounded-md" />
			</div>
		</div>
	);
}
