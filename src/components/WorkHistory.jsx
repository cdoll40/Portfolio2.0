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
			<div className="mb-10 px-12">
				<h2 className="text-xl font-bold mt-1 mb-2">
					Comercial Floor Installation/Demolition
				</h2>
				<div className="text-slate-300 text-lg">
					<p className="mt-1 mb-2">1/2018 - 8/2022</p>
					<p>
						Description: Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Rerum, sit vero. Repudiandae fugit, ad repellendus at ipsum
						eius expedita libero cupiditate. Dolores ullam molestiae similique
						quis necessitatibus in quae autem.
					</p>
					<ul className="list-disc pl-12 pt-4">
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
					</ul>
				</div>
			</div>
		</div>
	);
};

export default WorkHistory;
