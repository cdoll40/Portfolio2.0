import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Skills from "../components/Skills";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import WorkHistory from "../components/WorkHistory";

const HomeScreen = () => {
	return (
		<div className="max-w-screen-sm mx-auto mt-20">
			<Hero />
			{/* <div className="divide-y divide-solid divide-slate-600"> */}
			<NavBar />
			<Skills />
			<TechStack />
			<Projects />
			<WorkHistory />
			{/* </div> */}
		</div>
	);
};

export default HomeScreen;
