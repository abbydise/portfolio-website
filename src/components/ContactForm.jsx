import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const form = useRef();

	const sendEmail = (e) => {
		// TODO: clear the form after submission
		// TODO: add an alert to show success or failure
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				form.current,
				{ publicKey: import.meta.env.VITE_EMAILJS_KEY }
			)
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};
	return (
		<form
			// TODO: style the form better
			ref={form}
			onSubmit={sendEmail}
		>
			<legend>Full Name</legend>
			<input
				type="text"
				name="fullName"
				className="border"
			/>
			<legend>Email</legend>
			<input
				type="email"
				name="email"
				className="border"
			/>
			<legend>Message</legend>
			<textarea
				name="message"
				className="border"
			/>
			<input
				type="submit"
				value="Send"
				className="border rounded-2xl p-2 ml-5"
			/>
		</form>
	);
};

export default ContactForm;
