import React from "react";

const WorkHistory = () => {
	return (
		<div
			name="workHistory"
			className="pt-4 pb-8 mx-auto flex flex-col justify-center"
		>
			<div className="pb-4">
				<h1 className="text-3xl font-bold">Work History</h1>
			</div>
			<div className="mb-10 px-8">
				<h2 className="text-xl font-bold mt-1 mb-2">
					Comercial Floor Installation | Jesco Flooring | Taylorsville, MS
				</h2>
				<p className="mt-1 mb-2 text-lg">August 2017 - December 2022</p>
				<div className="text-slate-300 text-lg">
					<p>
						I was part of a skilled crew dedicated to removing and installing
						various types of flooring in commercial settings such as, offices,
						schools, and hospitals. We worked collaboratively to ensure precise
						measurements, proper surface preparation, and efficient installation
						techniques. Our goal was to deliver high-quality results that met
						the functional and aesthetic requirements of each commercial space.
					</p>
					{/* <ul className="list-disc pl-12 pt-4">
						<li className="mb-1">
							Rerum, sit vero. Repudiandae fugit, ad repellendus at ipsum eius
							expedita
						</li>
						<li className="mb-1">
							Rerum, sit vero. Repudiandae fugit, ad repellendus at ipsum eius
							expedita
						</li>
						<li className="mb-1">
							Rerum, sit vero. Repudiandae fugit, ad repellendus at ipsum eius
							expedita
						</li>
					</ul> */}
				</div>
			</div>
		</div>
	);
};

export default WorkHistory;
