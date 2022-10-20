import React from 'react';
import MenImage from '../../images/image-hero-desktop.png';
import MenImageMobile from '../../images/image-hero-mobile.png';
import { ReactComponent as Databiz } from '../../images/client-databiz.svg';
import { ReactComponent as Audiophile } from '../../images/client-audiophile.svg';
import { ReactComponent as Meet } from '../../images/client-meet.svg';
import { ReactComponent as Maker } from '../../images/client-maker.svg';
import Button from '../button';

export default function Section() {
	return (
		<section className='flex flex-col xl:flex-row mt-6 w-full h-screen justify-between'>
			<div className='relative order-2 xl:order-1 text-center xl:text-left mt-12 xl:mt-6'>
				<h1 className='text-3x1 xl:text-8xl font-black xl:whitespace-pre-line mt-6'>
				{`Make remote work`}
				</h1>
				<p className='text-gray text-lg my-12 whitespace-pre-line'>
					 {`Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n Amet ullam dolorum animi atque vitae exercitationem\n quibusdam maiores adipisci qui harum.`}
				</p>
				<Button isFilled={ true }>Learn More</Button>
            <div className="flex justify-around xl:absolute mt-20 bottom-2 w-full">
                <Databiz />
                <Audiophile />
                <Meet />
                <Maker />
            </div>
        </div>
        <div className="hidden flex w-2/4 mt-20 xl:order-2">
            <img src={ MenImage } alt="men" />
        </div>
        <div className="flex justify-center w-full mb-8 order-1">
            <img src={ MenImageMobile } alt="hero" />
        </div>
		</section>
	);
}