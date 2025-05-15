import React from "react";

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
import { List, ListItem, ListItemText } from "@mui/material";

const Education = () => {
	return (
		<div
			id="education"
			className="text-left mt-50"
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
						<h6>Bachelor of Science in Computer Science</h6>
						<p>GPA: 3.54</p>
						<p>Awards & Achievements:</p>
						<List
							sx={{
								listStyleType: "disc",
								ml: 5,
								mt: [-2],
								"& .MuiListItem-root": {
									display: "list-item",
									mb: [-2],
								},
							}}
						>
							<ListItem>
								<ListItemText>
									Drexel Promise Scholarship
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Dean's List (Fall Quarter 2024)
								</ListItemText>
							</ListItem>
						</List>
						<p>Extracurriculars:</p>
						<List
							sx={{
								listStyleType: "disc",
								ml: 5,
								mt: [-2],
								"& .MuiListItem-root": {
									display: "list-item",
									mb: [-2],
								},
							}}
						>
							<ListItem>
								<ListItemText>
									Women in Computing Society (WiCS)
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									CyberDragons
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>Tech Serv</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>Hack4Impact</ListItemText>
							</ListItem>
						</List>
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
							Reading Area Community College | Reading, PA
						</h5>
						<h6>
							Associate of Arts in Computer Information
							Systems
						</h6>
						<p>GPA: 3.863</p>
						<p>Awards & Achievements:</p>
						<List
							sx={{
								listStyleType: "disc",
								ml: 5,
								mt: [-2],
								"& .MuiListItem-root": {
									display: "list-item",
									mb: [-2],
								},
							}}
						>
							<ListItem>
								<ListItemText>
									President's List (Fall Semester
									2023)
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Member of Phi Theta Kappa
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Dean's List (Spring Semester 2024)
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Magan Cum Laude
								</ListItemText>
							</ListItem>
						</List>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</div>
	);
};

export default Education;
