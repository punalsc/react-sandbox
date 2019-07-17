import React, { Component } from 'react';
import { Consumer } from '../../context';

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
												<input
													placeholder='Enter Superhero name'
													id='superhero_name'
													type='text'
													className='validate white-text'
													value={superhero}
													name='superhero'
													onChange={onChange}
												/>
												<label htmlFor='superhero_name' className='active'>
													Superhero
												</label>
											</div>
											<div className='input-field col s6'>
												<input
													placeholder='Enter alter ego'
													id='alter_ego_name'
													type='text'
													className='validate white-text'
													value={alter_ego}
													name='alter_ego'
													onChange={onChange}
												/>
												<label htmlFor='alter_ego_name' className='active'>
													Alter ego
												</label>
											</div>
											<div className='input-field col s6'>
												<input
													className='white-text validate'
													placeholder='Enter publisher'
													id='publisher'
													type='text'
													value={publisher}
													name='publisher'
													onChange={onChange}
												/>
												<label htmlFor='publisher' className='active'>
													Publisher
												</label>
											</div>
											<div className='input-field col s12'>
												<input
													placeholder='Enter the first appearance in a comic'
													id='first_appearance'
													type='text'
													className='validate white-text'
													value={first_appearance}
													onChange={onChange}
													name='first_appearance'
												/>
												<label htmlFor='first_appearance' className='active'>
													First appearance
												</label>
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
