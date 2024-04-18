'use client';

import Image from 'next/image';

export default function Home() {
	return (
		<>
			<section className='hero'>
				<div className='max-width'>
					<nav>
						<a href='#about'>About Me</a>
						<a href='#work'>Work</a>
						<a href='#contact'>Get In Touch</a>
					</nav>
					<div className='header'>
						<div>
							<p>2024</p>
							<h1>UI | UX DESIGN</h1>
							<div className='speech-bubble'>
								<p>Zaakirah Abrams</p>
							</div>
						</div>
					</div>
					<div className='about' id='about'>
						<div>
							<Image
								src='/avatar.png'
								alt='avatar'
								color='transparent'
								width={611}
								height={611}
							/>
						</div>
						<div className='about-right'>
							<div>
								<h2>Hi There!</h2>
								<Image src='/smiley.png' alt='smiley' width={82} height={82} />
							</div>
							<p>
								<span>I’m Zaakirah</span> , just a human with a deep passion for
								design and creativity. I always strive to give a special meaning
								to a project that i am dedicated to, since my main goal is to
								create each project with a unique story which is visually
								attractive as well as meets the needs of the client!
							</p>
							<br />
							<p>
								I lean towards{' '}
								<span>mobile design, UI/UX and branding identity.</span> My
								interest lies not only in the visual aesthetics but also in
								comprehending users' needs to craft projects that resonate
								perfectly with them.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className='gallery max-width' id='work'>
				<div className='top-gal'>
					<div className='img-container'>
						<Image src='/1.png' alt='1' fill />
						<div className='overlay'>
							<p>Anigram</p>
							<p>Social Media &nbsp; | &nbsp; UI/ UX Design</p>
						</div>
					</div>
					<div className='img-container'>
						<Image src='/2.png' alt='2' fill />
						<div className='overlay'>
							<p>Anigram</p>
							<p>Social Media &nbsp; | &nbsp; UI/ UX Design</p>
						</div>
					</div>
					<div className='img-container'>
						<Image src='/3.png' alt='3' fill />
						<div className='overlay'>
							<p>Anigram</p>
							<p>Social Media &nbsp; | &nbsp; UI/ UX Design</p>
						</div>
					</div>
				</div>
				<div className='bot-gal'>
					<div className='img-container'>
						<Image src='/4.png' alt='4' fill />
						<div className='overlay'>
							<p>Anigram</p>
							<p>Social Media &nbsp; | &nbsp; UI/ UX Design</p>
						</div>
					</div>
					<div className='img-container'>
						<Image src='/5.png' alt='5' fill />
						<div className='overlay'>
							<p>Anigram</p>
							<p>Social Media &nbsp; | &nbsp; UI/ UX Design</p>
						</div>
					</div>
				</div>
			</section>
			<section className='get-in-touch' id='contact'>
				<h2>Get in touch</h2>
				<p>Want to discuss a project, have a job offer or say Hello? </p>
				<p>
					<span>Drop me a message</span>, I’d love to get back to you :)
				</p>
			</section>
		</>
	);
}
