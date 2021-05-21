//import logo from './logo.svg';
import './App.css';
import './components/css/template.css'
import React, {Component} from 'react';

//components
import Header from './components/Header';
import Main from './components/main';
//data
import data from './data/data.json'

class App extends Component {

	state = {
		data: data
	}

	render() {
		return <div>
    	<Header />
    	<Main data={this.state.data}/>
    	</div>
	}
}

export default App;
