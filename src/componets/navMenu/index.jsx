import React from 'react';

export default function NavMenu({items=[]}) {
	return (
		<div>
			{items.map(({text}) => <span>{text}</span>)}
		</div>
	);
}