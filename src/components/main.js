import React, {Component} from 'react';

//images
import logo from './images/photosnap.svg'

export default class Main extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (<main>
			<section className="items item1">
            <div>
                <figure className="logo">
                    <img src={logo} alt="photosnap logo" />
                </figure>
                <p className="photosnap">Photosnap</p>
                <span className="new">New!</span>
                <span className="featured">Featured</span>f
                <h4>Senior Frontend Developer</h4>
                <ul className="time_location">
                    <li>1d ago</li>
                    <li>Full Time</li>
                    <li>USA only</li>
                </ul>
            </div>
            <ul className="skills">
                <li className="role">Frontend</li>
                <li className="level">Senior</li>
                <li className="languages">HTML</li>
                <li className="languages">CSS</li>
                <li className="languages">JavaScript</li>
            </ul>
        </section>
		</main>)
	}
}