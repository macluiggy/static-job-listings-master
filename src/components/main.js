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
            <div className="logo_description">
                <figure className="logo">
                    <img src={logo} alt="photosnap logo" />
                </figure>
                <article class="description">
                    <div class="logo_name">
                        <span className="logo_name_span">Photosnap</span>
                        <span className="new">New!</span>
                        <span className="featured">Featured</span>
                    </div>
                    <h4>Senior Frontend Developer</h4>
                    <ul className="time_location">
                        <li>1d ago</li>
                        <li>Full Time</li>
                        <li>USA only</li>
                    </ul>
                </article>
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