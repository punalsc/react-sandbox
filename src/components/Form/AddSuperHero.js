import React, { Component } from 'react';
import { Consumer } from '../../context';
import Input from '../Input/Input';

class AddSuperHero extends Component {
	state = {
		superhero: '',
		alter_ego: '',
		publisher: '',
		first_appearance: '',
		errors: {}
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	onSubmit = (dispatch, e) => {
		const { superhero, alter_ego, publisher, first_appearance } = this.state;

		e.preventDefault();

		if (superhero === '') {
			this.setState({ errors: { superhero: 'Please fill in field' } });
			return;
		}
		if (alter_ego === '') {
			this.setState({ errors: { alter_ego: 'Please fill in field' } });
			return;
		}
		if (publisher === '') {
			this.setState({ errors: { publisher: 'Please fill in field' } });
			return;
		}
		if (first_appearance === '') {
			this.setState({ errors: { first_appearance: 'Please fill in field' } });
			return;
		}

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
			first_appearance: '',
			errors: {}
		});
	};

	render() {
		const noBorder = {
			border: 'none'
		};

		const errorMsgStyle = {
			color: '#fb8a8e'
		};

		const errorStyle = {
			borderBottom: '1px solid #fb8a8e',
			boxShadow: '0 1px 0 0 #fb8a8e'
		};

		const {
			superhero,
			alter_ego,
			publisher,
			first_appearance,
			errors
		} = this.state;
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
												<Input
													placeholder='Enter Superhero name'
													id='superhero_name'
													type='text'
													inputClass='validate white-text'
													value={superhero}
													name='superhero'
													onChange={onChange}
													labelClass='active'
													labelTitle='Superhero'
													errorStyle={errors.superhero ? errorStyle : null}
													errorMsgStyle={errors ? errorMsgStyle : null}
													errorMsg={errors.superhero}
												/>
											</div>
											<div className='input-field col s6'>
												<Input
													placeholder='Enter alter ego'
													id='alter_ego_name'
													type='text'
													inputClass='validate white-text'
													value={alter_ego}
													name='alter_ego'
													onChange={onChange}
													labelClass='active'
													labelTitle='Alter ego'
													errorStyle={errors.alter_ego ? errorStyle : null}
													errorMsgStyle={errorMsgStyle}
													errorMsg={errors.alter_ego}
												/>
											</div>
											<div className='input-field col s6'>
												<Input
													placeholder='Enter publisher'
													id='publisher'
													type='text'
													inputClass='validate white-text'
													value={publisher}
													name='publisher'
													onChange={onChange}
													labelClass='active'
													labelTitle='Publisher'
													errorStyle={errors.publisher ? errorStyle : null}
													errorMsgStyle={errorMsgStyle}
													errorMsg={errors.publisher}
												/>
											</div>
											<div className='input-field col s12'>
												<Input
													placeholder='Enter the first appearance in a comic'
													id='first_appearance'
													type='text'
													inputClass='validate white-text'
													value={first_appearance}
													name='first_appearance'
													onChange={onChange}
													labelClass='active'
													labelTitle='First appearance'
													errorStyle={
														errors.first_appearance ? errorStyle : null
													}
													errorMsgStyle={errorMsgStyle}
													errorMsg={errors.first_appearance}
												/>
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
