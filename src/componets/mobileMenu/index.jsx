import React from 'react';
import Navigation from '../navigation';
import Button from '../button';
import MenuItem from '../menuItem';
import { FEATURES, COMPANY } from '../header/constant';

export default function MobileMenu({isOpen=false}) {
	return (
		<>
			<div className={`absolute top-0 left-0 right-0 bg-black opacity-50 z-10 min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`}>
			</div>
			<div className={`absolute right-0 top-0 w-1/2 bg-white z-20 justify-center min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`}>
			<nav className='my-20 mx-5 space-y-5 text-lg w-full'>
				<Navigation text='Features' >
				<div className="mobile-menu-items">
              {FEATURES.map(({ text, icon }) => <MenuItem text={text} icon={icon} key={text} />)}
          </div>
				</Navigation>
				<Navigation text='Company'>
			 <div className="mobile-menu-items">
              {COMPANY.map(({ text, icon }) => <MenuItem text={text} icon={icon} key={text} />)}
          </div>
				</Navigation>
				<Navigation text='Careers'>
				</Navigation>
				<Navigation text='About'>
				</Navigation>
				<div className='flex flex-col space-y-5'>
				<Button>Loggin</Button>
				<Button hasBorder={true}>Register</Button>
			</div>
			</nav>
			</div>
		</>
	);
}