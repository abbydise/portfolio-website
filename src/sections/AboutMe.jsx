import React from "react";

const AboutMe = () => {
	return (
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
				Drexel University working towards a Bachelor of Science in
				Computer Science with a minor in Computer Engineering. I
				also have an Associate's Degree in Computer Information
				Systems.
			</p>
			<p className="mb-10 ml-75">
				I have experience in Python, HTML & CSS, Java, and many more
				languages and technologies.
			</p>
			<p className="ml-75">
				I am currently looking for internships that last from April
				- September as a part of my university's co-op program. I am
				open to any tech position as I want a well-rounded co-op
				experience over my 3 co-ops.
			</p>
		</div>
	);
};

export default AboutMe;
