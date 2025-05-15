import React from "react";
import { Link } from "react-router-dom";

import ProjectBlogCard from "../components/ProjectBlogCard";

import { projects } from "../data/projects";

const ProjectsPage = () => {
	return (
		<div
			id="projects"
			className="text-left mt-20"
		>
			<div className="mb-10">
				<Link to="/">
					<img src="arrow.png" /> Go Back to Home Page
				</Link>
			</div>
			<h1 className="text-3xl text-center">All Projects</h1>
			<div className="grid gap-5 mt-10">
				<ProjectBlogCard project={projects.Flutters} />
				<ProjectBlogCard project={projects.Portfolio} />
			</div>
		</div>
	);
};

export default ProjectsPage;
