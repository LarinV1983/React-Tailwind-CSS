import React from 'react';
import { ReactComponent as ArrowDownIcon } from '../../images/icon-arrow-down.svg';

export default function Navigation({text='navi'}) {
	return (
		<div className='relative'>
			<div className='flex space-x-2 cursor-pointer'>
				<span className='text-medium-gray 
				hover:text-almost-black'>{text}</span>
				<ArrowDownIcon />
			</div>
		</div>
	);
}