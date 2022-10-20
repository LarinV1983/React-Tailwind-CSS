import React from 'react';
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import Navigation from '../navigation';
import NavMenu from '../navMenu';
import Button from '../button';
import  MobileMenu from '../mobileMenu';
import { COMPANY, FEATURES } from './constant';
import { ReactComponent as MenuIcon } from '../../images/icon-menu.svg'; 
import { ReactComponent as CloseMenuIcon } from '../../images/icon-close-menu.svg'; 

export default function Header() {
	const [MobileMenuOpen, setMobileMenuOpen] = React.useState(false);
	return (
		<header className = 'flex items-center'>
			<LogoIcon />
			<nav className='hidden xl:flex space-x-6 ml-8 items-center'>
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
			<div className='hidden xl:flex ml-auto cursor-pointer space-x-5'>
				<Button>Loggin</Button>
				<Button hasBorder={true}>Register</Button>
			</div>
			<div className='flex xl:hidden ml-auto cursor-pointer z-30'
			onClick={()=>setMobileMenuOpen(!MobileMenuOpen)}
			>
				{MobileMenuOpen ? <CloseMenuIcon/> : <MenuIcon/>}
			</div>
			<MobileMenu isOpen={MobileMenuOpen}/>

		</header>
	);
}