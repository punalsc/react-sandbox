import React from 'react';
import Card from '../Card/Card';

import { Consumer } from '../../context';

const Cards = () => {
	return (
		<div className='cardWrapper'>
			<Consumer>
				{value => {
					const { superHeroData } = value;
					return superHeroData.map((eachData, index) => (
						<Card key={index} eachData={eachData} />
					));
				}}
			</Consumer>
		</div>
	);
};

export default Cards;
