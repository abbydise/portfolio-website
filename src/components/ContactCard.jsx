import React from "react";

const ContactCard = () => {
	return (
		<div className="contactcard shadow-2xl rounded-4xl justify-items-center text-center h-125 mt-20 m-10 w-100 bg-[var(--accent-color)]">
			<div className="header justify-items-center">
				<img
					src="avatar.png"
					className="w-30 h-30"
				/>
				<h2 className="text-2xl">Abby Dise</h2>
				<p>Computer Science student @ Drexel University</p>
			</div>
			<div className="socials flex space-x-3 mb-15 mt-10 relative z-10">
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
				<div className="flex items-center">
					<img
						src="email.png"
						className="w-10 h-10"
					/>
					<p>abbydisedev@gmail.com</p>
				</div>
				<div className="flex items-center">
					<img
						src="phone.png"
						className="w-10 h-10"
					/>
					<p>484-925-5243</p>
				</div>
				<div className="flex items-center">
					<img
						src="location.png"
						className="w-10 h-10"
					/>
					<p>Philadelphia, PA</p>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;
