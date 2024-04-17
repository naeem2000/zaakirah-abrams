import AnimatedCursor from 'react-animated-cursor';
import Footer from './components/Footer';
import type { Metadata } from 'next';
import './globals.css';

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
				<AnimatedCursor
					innerSize={17}
					outerSize={7}
					color='193, 11, 111'
					innerScale={0.7}
					outerScale={5}
					clickables={[
						'a',
						'input[type="text"]',
						'input[type="email"]',
						'input[type="number"]',
						'input[type="submit"]',
						'input[type="image"]',
						'label[for]',
						'select',
						'textarea',
						'button',
						'.link',
						'.tag',
					]}
				/>
				{children}
				<Footer />
			</body>
		</html>
	);
}
