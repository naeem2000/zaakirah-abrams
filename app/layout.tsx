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
				{children}
				<Footer />
			</body>
		</html>
	);
}
