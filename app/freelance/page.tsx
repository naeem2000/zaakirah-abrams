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
						<Image src='/booka.png' alt='booka' width={1206} height={809} />
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
				<div className='forecast-hub'>
					<div className='forecast-body'>
						<Image
							src='/forecast-hub.png'
							alt='forecast-hub'
							width={649}
							height={652}
						/>
						<div>
							<h2>ForecastHub</h2>
							<br />
							<p>
								This design was created for a developer to complete an important
								task. I was asked to create something I liked, and he would
								design it according to my preferences, incorporating specific
								elements into the design.
							</p>
							<br />
							<p>Elements that needed to be included were:</p>
							<br />
							<ul>
								<li> A search bar for users to search their city</li>
								<li>
									The city, day, date, and current time of the search displayed
								</li>
								<li>
									The temperature displayed along with a detailed weather
									description
								</li>
								<li>
									A weekly forecast displayed, with an option to click on it to
									view the hourly weather forecast
								</li>
							</ul>
							<br />
							<p style={{ marginBottom: '50px' }}>
								You can now view the completed Web App by clicking the link
								below
							</p>
							<Link href={'/'}>Check Out Design</Link>
						</div>
					</div>
				</div>
				<div className='teach-for-all'>
					<div className='teach-for-all-body'>
						<div className='teach-for-all-image'>
							<Image
								src='/teachforall.png'
								alt='teach for all'
								width={1206.83}
								height={809.3}
							/>
						</div>
						<div className='teach-for-all-content'>
							<h2>Teach For All</h2>
							<p>
								This design task was to redesign the entire website and
								incorporate the new offerings. I had to create a completely new
								design with a focus on:
							</p>
							<ul>
								<li>A clean, modern aesthetic</li>
								<li>Improved user navigation</li>
								<li>Inclusion of the organization's new internet plans</li>
								<li>Clearly presenting information to the users</li>
							</ul>
						</div>
						<Link href={'/'}>Check Out Design</Link>
					</div>
				</div>
				<div className='polished-lounge'>
					<h2>Polished Lounge</h2>
					<div className='polished-lounge-head'>
						<p>
							This design was created for a Nail Salon, functioning as an
							e-commerce website to showcase the owner's nail art offerings.
						</p>
						<p>
							The design includes: <br /> Services, Pricing, Art Gallery,
							Contact Section
						</p>
					</div>
					<div className='polished-lounge-image'>
						<Image
							src='/polished-lounge.png'
							alt='teach for all'
							width={1206.83}
							height={809.3}
						/>
					</div>
				</div>
				<div className='freelance-bottom'>
					<p>
						I can’t spill the beans just yet so this is all I can show you, FOR
						NOW!
					</p>
				</div>
			</div>
		</div>
	);
}
