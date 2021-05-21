import React, {Component} from 'react';

export default class Filter extends Component {
	
	render() {
		return this.props.persons.map(person => {
			return person.role
		})
	}
}