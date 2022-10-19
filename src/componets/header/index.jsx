import React from 'react';
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import Navigation from '../navigation';

export default function Header() {
	return (
		<header className = 'flex'>
			<LogoIcon />
			<nav>
				<Navigation />
			</nav>
		</header>
	);
}