import React from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import Skills from "../components/Skills";

const Resume = () => {
	return (
		<div>
			<div className="experience flex">
				<div className="education">
					<p className="text-center text-xl">
						Educational Background
					</p>
					<Timeline className="!p-0 !m-0">
						<TimelineItem>
							<TimelineOppositeContent>
								June 2028
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<p>Drexel University</p>
								<p>
									Bachelor of Science in Computer
									Science with a minor in Computer
									Engineering
								</p>
								<p>GPA: 3.54</p>
								<p>Awards & Honors:</p>
								<TimelineContent>
									<ul>
										<li>
											Drexel Promise
											Scholarship
										</li>
										<li>
											Dean's List (Fall Quarter
											2024)
										</li>
									</ul>
								</TimelineContent>
								<p>Relevant Courses:</p>
								<TimelineContent>
									<ul>
										<li>
											CS-164: Intro to Computer
											Science
										</li>
										<li>
											CS-171: Computer
											Programming 1
										</li>
										<li>
											CS-172: Computer
											Programming 2
										</li>
									</ul>
								</TimelineContent>
								<p>Organizations:</p>
								<TimelineContent>
									<ul>
										<li>
											Women in Computing
											Society (WiCS)
										</li>
										<li>Hack4Impact</li>
										<li>CyberDragons</li>
									</ul>
								</TimelineContent>
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
								<p>Reading Area Community College</p>
								<p>
									Associates of Arts in Computer
									Information Systems
								</p>
								<p>GPA: 3.863</p>
								<p>Awards & Honors:</p>
								<TimelineContent>
									<ul>
										<li>Phi Theta Kappa</li>
										<li>Magna Cum Laude</li>
									</ul>
								</TimelineContent>
								<p>Relevant Courses:</p>
								<TimelineContent>
									<ul>
										<li>WEB-100: Web Design 1</li>
										<li>
											IFT-100: Intro to Info
											Tech
										</li>
										<li>
											IFT-110: Microcomputer
											Applications
										</li>
										<li>
											NET-100: Intro to
											Networking
										</li>
										<li>
											PRG-260: Intro to
											Databases
										</li>
									</ul>
								</TimelineContent>
							</TimelineContent>
						</TimelineItem>
					</Timeline>
				</div>
				<div className="work">
					<p className="text-center text-xl">Work Experience</p>
					<Timeline>
						<TimelineItem>
							<TimelineOppositeContent>
								Mar 2025 - Sept 2025
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<p>Office Practicum</p>
								<p>Development Co-op</p>
								<p>Fort Washington, PA (remote)</p>
								<p>
									During my co-op, I worked on
									various backend services which
									power their pediatric electronic
									health record system. I often
									collaborated with other developers
									and the product owners to create
									solutions to existing and new
									problems.
								</p>
								<p>Key Responsibilites:</p>
								<TimelineContent>
									<ul>
										<li>
											Participated in an Agile
											environment consisting of
											daily stand-ups, sprints,
											and retrospectives
										</li>
										<p>
											Implemented improvements
											throughout multiple
											interconnected
											microservices with the
											use of IntelliJ and
											Java/Kotlin
										</p>
										<p>
											Researched how the
											implementation of a web
											hook to optimize
											messaging would impact
											the existing
											infrastructure
										</p>
									</ul>
								</TimelineContent>
							</TimelineContent>
						</TimelineItem>
						<TimelineItem>
							<TimelineOppositeContent>
								Feb 2024 - Jan 2025
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<p>Giant Food Stores</p>
								<p>Checkout Coach</p>
								<p>Pottstown, PA</p>
								<p>
									As a Checkout Coach, I supervised
									daily store operations to ensure a
									smooth experience for the
									customers. I was responsible for
									the cashiers, self-checkout
									attendant, and the customer service
									desk.
								</p>
								<p>Key Responsibilites:</p>
								<TimelineContent>
									<ul>
										<li>
											Supported and assisted
											front end team members to
											ensure efficiency and
											excellent customer
											service
										</li>
										<p>
											Coordinated and handled
											team schedule adjustments
											to maintain sufficient
											coverage during
											unexpected staff
											shortages{" "}
										</p>
										<p>
											Communicated policies of
											returns, Western Union
											money transfers, and
											lottery tickets
											professionally and
											effectively with
											customers
										</p>
									</ul>
								</TimelineContent>
							</TimelineContent>
						</TimelineItem>
						<TimelineItem>
							<TimelineOppositeContent>
								Aug 2023 - Feb 2024
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<p>Giant Food Stores</p>
								<p>Customer Service Associate</p>
								<p>Pottstown, PA</p>
								<p>
									As a Customer Service Associate, I
									provided customers with a central
									and reliable place to voice their
									concerns, ask questions, and
									resolve issues. I served as the
									mediator between the team members
									or managers and the customers.
								</p>
								<p>Key Responsibilites:</p>
								<TimelineContent>
									<ul>
										<li>
											Resolved customer
											problems surrounding
											monetary disputes,
											defective products, and
											technological
											malfunctions from the
											Giant app
										</li>
										<li>
											Processed returns and
											payments while
											maintaining the company's
											policies
										</li>
										<li>
											Served as the voice for
											customers' concerns in
											order to improve service
											and satisfaction
										</li>
									</ul>
								</TimelineContent>
							</TimelineContent>
						</TimelineItem>
					</Timeline>
				</div>
			</div>
			<div className="skills">
				<Skills />
			</div>
		</div>
	);
};

export default Resume;
