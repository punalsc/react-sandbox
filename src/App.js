import React, { Component } from 'react';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<div className='container'>
					<Header branding='List of Super Heroes' />
					<Cards />
				</div>
			</div>
		);
	}
}

export default App;
