import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

//import PropTypes from 'prop-types';

class Card extends Component {
	state = {
		showInfo: false,
		displayCard: true
	};

	showDetails = () => this.setState({ showInfo: !this.state.showInfo });

	render() {
		const keyFrameExample = keyframes`
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
		}`;

		const UlStyle = styled.ul`
			opacity: 1;
			animation-name: ${keyFrameExample};
			animation-iteration-count: 1;
			animation-timing-function: ease-in;
			animation-duration: 0.5s;
		`;

		const {
			superhero,
			alter_ego,
			publisher,
			first_appearance
		} = this.props.eachData;
		const { showInfo, displayCard } = this.state;
		return (
			<>
				{displayCard && (
					<div className='card blue-grey darken-1'>
						<div className='card-content white-text'>
							<span onClick={this.showDetails} className='card-title hover'>
								{superhero}
								<i className='right small material-icons'>
									{!showInfo ? 'arrow_drop_down' : 'arrow_drop_up'}
								</i>
							</span>
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
