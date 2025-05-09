import React from "react";

import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
	return (
		<div
			id="projects"
			className="text-left mt-20"
		>
			<h1 className="text-3xl">Recent Projects</h1>
			<div className="grid grid-cols-3 gap-10 mt-5">
				<ProjectCard project={projects.Flutters} />
				<ProjectCard project={projects.Portfolio} />
			</div>
		</div>
	);
};

export default Projects;
