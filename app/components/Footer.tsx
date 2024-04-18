import React from 'react';
import '../globals.css';

export default function Footer() {
	return (
		<footer>
			<div className='footer-body'>
				<div className='max-width'>
					<div className='footer-left'>
						<p>Want to discuss a project or have a job offer?</p>
						<a href='mailto:' target='_blank'>
							Get in touch
						</a>
					</div>
					<div className='footer-right'>
						<div>
							<p>Navigate</p>
							<a href='http://' target='_blank' rel='noopener noreferrer'>
								Work
							</a>
							<a href='http://' target='_blank' rel='noopener noreferrer'>
								Photography
							</a>
						</div>
						<div>
							<p>Connect</p>
							<a href='http://' target='_blank' rel='noopener noreferrer'>
								LinkedIn
							</a>
							<a href='http://' target='_blank' rel='noopener noreferrer'>
								Instagram
							</a>
							<a href='http://' target='_blank' rel='noopener noreferrer'>
								Dribble
							</a>
						</div>
					</div>
				</div>
				<div className='copyright'>
					<p>
						© Created by{' '}
						<a
							href='https://naeemdev.netlify.app/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Naeem Carr
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
