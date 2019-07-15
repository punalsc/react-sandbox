import React from 'react';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import AddSuperHero from './components/Form/AddSuperHero';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import { Provider, Consumer } from './context';

const App = () => {
	return (
		<Provider>
			<div className='App'>
				<div className='container'>
					<Consumer>
						{value => {
							const { header } = value;
							return <Header branding={header} />;
						}}
					</Consumer>

					<AddSuperHero />
					<Cards />
				</div>
			</div>
		</Provider>
	);
};

export default App;
