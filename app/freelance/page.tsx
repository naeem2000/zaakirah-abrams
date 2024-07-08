import Nav from '../components/Nav/Nav';
import Image from 'next/image';
import React from 'react';
import './freelance.css';
import Link from 'next/link';

export default function page() {
	return (
		<div className='freelance'>
			<Nav />
			<div className='max-width'>
				<div className='freelance-header'>
					<div className='freelance-head'>
						<h2>You’ve Reached My Freelance Work</h2>
						<p>
							Here is a showcase of all the work I've done for those who have
							requested my help, as well as tasks I’ve completed to enhance my
							skills.
						</p>
					</div>
					<div>
						<Image src='/smiley.png' alt='smiley' width={90} height={90} />
					</div>
				</div>
				<div className='booka'>
					<div className='booka-image'>
						<Image src='/booka.png' alt='smiley' width={1206} height={809} />
					</div>
					<div className='booka-body'>
						<h2>Booka</h2>
						<div className='booka-text'>
							<div>
								<p>
									These onboarding were created based of on the idea of creating
									an app for musicians. who were affected by COVID-19
								</p>
								<p>
									Brief: <br /> “As a result, a unique app called “Booka” has
									been created by a group of artists, where people can book
									musicians directly. In order to launch successfully they would
									like a brand identity and prototype app.”
								</p>
							</div>
							<div>
								<p>
									Currently Still designing: <br /> I am still designing the app
									pages, but the Onboarding Screens are available for viewers to
									check out.
								</p>
								<p>
									Design Completed: <br /> Login, Signup, Artist Choice, Booka
									Setup, Home Page
								</p>
							</div>
						</div>
						<Link href={'/'}>Check Out Design</Link>
					</div>
				</div>
				<div className='forecast-hub'>forecast</div>
			</div>
		</div>
	);
}
