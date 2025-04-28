import React from "react";

const ResumeButton = () => {
	return (
		<div
			id="resume-button"
			className="absolute right-0 mt-10 mr-50"
		>
			<button className="border p-2 rounded-2xl">
				<a
					href="Dise, Abigail.pdf"
					download
				>
					Download my Resume
				</a>
			</button>
		</div>
	);
};

export default ResumeButton;
