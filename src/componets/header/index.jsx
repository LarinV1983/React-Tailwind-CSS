import React from 'react';
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import Navigation from '../navigation';
import NavMenu from '../navMenu';
import { COMPANY, FEATURES } from './constant';

export default function Header() {
	return (
		<header className = 'flex'>
			<LogoIcon />
			<nav className='flex space-x-6 ml-8 items-center'>
				<Navigation text='Features' >
				<NavMenu items= {FEATURES} />
				</Navigation>
				<Navigation text='Company'>
				<NavMenu items= {COMPANY} />
				</Navigation>
				<Navigation text='Careers'>
				</Navigation>
				<Navigation text='About'>
				</Navigation>
			</nav>
		</header>
	);
}