import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Skills from "../components/Skills";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import WorkHistory from "../components/WorkHistory";

const HomeScreen = () => {
	return (
		<div className="max-w-screen-md mx-auto pt-10 px-4 bg-transparent">
			<Hero />
			<div className="divide-y divide-solid divide-slate-700">
				<NavBar />
				<Skills />
			</div>
			<TechStack />
			<Projects />
			<WorkHistory />
		</div>
	);
};

export default HomeScreen;
