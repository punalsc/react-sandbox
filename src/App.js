import React, { Component } from 'react';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import { Provider, Consumer } from './context';

class App extends Component {
	render() {
		return (
			<Provider>
				<div className='App'>
					<div className='container'>
						<Consumer>
							{value => {
								const { header } = value;
								return <Header branding={header} />;
							}}
							{/* <Header branding={header.header} /> */}
						</Consumer>

						<Cards />
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
