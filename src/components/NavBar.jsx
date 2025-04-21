import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div>
			<nav>
				<Link to="#education">Education</Link>
				<Link to="#experience">Experience</Link>
				<Link to="#skills">Skills</Link>
				<Link to="#projects">Projects</Link>
				<Link to="#contact">Contact Me</Link>
			</nav>
		</div>
	);
};

export default NavBar;
