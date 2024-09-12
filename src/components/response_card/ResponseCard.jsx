import React from 'react';
import Typewriter from '../typewriter/TypeWriter';
import './ResponseCard.scss';

const ResponseCard = ({text}) => {

	return (
		<div className="ResponseCard">
			<Typewriter paragraph={text} />
		</div>
	);
}

export default ResponseCard;