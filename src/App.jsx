import "./App.css";
import React from "react";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectCard from "./components/ProjectCard";

function App() {
	return (
		<div>
			<header>
				<ul className="inline">
					<li>Education</li>
					<li>Experience</li>
					<li>Skills</li>
					<li>Projects</li>
					<li>Contact Me!</li>
				</ul>
			</header>
			<div class="about-me">
				<img src="selfie.JPG" />
				<h1>About Me!</h1>
				<p>
					Hi! My name is Abby Dise. I am a third year at Drexel
					University working towards a Bachelor of Science in
					Computer Science. I also have an Associate's Degree in
					Computer Information Systems.
				</p>
				<p>
					I have experience in Python, HTML & CSS, Java, and many
					more technologies.
				</p>
				<p>
					I am currently looking for internships that can last
					from April to September as part of my university's
					co-op program. I am open to any development position --
					web dev, full stack, etc.
				</p>
			</div>
			<div class="resume">
				<div class="education">
					<h3>Education</h3>
					<p>September 2024 - June 2028</p>
					<p>Drexel University | Philadelphia, PA</p>
					<p>Bachelor of Science in Computer Science</p>
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
						<li>TechServ</li>
						<li>Hack4Impact</li>
					</ul>
					<p>August 2019 - May 2024</p>
					<p>Reading Area Community College | Reading, PA</p>
					<p>
						Associate of Arts in Computer Information Systems
					</p>
					<p>GPA: 3.863</p>
					<p>Awards & Achievements:</p>
					<ul>
						<li>President's List (Fall Semester 2023)</li>
						<li>Member of Phi Theta Kappa</li>
						<li>Dean's List (Spring Semester 2024)</li>
						<li>Magna Cum Laude</li>
					</ul>
				</div>
				<div class="experience">
					<p>March 2025 - September 2025</p>
					<p>Development Co-op</p>
					<p>Office Practicum | Fort Washington, PA (remote)</p>
					<p>Responsibilities:</p>
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<p>January 2024 - January 2025</p>
					<p>Checkout Coach</p>
					<p>Giant Food Stores | Pottstown, PA</p>
					<p>Responsibilities:</p>
					<ul>
						<li>
							Supervise the front end to ensure functions
							run smoothly between the cashiers,
							self-checkout registers, and customer service
							desk
						</li>
						<li>
							Solve issues that arise in the front end from
							employees and customers including price
							adjustments, defective products, and monetary
							concerns
						</li>
						<li>
							Handled counting the money in each till
							drawer used throughout the day by cashiers,
							pharmacy, beer garden associates, and
							customer service associates
						</li>
					</ul>
					<p>August 2023 - December 2024</p>
					<p>Customer Service Associate</p>
					<p>Giant Food Stores | Pottstown, PA</p>
					<p>Responsibilities:</p>
					<ul>
						<li>
							List to customer concerns or issues involving
							other employees, quality of service, pricing
							disputes, and teechnological malfunctions
							with the Giant app
						</li>
						<li>
							Assisted customers with lottery transactions,
							product returns, and Western Union money
							transfers and orders
						</li>
						<li>
							Communicated effectively with customers of
							regulated policies concerning returns,
							forgotten/expired coupons, and price matching
						</li>
					</ul>
				</div>
			</div>
			<div class="skills">
				<h3>Skills</h3>
				<div class="languages">
					<h5>Languages</h5>
					<img
						src="python.svg"
						className="w-51 h-51"
					/>
					<img
						src="html.svg"
						className="w-51 h-51"
					/>
					<img
						src="css.svg"
						className="w-51 h-51"
					/>
					<img
						src="java.svg"
						className="w-51 h-51"
					/>
					<img
						src="js.svg"
						className="w-51 h-51"
					/>
					<img
						src="ts.svg"
						className="w-51 h-51"
					/>
				</div>
				<div class="databases">
					<h5>Databases</h5>
					<img
						src="mysql.svg"
						className="w-51 h-51"
					/>
					<img
						src="postgresql.svg"
						className="w-51 h-51"
					/>
					<img
						src="mongodb.svg"
						className="w-51 h-51"
					/>
					<img
						src="mongoose.svg"
						className="w-51 h-51"
					/>
				</div>
				<div class="full-stack">
					<h5>Full Stack Dev</h5>
					<img
						src="react.svg"
						className="w-51 h-51"
					/>
					<img
						src="svelte.svg"
						className="w-51 h-51"
					/>
					<img
						src="tailwind.svg"
						className="w-51 h-51"
					/>
					<img
						src="jsexpress.svg"
						className="w-51 h-51"
					/>
					<img
						src="nodejs.svg"
						className="w-51 h-51"
					/>
					<img
						src="spring.svg"
						className="w-51 h-51"
					/>
				</div>
				<div class="dev-tools">
					<h5>Developer Tools</h5>
					<img
						src="bash.svg"
						className="w-51 h-51"
					/>
					<img
						src="docker.svg"
						className="w-51 h-51"
					/>
					<img
						src="figma.svg"
						className="w-51 h-51"
					/>
					<img
						src="git.svg"
						className="w-51 h-51"
					/>
					<img
						src="vscode.svg"
						className="w-51 h-51"
					/>
					<img
						src="postman.svg"
						className="w-51 h-51"
					/>
				</div>
				<div class="productivity">
					<h5>Productivity</h5>
					<img
						src="access.svg"
						className="w-51 h-51"
					/>
					<img
						src="excel.svg"
						className="w-51 h-51"
					/>
					<img
						src="powerpoint.svg"
						className="w-51 h-51"
					/>
					<img
						src="word.svg"
						className="w-51 h-51"
					/>
					<img
						src="confluence.svg"
						className="w-51 h-51"
					/>
					<img
						src="jira.svg"
						className="w-51 h-51"
					/>
				</div>
				<div class="os">
					<h5>Operating Systems</h5>
					<img
						src="macos.svg"
						className="w-51 h-51"
					/>
					<img
						src="windows.svg"
						className="w-51 h-51"
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
