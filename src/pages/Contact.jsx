import { React, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm();
	};
};
export default Contact;
