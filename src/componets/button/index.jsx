import React from 'react';

const borderStyles = "border-2 border-black rounded-lg";
const filledStyles = "text-almost-white bg-black rounded-lg font-bold py-4 px-6 mx-0 hover:bg-transparent hover:text-black border-2 border-black rounded-lg";

export default function Button({children='', hasBorder = false,
 isFilled = false }) {
	return (
		<button className= {`text-medium-gray px-5 py-2 
			${hasBorder && borderStyles} ${isFilled && filledStyles}`}>
			{children}
		</button>
	);
}