import React from "react";

const ProjectCard = ({ project }) => {
	return (
		<div>
			<h1>{project.title}</h1>
			<p>{project.description}</p>
			<p>{project.technologies}</p>
		</div>
	);
};

export default ProjectCard;
