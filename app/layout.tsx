import AnimatedCursor from 'react-animated-cursor';
import Footer from './components/Footer';
import type { Metadata } from 'next';
import './globals.css';
import Nav from './components/Nav/Nav';

export const metadata: Metadata = {
	title: 'Zaakirah Abrams',
	description: 'Developed by Naeem Carr',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<div className='cursor'>
					<AnimatedCursor
						innerSize={17}
						outerSize={7}
						color='193, 11, 111'
						innerScale={0.7}
						outerScale={5}
						clickables={[
							'a',
							'input[type="number"]',
							'input[type="submit"]',
							'input[type="email"]',
							'input[type="image"]',
							'input[type="text"]',
							'.img-container',
							'label[for]',
							'textarea',
							'select',
							'button',
							'.link',
							'.tag',
						]}
					/>
				</div>
				{children} <Footer />
			</body>
		</html>
	);
}
