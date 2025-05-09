import React from "react";

const ProjectCard = ({ project }) => {
	return (
		<div className="border rounded-lg p-5">
			<h1 className="text-2xl underline">{project.title}</h1>
			<p className="mt-5">{project.description}</p>
			<p className="mt-5 flex gap-1">
				{project.technologies.map((item, index) => (
					<p id={index}>{item}</p>
				))}
			</p>
			<div clasName="flex">
				{project.github && (
					<div className="flex float-left">
						<img
							src="github.svg"
							className="w-8 h-8 float-left pr-2"
						/>
						<a
							href={project.github}
							target="_blank"
						>
							GitHub
						</a>
					</div>
				)}
				{project.website && (
					<div className="flex">
						<img
							src="link.png"
							className="w-5 h-5 float-left"
						/>
						<a
							href={project.website}
							target="_blank"
						>
							Live Demo
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
