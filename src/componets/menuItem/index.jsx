import React from 'react';

export default function MenuItem({text='', icon}) {
	return (
		<div className='flex w-full space-x-4'>
			{icon}
			<span className='text-gray 
			hover:text-black cursor-pointer'>
			{text}</span>
		</div>
	);
}