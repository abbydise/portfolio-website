import React from "react";

import NavBar from "../components/NavBar";
import ResumeButton from "../components/ResumeButton";
import Footer from "../components/Footer";

import AboutMe from "../sections/AboutMe";
import Education from "../sections/Education";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";

const HomePage = () => {
	return (
		<div>
			<NavBar />
			<AboutMe />
			<Education />
			<Experience />
			<ResumeButton />
			<Skills />
			<Projects />
			<Footer />
		</div>
	);
};

export default HomePage;
