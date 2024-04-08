import Image from 'next/image';
import './bowl-of-care.css';
import React from 'react';

export default function page() {
	return (
		<section className='bowl-of-care'>
			<div className='bowl-head'>
				<div className='max-width'>
					<div>
						<h1>Bowl Of Care</h1>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem
							ipsum dolor sit amet consectetur adipisicing elit. Quisquam
							suscipit mollitia commodi, voluptas eligendi praesentium vel hic
							unde inventore iure.
						</p>
						<p>Tools Used |</p>
						<Image alt='adobe' width={60} height={55} src={'/adobeai.png'} />
						<p>UI Design Case Study | Zaakirah Abrams</p>
						<p>Role - Research, Wire-frame, UI Design</p>
					</div>
				</div>
			</div>
			<div className='about-bowl'>
				<div className='max-width'>
					<h2>about the project </h2>
					<p>
						<span>Bowl Of Care</span> is a project that was created as part of a
						college project with the primary goal of developing a food delivery
						application. However, we sought to elevate its purpose by
						considering individuals facing food insecurity or reliant on food
						stamps. Through our emphasis on creating a user-friendly design, we
						seamlessly integrated features into the app, ensuring effortless
						access for all users to order nutritious meals.
					</p>
					<div className='line'></div>
				</div>
			</div>
			<div className='mood'>
				<h2>Mood board</h2>
				<Image alt='adobe' width={1000} height={1000} src={'/moodboard.png'} />
			</div>
			<div className='scope max-width'>
				<h3>Scope of work </h3>
				<h2>Research, planning, and implementation</h2>
				<div className='scope-row'>
					<div className='scope-card'>
						<div>
							<Image
								alt='researh'
								width={20}
								height={20}
								src={'/research.svg'}
							/>
							<div className='label'>Research</div>
						</div>
						<p>
							After meeting up with the client we carefully analyzed the market
							and surveyed users to fine-tune the features and functions of the
							app we designed.
						</p>
					</div>
					<div className='scope-card'>
						<div>
							<Image
								alt='researh'
								width={20}
								height={20}
								src={'/research.svg'}
							/>
							<div className='label'>Research</div>
						</div>
						<p>
							After meeting up with the client we carefully analyzed the market
							and surveyed users to fine-tune the features and functions of the
							app we designed.
						</p>
					</div>
					<div className='scope-card'>
						<div>
							<Image
								alt='researh'
								width={20}
								height={20}
								src={'/research.svg'}
							/>
							<div className='label'>Research</div>
						</div>
						<p>
							After meeting up with the client we carefully analyzed the market
							and surveyed users to fine-tune the features and functions of the
							app we designed.
						</p>
					</div>
					<div className='scope-card'>
						<div>
							<Image
								alt='researh'
								width={20}
								height={20}
								src={'/research.svg'}
							/>
							<div className='label'>Research</div>
						</div>
						<p>
							After meeting up with the client we carefully analyzed the market
							and surveyed users to fine-tune the features and functions of the
							app we designed.
						</p>
					</div>
				</div>
			</div>
			<div className='boc-logo max-width'>awe</div>
		</section>
	);
}
