import React from "react";

import { Link } from "react-scroll";

const NavBar = () => {
	return (
		<div className="float-right mt-[-200px]">
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
	);
};

export default NavBar;
