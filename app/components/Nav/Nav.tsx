'use client';

import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import './Nav.css';

export default function Nav() {
	const [openNav, setOpenNav] = useState<boolean>(false);
	const path = usePathname();

	// if (path !== '/') {
	// 	return 'awe';
	// }

	return (
		<nav>
			<a href='#about'>About Me</a>
			<a href='#work'>Work</a>
			<a href='#contact'>Get In Touch</a>
		</nav>
	);
}
