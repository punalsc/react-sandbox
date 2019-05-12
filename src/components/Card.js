import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class Card extends Component {
	state = {
		showInfo: false
	};

	showDetails = () => this.setState({ showInfo: !this.state.showInfo });

	render() {
		const {
			superhero,
			alter_ego,
			publisher,
			first_appearance
		} = this.props.eachData;
		const { showInfo } = this.state;
		return (
			<div className='card blue-grey darken-1'>
				<div className='card-content white-text'>
					<span onClick={this.showDetails} className='card-title hover'>
						{superhero}
						<i className='right small material-icons'>
							{!showInfo ? 'arrow_drop_down' : 'arrow_drop_up'}
						</i>
					</span>
					{showInfo && (
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
					)}
				</div>
			</div>
		);
	}
}

export default Card;
