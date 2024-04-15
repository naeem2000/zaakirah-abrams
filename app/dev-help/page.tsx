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
				<div className='dev-about-head max-width'>
					<p>About</p>
					<p>UI Design</p>
				</div>
				<div className='help-about-body'>
					<div className='max-width'>
						<div>
							<p>
								Giving you the experience you need for your next dream position
							</p>
							<h2>devHelp!</h2>
							<p>
								<strong>devHelp</strong> was conceived during a competition
								aimed at addressing unemployment in South Africa, targeting the
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
			</div>
			<div className='help-grid max-width'>
				<div className='help-grid-left'>
					<div>
						<p>
							“Every great developer you know got there by solving problems they
							were unqualified to solve until they actually did it. “
						</p>
						<p>Patrick Mckenzie</p>
					</div>
				</div>
				<div>
					<Image
						src={'/about1.png'}
						alt='about image'
						width={728}
						height={471}
					/>
				</div>
				<div>
					<Image
						src={'/about2.png'}
						alt='about image'
						width={728}
						height={471}
					/>
				</div>
				<div className='help-grid-right'>
					<div>
						<Image src={'/Users.png'} alt='users' width={222} height={83} />
						<p>+10 Individuals</p>
					</div>
					<div>
						<p>
							“After months of interning, I've transitioned into a junior
							developer role, yet I'm encountering difficulty securing a job due
							to my limited experience. I believe devHelp presents a promising
							solution by offering a platform to enhance my skill set and
							bolster my experience.”
						</p>
					</div>
				</div>
			</div>
			<div className='phone'>
				<Image src={'/iphone.png'} alt='app icon' width={760} height={1538} />
			</div>
		</section>
	);
}
