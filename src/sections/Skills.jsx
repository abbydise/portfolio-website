import React from "react";

const Skills = () => {
	// TODO: add a tooltip to each icon
	// TODO: figure out how to dynamically have them aligned
	// TODO: figure out the responsiveness of the squares for smaller screens
	return (
		<div
			id="skills"
			className="text-left mt-25"
		>
			<h1 className="text-3xl">Skills</h1>
			<div
				id="skills-boxes"
				className="grid grid-cols-3 gap-10"
			>
				<div
					id="languages"
					className="border rounded-2xl mt-10"
				>
					<h4 className="text-xl text-center">Languages</h4>
					<div className="grid grid-cols-3 ml-10 mt-5 mb-5 gap-10">
						<img
							src="python.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="html.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="css.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="java.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="js.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="ts.svg"
							className="w-[51px] h-[51px]"
						/>
					</div>
				</div>
				<div
					id="databases"
					className="border rounded-2xl mt-10"
				>
					<h4 className="text-xl text-center">Databases</h4>
					<div className="grid grid-cols-4 ml-8 mt-15 mb-5">
						<img
							src="mysql.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="postgresql.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="mongodb.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="mongoose.svg"
							className="w-[51px] h-[51px]"
						/>
					</div>
				</div>
				<div
					id="frameworks"
					className="border rounded-2xl mt-10"
				>
					<h4 className="text-xl text-center">Full Stack Dev</h4>
					<div className="grid grid-cols-3 ml-10 mt-5 mb-5 gap-10">
						<img
							src="react.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="svelte.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="tailwind.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="jsexpress.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="nodejs.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="spring.svg"
							className="w-[51px] h-[51px]"
						/>
					</div>
				</div>
				<div
					id="dev-tools"
					className="border rounded-2xl"
				>
					<h4 className="text-xl text-center">
						Developer Tools
					</h4>
					<div className="grid grid-cols-3 ml-10 mt-5 mb-5 gap-10">
						<img
							src="bash.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="docker.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="figma.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="git.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="vscode.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="postman.svg"
							className="w-[51px] h-[51px]"
						/>
					</div>
				</div>
				<div
					id="productivity"
					className="border rounded-2xl"
				>
					<h4 className="text-xl text-center">
						Productivity Tools
					</h4>
					<div className="grid grid-cols-3 ml-10 mt-5 mb-5 gap-10">
						<img
							src="word.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="excel.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="powerpoint.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="access.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="confluence.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="jira.svg"
							className="w-[51px] h-[51px]"
						/>
					</div>
				</div>
				<div
					id="os"
					className="border rounded-2xl"
				>
					<h4 className="text-xl text-center">
						Operating Systems
					</h4>
					<div className="grid grid-cols-2 mt-15 ml-22">
						<img
							src="macos.svg"
							className="w-[51px] h-[51px]"
						/>
						<img
							src="windows.svg"
							className="w-[51px] h-[51px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
