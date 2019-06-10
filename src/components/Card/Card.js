import React, { Component } from 'react';
import Button from '../Button/Button';

import { UlStyle } from './Card.style';

class Card extends Component {
	state = {
		showInfo: false,
		displayCard: true
	};

	showDetails = objKey => this.setState({ [objKey]: !this.state[objKey] });

	deleteCard = () => this.setState({ displayCard: false });

	render() {
		const {
			superhero,
			alter_ego,
			publisher,
			first_appearance
		} = this.props.eachData;
		const { showInfo, displayCard } = this.state;
		const { showDetails, deleteCard } = this;

		return (
			<>
				{displayCard && (
					<div className='card blue-grey darken-1'>
						<div className='card-content white-text'>
							<Button
								onClick={deleteCard}
								buttonClass='btn-floating btn-large red right'
								spanClass={'title'}
								iconClass={'small material-icons'}
							/>

							<button
								onClick={() => showDetails('showInfo')}
								className='card-title hover waves-effect waves-light btn'
							>
								{superhero}
								<i className='right small material-icons'>
									{!showInfo ? 'arrow_drop_down' : 'arrow_drop_up'}
								</i>
							</button>
							{showInfo && (
								<UlStyle>
									<ul>
										<li>
											<strong>Alter ego: </strong>
											{alter_ego}
										</li>
										<li>
											<strong>Publisher: </strong>
											{publisher}
										</li>
										<li>
											<strong>First appeared: </strong>
											{first_appearance}
										</li>
									</ul>
								</UlStyle>
							)}
						</div>
					</div>
				)}
			</>
		);
	}
}

export default Card;
