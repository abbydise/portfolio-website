import React from "react";

const ContactCard = () => {
	return (
		<div className="contactcard">
			<div className="header">
				<img
					src="avatar.png"
					className="w-50 h-50"
				/>
				<h2 className="text-4xl text-[var(--main-color)]">
					Abby Dise
				</h2>
				<p>Computer Science student @ Drexel University</p>
			</div>
			<div className="socials flex space-x-3">
				<a
					href="https://www.linkedin.com/in/abbydise/"
					target="_blank"
				>
					<img
						src="linkedin.svg"
						className="w-10 h-10"
					/>
				</a>
				<a
					href="https://github.com/abbydise"
					target="_blank"
				>
					<img
						src="skills/tools/github.svg"
						className="w-10 h-10"
					/>
				</a>
			</div>
			<div className="info">
				<img src="email.png" />
				<p>abbydisedev@gmail.com</p>
				<img src="phone.png" />
				<p>484-925-5243</p>
				<img src="location.png" />
				<p>Philadelphia, PA</p>
			</div>
		</div>
	);
};

export default ContactCard;
