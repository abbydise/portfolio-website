import React from "react";

const About = () => {
	return (
		<div className="about">
			<div className="summary">
				<p className="text-2xl font-bold text-center">
					RESUME TAB IS CURRENTLY DISABLED DUE TO STYLING ISSUE
				</p>
				<p className="text-center text-xl">
					Resume is still available for download in the
					navigation bar.
				</p>
				<br />
				<p className="mb-5">
					Hello! I'm a third year Computer Science studying at
					Drexel University with a Computer Engineering minor. My
					obsession for technology started when I was very young
					and grew into the passion I have today that lead me to
					pursuing my degree.
				</p>
				<p className="mb-5">
					I'm particularly interested in roles surrounding
					full-stack development and AI/ML. I have just completed
					my first co-op which gave me experience in Java and
					Kotlin. I am now looking for my next co-op for
					Spring/Summer 2026! I am open to any and all types of
					roles as I want the most experience possible during my
					time at Drexel.
				</p>
				<p className="mb-5">
					My goal is to work at a company that values
					collaboration and professional development and also
					allows me opportunities to grow. I wish to always be
					learning something new. This field of work is always
					evolving, and I do not want to be left behind.
				</p>
				<p>
					Outside of programming, I enjoy reading, guitar
					playing, listening to music, and playing Playstation 5
					video games. So far, I have read 20 books this year! I
					also have 4 Platinum trophies and plan on getting more.
					I am always looking for book, music, or game
					recommendations, so if you have any, feel free to use
					the contact form to tell me all about them! I have no
					preference for genre.
				</p>
			</div>
			<div className="favorites mt-5">
				Here are a few of my current favorite things:
				<div className="flex mt-5 mb-2 place-items-baseline gap-5 justify-self-center text-center">
					<figure>
						<img
							src="favorites/eagles.svg"
							alt="eages"
							className="w-30 h-auto justify-self-center"
						/>
						<figcaption>Philadelphia Eagles</figcaption>
					</figure>
					<figure>
						<img
							src="favorites/greekmythology.webp"
							alt="greekmythology"
							className="w-30 h-auto justify-self-center"
						/>
						<figcaption>Greek Mythology</figcaption>
					</figure>
					<figure>
						<img
							src="favorites/babel.jpg"
							alt="babel"
							className="w-30 h-auto justify-self-center"
						/>
						<figcaption className="text-center">
							Babel by R.F. Kuang
						</figcaption>
					</figure>
					<figure>
						<img
							src="favorites/tlou.jpg"
							alt="thelastofus"
							className="w-30 h-auto justify-self-center"
						/>
						<figcaption>The Last of Us Part 1</figcaption>
					</figure>
					<figure>
						<img
							src="favorites/tangled.jpg"
							alt="tangled"
							className="w-30 h-auto justify-self-center"
						/>
						<figcaption>Tangled</figcaption>
					</figure>
					<figure>
						<img
							src="favorites/supernatural.jpeg"
							alt="supernatural"
							className="w-30 h-auto justify-self-center"
						/>
						<figcaption>Supernatural</figcaption>
					</figure>
				</div>
			</div>
		</div>
	);
};

export default About;
