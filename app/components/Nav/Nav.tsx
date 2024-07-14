'use client';

import { Squash as Hamburger } from 'hamburger-react';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './Nav.css';

export default function Nav() {
	const [openNav, setOpenNav] = useState<boolean>(false);
	const path = usePathname();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const navMenu = document.getElementById('mobile-nav');
			if (navMenu) {
				if (openNav) {
					navMenu.style.transform = 'translateX(-100%)';
					document.body.style.overflowY = 'scroll';
				} else {
					navMenu.style.transform = 'translateX(0px)';
					document.body.style.overflowY = 'hidden';
				}
			}
		}
	}, [openNav]);

	if (path !== '/') {
		return (
			<Link className='back-button' href={'/'}>
				Back
			</Link>
		);
	}

	return (
		<>
			<div className='nav-button'>
				<Hamburger toggled={openNav} toggle={setOpenNav} color='white' />
			</div>
			<nav>
				<a href='#about'>About Me</a>
				<a href='#work'>Work</a>
				<a href='#contact'>Get In Touch</a>
			</nav>
			<div className='mobile-nav' id='mobile-nav'>
				<a href='#about'>About Me</a>
				<a href='#work'>Work</a>
				<a href='#contact'>Get In Touch</a>
			</div>
		</>
	);
}
