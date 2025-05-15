import React from "react";

import ContactForm from "./ContactForm";

const Footer = () => {
	// TODO: add social media links
	// TODO: add a buffer at the end of the page so it doesn't look like it abruptly stops
	// TODO: add a copyright notice
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
