import "./App.css";
import React from "react";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectCard from "./components/ProjectCard";

import { BrowserRouter, Link } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div>
				<nav className="flex flex-wrap gap-4 float-right">
					<Link to="#education">Education</Link>
					<Link to="#experience">Experience</Link>
					<Link to="#skills">Skills</Link>
					<Link to="#projects">Projects</Link>
					<Link to="#contact">Contact Me!</Link>
				</nav>
			</div>
			<div
				class="about-me"
				className="mt-50 text-left"
			>
				<img
					src="selfie.JPG"
					className="h-100 w-55 float-left"
				/>
				<h1 className="text-4xl mb-10 text-center">About Me!</h1>
				<p className="mb-10 ml-75">
					Hi! My name is Abby Dise. I am a third year student at
					Drexel University working towards a Bachelor of Science
					in Computer Science with a minor in Computer
					Engineering. I also have an Associate's Degree in
					Computer Information Systems.
				</p>
				<p className="mb-10 ml-75">
					I have experience in Python, HTML & CSS, Java, and many
					more languages and technologies.
				</p>
				<p className="ml-75">
					I am currently looking for internships that last from
					April - September as a part of my university's co-op
					program. I am open to any tech position as I want a
					well-rounded co-op experience over my 3 co-ops.
				</p>
			</div>
			<div
				class="education"
				className="text-left mt-75"
			>
				<h1 className="text-4xl">Education</h1>
			</div>
		</BrowserRouter>
	);
}

export default App;
