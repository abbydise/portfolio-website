import React from "react";

import ContactForm from "./ContactForm";

const Footer = () => {
	return (
		<div
			id="contact"
			className="text-left mt-20"
		>
			<h1 className="text-3xl">Contact Me!</h1>
			<ContactForm />
		</div>
	);
};

export default Footer;
