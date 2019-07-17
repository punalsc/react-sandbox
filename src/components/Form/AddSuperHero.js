import React, { Component } from 'react';
import { Consumer } from '../../context';
import Input from '../Input/Input';

class AddSuperHero extends Component {
	state = {
		superhero: '',
		alter_ego: '',
		publisher: '',
		first_appearance: ''
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	onSubmit = (dispatch, e) => {
		e.preventDefault();
		const { superhero, alter_ego, publisher, first_appearance } = this.state;

		const newSuperHero = {
			superhero,
			alter_ego,
			publisher,
			first_appearance
		};

		dispatch({ type: 'ADD_CARD', payload: newSuperHero });

		this.setState({
			superhero: '',
			alter_ego: '',
			publisher: '',
			first_appearance: ''
		});
		console.log(this.state);
	};

	render() {
		const noBorder = {
			border: 'none'
		};
		const { superhero, alter_ego, publisher, first_appearance } = this.state;
		const { onChange, onSubmit } = this;

		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<div className='card blue-grey darken-1'>
							<div className='card-content white-text'>
								<form onSubmit={onSubmit.bind(this, dispatch)}>
									<fieldset style={noBorder}>
										<div className='row'>
											<div className='input-field col s12'>
												<Input placeholder='Enter Superhero name' id='superhero_name' type='text' inputClass='validate white-text' value={superhero} name='superhero' onChange={onChange} labelClass='active' labelTitle='Superhero' />
											</div>
											<div className='input-field col s6'>
												<Input placeholder='Enter alter ego' id='alter_ego_name' type='text' inputClass='validate white-text' value={alter_ego} name='alter_ego' onChange={onChange} labelClass='active' labelTitle='Alter ego' />
											</div>
											<div className='input-field col s6'>
												<Input placeholder='Enter publisher' id='publisher' type='text' inputClass='validate white-text' value={publisher} name='alter_ego' onChange={onChange} labelClass='active' labelTitle='Publisher' />
											</div>
											<div className='input-field col s12'>
												<Input placeholder='Enter the first appearance in a comic' id='first_appearance' type='text' inputClass='validate white-text' value={first_appearance} name='first_appearance' onChange={onChange} labelClass='active' labelTitle='First appearance' />
												
											</div>
										</div>
										<button
											className='btn waves-effect waves-light right'
											type='submit'
											name='action'
										>
											Add super hero
											<i className='material-icons right'>add</i>
										</button>
									</fieldset>
								</form>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default AddSuperHero;
