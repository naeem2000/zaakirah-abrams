import Image from 'next/image';
import React from 'react';
import './dev-help.css';

export default function page() {
	return (
		<section className='dev-help'>
			<div className='help-head'>
				<div className='max-width'>
					<div>
						<h1>devHelp</h1>
						<p>
							The app designed to help developers gain experience for the
							position they desire
						</p>
						<p>Tools Used |</p>
						<div>
							<Image src={'/figma.png'} alt='figma' width={68} height={68} />
							<Image src={'/canva.png'} alt='canva' width={68} height={68} />
						</div>
					</div>
				</div>
			</div>
			<div className='dev-about'>
				<div className='dev-about-head'>
					<p>About</p>
					<p>UI Design</p>
				</div>
				<div className='help-about-body'>
					<div>
						<p>
							Giving you the experience you need for your next dream position
						</p>
						<h2>devHelp!</h2>
						<p>
							<strong>devHelp</strong> was conceived during a competition aimed
							at addressing unemployment in South Africa, targeting the
							challenge of inexperienced developers unable to meet job
							requirements. The project's focus is on creating an app to help
							developers, particularly those at junior or mid-senior skill
							levels, gain the experience necessary for desired positions.
						</p>
					</div>
					<div>
						<p className='tag'>Case Study</p>
						<p className='tag'>Competition</p>
						<p className='tag'>UI Design</p>
						<p className='tag'>Mobile Design</p>
					</div>
				</div>
			</div>
			<div className='help-grid'>
				<div>awe</div>
				<div>awe</div>
				<div>awe</div>
				<div>awe</div>
			</div>
		</section>
	);
}
