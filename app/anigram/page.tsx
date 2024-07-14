import Image from 'next/image';
import React from 'react';
import './anigram.css';
import Nav from '../components/Nav/Nav';

export default function page() {
	return (
		<section className='anigram'>
			<Nav />
			<div className='max-width'>
				<div className='anigram-head'>
					<h1>WHOOPS... NOTHING MORE TO SEE HERE</h1>
					<p>
						Excitement mounts as I prepare to unveil the latest creation. Stay
						tuned to witness the unfolding of what Anigram will be.
					</p>
				</div>
				<div className='anigram-body'>
					<Image src={'/pet1.png'} width={500} height={800} alt='pet 1' />
					<Image src={'/pet2.png'} width={500} height={800} alt='pet 2' />
				</div>
			</div>
		</section>
	);
}
