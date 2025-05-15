import React from "react";
import ProjectBlogCard from "../components/ProjectBlogCard";

import { projects } from "../data/projects";

const ProjectsPage = () => {
	return (
		<div
			id="projects"
			className="text-left mt-20"
		>
			<h1 className="text-3xl">All Projects</h1>
			<div className="grid gap-5 mt-10">
				<ProjectBlogCard project={projects.Flutters} />
				<ProjectBlogCard project={projects.Portfolio} />
			</div>
		</div>
	);
};

export default ProjectsPage;
