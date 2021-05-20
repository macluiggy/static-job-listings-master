//import logo from './logo.svg';
import './App.css';
import './components/css/template.css'
import React, {Component} from 'react';

//components
import Header from './components/Header';
import Main from './components/main'

class App extends Component {

	render() {
		return <div>
    	<Header />
    	<Main />
    	</div>
	}
}

export default App;
