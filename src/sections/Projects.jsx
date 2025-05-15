import React from "react";

import { Link } from "react-router-dom";

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
			<div className="mt-10 flex justify-center">
				<Link
					to="/projects"
					className="border p-2 rounded-2xl"
				>
					View all my Projects Here
				</Link>
			</div>
		</div>
	);
};

export default Projects;
