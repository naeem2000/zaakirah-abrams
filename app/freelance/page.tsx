import Nav from '../components/Nav/Nav';
import Image from 'next/image';
import React from 'react';
import './freelance.css';

export default function page() {
	return (
		<div className='freelance'>
			<Nav />
			<div className='max-width'>
				<div className='freelance-header'>
					<div className='freelance-head'>
						<h1>You’ve Reached My Freelance Work</h1>
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
			</div>
		</div>
	);
}
