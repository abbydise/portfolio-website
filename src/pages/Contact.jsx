import { React, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				form.current,
				{
					publicKey: import.meta.env.VITE_PUBLIC_KEY,
				}
			)
			.then(
				() => {
					alert("Message sent successfully!");
					form.current.reset();
				},
				(error) => {
					console.log("FAILED...", error);
					alert("Failed to send the message, please try again.");
				}
			);
	};

	return (
		<div className="w-150">
			<form
				ref={form}
				onSubmit={sendEmail}
			>
				<input
					type="text"
					name="user_name"
					placeholder="Full Name"
					className="border rounded-xl w-50 h-10 p-2"
					required
				/>
				<input
					type="email"
					name="user_email"
					placeholder="Email Address"
					className="border rounded-xl w-50 h-10 p-2 ml-5"
					required
				/>
				<textarea
					name="message"
					placeholder="Your Message"
					className="border rounded-xl w-150 h-100 p-2 mt-5"
					required
				/>
				<input
					type="submit"
					value="Send"
					className="flex border rounded-xl w-20 mt-5 justify-self-end"
				/>
			</form>
		</div>
	);
};
export default Contact;
