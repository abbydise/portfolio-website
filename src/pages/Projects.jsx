import React from "react";

import { projects } from "../data/Projects";

const Projects = () => {
	return (
		<div className="border rounded-2xl w-75 h-auto p-5 flex">
			{projects.map((project) => (
				<div key={project.name}>
					<div className="text-center text-2xl mb-5 font-semibold">
						{project.name}
					</div>
					{project.logo && (
						<img
							src={project.logo}
							className="w-15 h-15 justify-self-center mb-5"
						/>
					)}
					{project.description}
					<div className="grid grid-cols-2">
						<div className="flex gap-2 justify-start mt-5">
							{project.techStack.map((tech) => (
								<img
									src={`skills/${
										tech.category
									}/${tech.name.toLowerCase()}.svg`}
									alt={tech}
									className="w-8 h-8"
									key={tech.name}
								/>
							))}
						</div>
						<div className="flex justify-self-end gap-2 mt-5">
							{project.link && (
								<a
									href={project.link}
									target="_blank"
								>
									<img
										src="link.png"
										className="w-8 h-8"
									/>
								</a>
							)}
							{project.github && (
								<a
									href={project.github}
									target="_blank"
								>
									<img
										src="skills/tools/github.svg"
										className="w-5 h-5"
									/>
								</a>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Projects;
