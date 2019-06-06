import React, { Component } from 'react';
import Card from '../Card/Card';
import { superHeroData } from '../../Data';

class Cards extends Component {
	state = {
		superHeroData
	};

	render() {
		const { superHeroData } = this.state;
		return (
			<div className='cardWrapper'>
				{superHeroData.map((eachData, index) => (
					<Card key={index} eachData={eachData} />
				))}
			</div>
		);
	}
}

export default Cards;
