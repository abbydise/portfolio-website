import "./App.css";
import React from "react";

import ProjectsPage from "./pages/ProjectsPage";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";

import { Link } from "react-scroll";

import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineOppositeContent,
	timelineOppositeContentClasses,
} from "@mui/lab";

function App() {
	return (
		<div>
			<div className="float-right mt-[-150px]">
				<nav className="flex flex-wrap gap-5">
					<Link
						to="education"
						smooth={true}
						duration={500}
					>
						Education
					</Link>
					<Link
						to="experience"
						smooth={true}
						duration={500}
					>
						Experience
					</Link>
					<Link
						to="skills"
						smooth={true}
						duration={500}
					>
						Skills
					</Link>
					<Link
						to="projects"
						smooth={true}
						duration={500}
					>
						Projects
					</Link>
					<Link
						to="contact"
						smooth={true}
						duration={500}
					>
						Contact Me!
					</Link>
				</nav>
			</div>
			<div
				class="about-me"
				className="mt-50 text-left"
			>
				<img
					src="selfie.JPG"
					className="h-100 w-55 float-left"
				/>
				<h1 className="text-3xl mb-10 text-center">About Me!</h1>
				<p className="mb-10 ml-75">
					Hi! My name is Abby Dise. I am a third year student at
					Drexel University working towards a Bachelor of Science
					in Computer Science with a minor in Computer
					Engineering. I also have an Associate's Degree in
					Computer Information Systems.
				</p>
				<p className="mb-10 ml-75">
					I have experience in Python, HTML & CSS, Java, and many
					more languages and technologies.
				</p>
				<p className="ml-75">
					I am currently looking for internships that last from
					April - September as a part of my university's co-op
					program. I am open to any tech position as I want a
					well-rounded co-op experience over my 3 co-ops.
				</p>
			</div>
			<div
				id="education"
				className="text-left mt-75"
			>
				<h1 className="text-3xl">Education</h1>
				<Timeline
					sx={{
						[`& .${timelineOppositeContentClasses.root}`]: {
							flex: 0.2,
						},
					}}
				>
					<TimelineItem>
						<TimelineOppositeContent>
							June 2028
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<h5>Drexel University | Philadelphia, PA</h5>
							<h6>
								Bachlor of Science in Computer Science
							</h6>
							<p>GPA: 3.54</p>
							<p>Awards & Achievements:</p>
							<ul>
								<li>Drexel Promise Scholarship</li>
								<li>Dean's List (Fall Quarter 2024)</li>
							</ul>
							<p>Extracurriculars:</p>
							<ul>
								<li>Women in Tech Society (WiCS)</li>
								<li>CyberDragons</li>
								<li>Tech Serv</li>
								<li>Hack4Impact</li>
							</ul>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent>
							May 2024
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<h5>
								Reading Area Community College |
								Reading, PA
							</h5>
							<h6>
								Associate of Arts in Computer
								Information Systems
							</h6>
							<p>GPA: 3.863</p>
							<p>Awards & Achievements:</p>
							<ul>
								<li>
									President's List (Fall Semester
									2023)
								</li>
								<li>Member of Phi Theta Kappa</li>
								<li>
									Dean's List (Spring Semester 2024)
								</li>
								<li>Magna Cum Laude</li>
							</ul>
						</TimelineContent>
					</TimelineItem>
				</Timeline>
			</div>
			<div
				id="experience"
				className="text-left mt-20"
			>
				<h1 className="text-3xl">Experience</h1>
				<Timeline
					sx={{
						[`& .${timelineOppositeContentClasses.root}`]: {
							flex: 0.2,
						},
					}}
				>
					<TimelineItem>
						<TimelineOppositeContent>
							March 2025 - September 2025
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<h5>Development Co-op</h5>
							<h6>
								Office Practicum | Fort Washington, PA
								(remote)
							</h6>
							<p>Responsibilities:</p>
							<ul>
								<li>
									Utilized Spring, React, and Java to
									assist in developing EHR products
								</li>
								<li>
									Participated in an Agile
									environment
								</li>
							</ul>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent>
							January 2024 - January 2025
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<h5>Checkout Coach</h5>
							<h6>Giant Food Stores | Pottstown, PA</h6>
							<p>Responsibilities:</p>
							<ul>
								<li>
									Supervise the front end to ensure
									functions ran smoothly between the
									cashiers, self-checkout, and the
									customer service desk
								</li>
								<li>
									Solve issues that arise in the
									front end from employees and
									customers including price
									adjustments, defective products,
									and monetary concerns
								</li>
								<li>
									Handled counting the money in each
									till drawer used throughout the day
									behind the customer service dsek,
									on the registers, pharmacy, and
									Beer Garden
								</li>
							</ul>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent>
							Augsut 2023 - December 2024
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<h5>Customer Service Associate</h5>
							<h6>Giant Food Store | Pottstown, PA</h6>
							<p>Responsibilities:</p>
							<ul>
								<li>
									Listen to customer concerns or
									issues involving other employees'
									quality of service, pricing
									disputes, and technological
									malfunctions with the Giant app
								</li>
								<li>
									Assisted customer with lottery
									transactions, product returns, and
									Western Union money transfers and
									money orders
								</li>
								<li>
									Communicated effectively with
									customers of policies of returns,
									forgetten coupons, and price
									matching
								</li>
							</ul>
						</TimelineContent>
					</TimelineItem>
				</Timeline>
			</div>
			<div
				id="skills"
				className="text-left mt-20"
			>
				<h1 className="text-3xl">Skills</h1>
			</div>
			<div
				id="projects"
				className="text-left mt-75"
			>
				<h1 className="text-3xl">Projects</h1>
			</div>
			<div
				id="contact"
				className="text-left mt-75"
			>
				<h1 className="text-3xl">Contact Me!</h1>
			</div>
		</div>
	);
}

export default App;
