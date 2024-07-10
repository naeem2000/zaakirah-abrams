'use client';

import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import './Nav.css';
import { bubble as Menu } from 'react-burger-menu';

export default function Nav() {
	const [openNav, setOpenNav] = useState<boolean>(false);
	const path = usePathname();

	if (path !== '/') {
		return 'Back';
	}

	return (
		<>
			<div className='naver'>
				<Menu className='naver' pageWrapId={'page-wrap'}>
					<a href='#about'>About Me</a>
					<a href='#work'>Work</a>
					<a href='#contact'>Get In Touch</a>
				</Menu>
			</div>
			<div className='nav'>
				<a href='#about'>About Me</a>
				<a href='#work'>Work</a>
				<a href='#contact'>Get In Touch</a>
			</div>
		</>
	);
}
