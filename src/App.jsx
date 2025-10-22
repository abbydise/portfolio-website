import "./App.css";

import { useState } from "react";

import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from "@material-tailwind/react";

import ContactCard from "./components/ContactCard";

import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
	const [tab, setTab] = useState("about");

	return (
		<div>
			<div className="flex">
				<div className="shrink-0 sticky self-start top-0">
					<ContactCard />
				</div>
				<div className="content w-300 shrink-0">
					<div className="tabs">
						<Tabs
							value={tab}
							onChange={(value) => setTab(value)}
						>
							<div className="flex justify-end mb-5 mt-10 items-center">
								<TabsHeader className="gap-5">
									<Tab value="about">About</Tab>
									{/* <Tab value="resume">Resume</Tab> */}
									<Tab value="projects">
										Projects
									</Tab>
									<Tab value="contact">Contact</Tab>
								</TabsHeader>
								<div className="ml-5">
									<a
										href="Dise, Abigail.pdf"
										download={true}
									>
										<img
											src="download.png"
											className="w-6 h-6"
										/>
									</a>
								</div>
							</div>
							<div className="border rounded-2xl p-5">
								<TabsBody>
									<TabPanel value="about">
										<About />
									</TabPanel>
									{/* <TabPanel value="resume">
										<Resume />
									</TabPanel> */}
									<TabPanel value="projects">
										<Projects />
									</TabPanel>
									<TabPanel value="contact">
										<Contact />
									</TabPanel>
								</TabsBody>
							</div>
						</Tabs>
					</div>
				</div>
			</div>
			<footer className="text-center w-full bg-[var(--accent-color)] mt-10">
				<p>
					&copy; {new Date().getFullYear()} Abigail Dise. All
					Rights Reserved.
				</p>
			</footer>
		</div>
	);
}

export default App;
