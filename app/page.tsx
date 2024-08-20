'use client';

import Typewriter from 'typewriter-effect';
import Loader from './components/Loader';
import Nav from './components/Nav/Nav';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		document.body.style.overflowY = 'hidden';
		if (typeof window !== 'undefined') {
			const loader = document.getElementById('loader');
			if (loader) {
				setTimeout(() => {
					loader.classList.add('slide');
					document.body.style.overflowY = 'scroll';
				}, 2000);
			}
		}
	});
	return (
		<div className='home'>
			<div id='loader' className='loader'>
				<div className='load-element'>
					<Loader />
				</div>
			</div>
			<section className='hero'>
				<div className='max-width'>
					<Nav />
					<div className='header'>
						<div>
							<Typewriter
								options={{
									strings: ['2024', 'PHOTOGRAPHY', 'MOBILE', 'WEBSITE'],
									deleteSpeed: 80,
									autoStart: true,
									loop: true,
								}}
							/>

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
					<Link href={'/dev-help'}>
						<div className='img-container'>
							<Image src='/devhelp-tile.png' alt='DevHelp' fill />
							<div className='overlay'>
								<p>DevHelp</p>
								<p>DevHelp &nbsp; | &nbsp; UI/ UX Design</p>
							</div>
						</div>
					</Link>
					<Link href={'/anigram'}>
						<div className='img-container'>
							<Image src='/anigram-tile.png' alt='5' fill />
							<div className='overlay'>
								<p>Anigram</p>
								<p>Social Media &nbsp; | &nbsp; UI/ UX Design</p>
							</div>
						</div>
					</Link>
					<Link href={'/bowl-of-care'}>
						<div className='img-container'>
							<Image src='/bowlofcare-tile.png' alt='Bowl Of Care' fill />
							<div className='overlay'>
								<p>Bowl Of Care</p>
								<p>Food Delivery App &nbsp; | &nbsp; UI/ UX Design</p>
							</div>
						</div>
					</Link>
				</div>
				<div className='bot-gal'>
					<Link href={'/photography'}>
						<div className='img-container'>
							<Image src='/photography-tile.png' alt='Photography ' fill />
							<div className='overlay'>
								<p>Photography </p>
								<p>Social Media &nbsp; | &nbsp; Social Media Manager</p>
							</div>
						</div>
					</Link>
					<Link href={'/freelance'}>
						<div className='img-container'>
							<Image src='/freelance-tile.png' alt='Freelance Work' fill />
							<div className='overlay'>
								<p>Freelance Work</p>
								<p>UI/UX Designs</p>
							</div>
						</div>
					</Link>
				</div>
			</section>
			<section className='get-in-touch' id='contact'>
				<div className='max-width'>
					<h2>Get in touch</h2>
					<p>Want to discuss a project, have a job offer or say Hello? </p>
					<p>
						<span>Drop me a message</span> &nbsp;&nbsp;&nbsp; I’d love to get
						back to you :)
					</p>
				</div>
			</section>
		</div>
	);
}
