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

const Experience = () => {
	return (
		<div
			id="experience"
			className="text-left mt-5"
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
									Utilized Spring, React, and Java to
									assist in developing EHR products
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Participated in an Agile
									environment
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Learned how to operate in a
									development team remotely
								</ListItemText>
							</ListItem>
						</List>
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
									Supervised the front end to ensure
									functions ran smoothly
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Solved issues that arise in the
									front end from employees and
									customers
								</ListItemText>
							</ListItem>
							<ListItem>
								Handled counting the money in the till
								drawers used throughout the front end,
								pharmacy, and Beer Garden
							</ListItem>
						</List>
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
									Listened to customer
									concerns/issues
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Assisted customers with lottery
									transactions, product returns, and
									Western Union transactions
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Communicated effectively with
									customers in regards of company
									policies and procedures
								</ListItemText>
							</ListItem>
						</List>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</div>
	);
};

export default Experience;
