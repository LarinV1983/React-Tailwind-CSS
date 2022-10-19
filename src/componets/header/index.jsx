import React from 'react';
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import Navigation from '../navigation';

export default function Header() {
	return (
		<header className = 'flex'>
			<LogoIcon />
			<nav className='flex'>
				<Navigation text='Features' />
				<Navigation text='Company' />
				<Navigation text='Careers' />
				<Navigation text='About' />
			</nav>
		</header>
	);
}