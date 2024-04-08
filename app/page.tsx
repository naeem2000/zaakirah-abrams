import Image from 'next/image';

export default function Home() {
	return (
		<>
			<section className='hero'>
				<h1>
					Zaakirah Abrams | a designer focused on creating user-centric
					experiences and great visuals
				</h1>
			</section>
			<section className='gallery'>
				<div className='top-gal'>
					<div className='img-container'>
						<Image src='/1.png' alt='1' layout='fill' objectFit='cover' />
						<div className='overlay'>
							<p>Anigram</p>
							<p>Social Media &nbsp; | &nbsp; UI/ UX Design</p>
						</div>
					</div>
					<div className='img-container'>
						<Image src='/2.png' alt='2' layout='fill' objectFit='cover' />
						<div className='overlay'>
							<p>Anigram</p>
							<p>Social Media &nbsp; | &nbsp; UI/ UX Design</p>
						</div>
					</div>
					<div className='img-container'>
						<Image src='/3.png' alt='3' layout='fill' objectFit='cover' />
						<div className='overlay'>
							<p>Anigram</p>
							<p>Social Media &nbsp; | &nbsp; UI/ UX Design</p>
						</div>
					</div>
				</div>
				<div className='bot-gal'>
					<div className='img-container'>
						<Image src='/4.png' alt='4' layout='fill' objectFit='cover' />
						<div className='overlay'>
							<p>Anigram</p>
							<p>Social Media &nbsp; | &nbsp; UI/ UX Design</p>
						</div>
					</div>
					<div className='img-container'>
						<Image src='/5.png' alt='5' layout='fill' objectFit='cover' />
						<div className='overlay'>
							<p>Anigram</p>
							<p>Social Media &nbsp; | &nbsp; UI/ UX Design</p>
						</div>
					</div>
				</div>
			</section>
			<section className='get-in-touch'>
				<h2>Get in touch</h2>
				<p>Want to discuss a project, have a job offer or say Hello? </p>
				<p>
					<span>Drop me a message</span>, I’d love to get back to you :)
				</p>
			</section>
		</>
	);
}
