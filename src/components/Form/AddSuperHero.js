import React, { Component } from 'react';

class AddSuperHero extends Component {
	render() {
		const noBorder = {
			border: 'none'
		};
		return (
			<div className='card blue-grey darken-1'>
				<div className='card-content white-text'>
					<form>
						<fieldset style={noBorder}>
							<div className='row'>
								<div className='input-field col s12'>
									<input
										placeholder='Enter Superhero name'
										id='superhero_name'
										type='text'
										className='validate white-text'
									/>
									<label htmlFor='superhero_name' className='active'>
										Alter ego
									</label>
								</div>
								<div className='input-field col s6'>
									<input
										placeholder='Enter alter ego'
										id='alter_ego_name'
										type='text'
										className='validate white-text'
									/>
									<label htmlFor='alter_ego_name' className='active'>
										Alter ego
									</label>
								</div>
								<div className='input-field col s6'>
									<input
										className='white-text validate'
										placeholder='Enter superhero name here'
										id='publisher'
										type='text'
									/>
									<label htmlFor='publisher' className='active'>
										Publisher
									</label>
								</div>
								<div className='input-field col s12'>
									<input
										placeholder='First appearance'
										id='first_appearance'
										type='text'
										className='validate white-text'
									/>
									<label htmlFor='first_appearance' className='active'>
										Alter ego
									</label>
								</div>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		);
	}
}

export default AddSuperHero;
