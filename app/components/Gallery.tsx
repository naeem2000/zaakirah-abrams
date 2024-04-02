import Image from 'next/image';
import React from 'react';

export default function Gallery() {
	return (
		<section className='gallery'>
			<div className='top-gal'>
				<Image src={'/1.png'} alt='1' width={500} height={500} />
				<Image src={'/2.png'} alt='2' width={500} height={500} />
				<Image src={'/3.png'} alt='3' width={500} height={500} />
			</div>
			<div className='bot-gal'>
				<Image src={'/4.png'} alt='4' width={500} height={500} />
				<Image src={'/5.png'} alt='5' width={500} height={500} />
			</div>
		</section>
	);
}
