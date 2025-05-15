import React from "react";

const ProjectBlogCard = ({ project }) => {
	// TODO: figure out the styling of it
	return (
		<div className="border rounded-lg p-5 relative">
			<h1 className="text-2xl underline">{project.title}</h1>
			<p className="mt-5 mb-5">{project.long_description}</p>
			<div className="mt-5 flex gap-1 mb-10">
				{project.technologies.map((item, index) => (
					<p id={index}>{item}</p>
				))}
			</div>
			<div className="flex absolute right-0 bottom-0 m-5">
				{project.github && (
					<div className="float-left">
						<img
							src="github.svg"
							className="w-6 h-6 float-left mr-2"
						/>
						<a
							href={project.github}
							target="_blank"
							className="mr-2"
						>
							GitHub
						</a>
					</div>
				)}
				{project.website && (
					<div>
						<img
							src="link.png"
							className="w-5 h-5 float-left"
						/>
						<a
							href={project.website}
							target="_blank"
							className="ml-1"
						>
							Live Demo
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectBlogCard;
