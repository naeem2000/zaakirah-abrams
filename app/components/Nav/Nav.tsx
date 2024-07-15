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
		const mobileNav = document.getElementById('mobile-nav');
		if (mobileNav) {
			if (openNav) {
				mobileNav.classList.add('translated');
				document.body.style.overflowY = 'hidden';
			} else {
				mobileNav.classList.remove('translated');
				document.body.style.overflowY = 'scroll';
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
				<Hamburger
					onToggle={() => setOpenNav(!openNav)}
					toggled={openNav}
					color='white'
				/>
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
