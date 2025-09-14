import React from "react";
import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from "@material-tailwind/react";

import { databases, frameworks, languages, os, tools } from "../data/Skills";

const Skills = () => {
	return (
		<div className="skills">
			<Tabs className="justify-self-center">
				<TabsHeader className=" gap-5 justify-self-center border-b-4 text-center">
					<Tab value="techstack">Tech Stack</Tab>
					<Tab value="tools">Tools</Tab>
				</TabsHeader>
				<TabsBody className="bg-gray-200 rounded-2xl">
					<TabPanel
						value="techstack"
						className="grid grid-cols-3"
					>
						{databases.map(({ name, icon }) => (
							<div
								key={name}
								className="border-4 border-black p-5 m-2 text-center rounded-2xl"
							>
								<img
									src={icon}
									className="w-10 h-10 justify-self-center"
								/>
								{name}
							</div>
						))}
						{languages.map(({ name, icon }) => (
							<div
								key={name}
								className="border-4 border-black p-5 m-2 text-center rounded-2xl"
							>
								<img
									src={icon}
									className="w-10 h-10 justify-self-center"
								/>
								{name}
							</div>
						))}
						{frameworks.map(({ name, icon }) => (
							<div
								key={name}
								className="border-4 border-black p-5 m-2 text-center rounded-2xl"
							>
								<img
									src={icon}
									className="w-10 h-10 justify-self-center"
								/>
								{name}
							</div>
						))}
					</TabPanel>
					<TabPanel
						value="tools"
						className="grid grid-cols-3"
					>
						{os.map(({ name, icon }) => (
							<div
								key={name}
								className="border-4 border-black p-5 m-2 text-center rounded-2xl"
							>
								<img
									src={icon}
									className="w-10 h-10 justify-self-center"
								/>
								{name}
							</div>
						))}
						{tools.map(({ name, icon }) => (
							<div
								key={name}
								className="border-4 border-black p-5 m-2 text-center rounded-2xl"
							>
								<img
									src={icon}
									className="w-10 h-10 justify-self-center"
								/>
								{name}
							</div>
						))}
					</TabPanel>
				</TabsBody>
			</Tabs>
		</div>
	);
};

export default Skills;
