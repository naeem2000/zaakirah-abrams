import Image from 'next/image';
import './photography.css';
import React from 'react';
import Footer from '../components/Footer';

export default function page() {
	return (
		<section className='photo'>
			<div className='photo-head'>
				<Image src={'/camera-lens.png'} width={300} height={300} alt='lens' />
				<h1>Explore My Hobby</h1>
			</div>
			<div className='photo-by'>
				<h2>Photography taken by zaakirah abrams</h2>
				<p>The hobby that made me a social media lead</p>
				<a href='#gal'>EXPLORE THE PAGE</a>
			</div>
			<div className='gallery max-width' id='gal'>
				<div>
					<Image
						src='/photography-gallery/1.png'
						alt='1'
						width={600}
						height={400}
					/>
					<Image
						src='/photography-gallery/2.png'
						alt='2'
						width={600}
						height={400}
					/>
					<Image
						src='/photography-gallery/3.png'
						alt='3'
						width={600}
						height={400}
					/>
				</div>
				<div>
					<Image
						src='/photography-gallery/4.png'
						alt='4'
						width={450}
						height={650}
					/>
					<Image
						src='/photography-gallery/5.png'
						alt='5'
						width={450}
						height={650}
					/>
					<Image
						src='/photography-gallery/6.png'
						alt='6'
						width={450}
						height={650}
					/>
					<Image
						src='/photography-gallery/7.png'
						alt='7'
						width={450}
						height={650}
					/>
				</div>
			</div>
			<div className='mid-gal'>
				<h2>CAPTURING EVERY MOMENT THE LENS CATCHES</h2>
				<p>MOSTLY FOCUSING ON TEENAGE MODELS</p>
			</div>
			<div className='mid-gal-photo max-width'>
				<Image
					src='/photography-gallery/8.png'
					alt='8'
					width={450}
					height={650}
				/>
				<Image
					src='/photography-gallery/9.png'
					alt='9'
					width={450}
					height={650}
				/>
				<Image
					src='/photography-gallery/10.png'
					alt='10'
					width={450}
					height={650}
				/>
				<Image
					src='/photography-gallery/11.png'
					alt='11'
					width={450}
					height={650}
				/>
			</div>
			<div className='bot-gal'>
				<h2>images i took as a social lead </h2>
				<p>
					these images were captured to showcase the daily endeavors of the
					candidates
				</p>
				<div className='bot-row max-width'>
					<Image
						src='/photography-gallery/12.png'
						alt='12'
						width={600}
						height={400}
					/>
					<Image
						src='/photography-gallery/13.png'
						alt='13'
						width={600}
						height={400}
					/>
					<Image
						src='/photography-gallery/14.png'
						alt='14'
						width={600}
						height={400}
					/>
				</div>
				<a href=''>CHECK OUT THEIR INSTAGRAM</a>
			</div>
			<Footer />
		</section>
	);
}
