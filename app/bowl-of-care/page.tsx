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
							<Image alt='design' width={20} height={20} src={'/design.svg'} />
							<div className='label'>Design</div>
						</div>
						<p>
							We designed a user-friendly interface with flexible layouts and
							interactive features to make the experience engaging to all
						</p>
					</div>
					<div className='scope-card'>
						<div>
							<Image
								alt='testing'
								width={20}
								height={20}
								src={'/testing.svg'}
							/>
							<div className='label'>Testing</div>
						</div>
						<p>
							Together with testing we went through competitive analysis and
							tested the app to ensure that it works well and that it's easy to
							use. All feedback that was given, is visibly showcased with the
							final outcome of the project.
						</p>
					</div>
					<div className='scope-card'>
						<div>
							<Image
								alt='present'
								width={20}
								height={20}
								src={'/present.svg'}
							/>
							<div className='label'>Presentation</div>
						</div>
						<p>
							For the final presentation, we shared the highlights of the app's
							feature, design decisions, and the role each person contributed.
						</p>
					</div>
				</div>
			</div>
			<div className='boc-logo'>
				<div className='max-width'>
					<Image
						alt='Bowl of Care logo'
						width={382}
						height={382}
						src={'/BOC.png'}
					/>
				</div>
			</div>
			<div className='colors max-width'>
				<div>
					<h2>
						Colors <br />& <span>Typography</span>
					</h2>
				</div>
				<div>
					<h3>Primary</h3>
					<p>#df966e</p>
					<p>RGB 223, 150, 110</p>
				</div>
				<div>
					<div>
						<h3>White</h3>
						<p>#000000</p>
						<p>RGB 20, 22, 30</p>
					</div>
				</div>
				<div>
					<h3>Black</h3>
					<p>#F8F8F8</p>
					<p>RGB 248, 248, 248</p>
				</div>
			</div>
			<div className='font max-width'>
				<div>
					<h2>Aa</h2>
					<p>Montserrat</p>
				</div>
				<div>
					<p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
					<p>abcdefghijklmnopqrstuvwxyz</p>
					<p>1234567890</p>
					<p>Regular, Medium, Semi-Medium, Bold </p>
				</div>
			</div>
			<div className='components max-width'>
				<h2>Components</h2>
				<div className='elements'>
					<Image
						alt='elements'
						width={1209}
						height={810}
						src={'/elements.png'}
					/>
				</div>
			</div>
			<div className='screens max-width'>
				<div>
					<h2>+10</h2>
					<p>Screens</p>
				</div>
				<div>
					<p>
						With the insights gathered from the research, we've created a
						platform that resonated with the target audience and users' neeeds
					</p>
				</div>
			</div>
			<div className='img-designs max-width'>
				<Image alt='Splash 1' width={375} height={812} src={'/Splash1.png'} />
				<Image alt='Splash 2' width={375} height={812} src={'/Splash2.png'} />
				<Image alt='Splash 3' width={375} height={812} src={'/Splash3.png'} />
				<Image alt='Splash 4' width={375} height={812} src={'/Splash4.png'} />
				<Image alt='Splash 5' width={375} height={812} src={'/Splash5.png'} />
				<Image alt='Splash 6' width={375} height={812} src={'/Splash6.png'} />
			</div>
			<div className='more'>
				<h2>+ More</h2>
				<p>Thank you for viewing this project</p>
			</div>
		</section>
	);
}
