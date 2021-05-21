import React, {Component} from 'react';

//images
import photosnap from './images/photosnap.svg';
import manage from './images/manage.svg';

export default class Main extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {data} = this.props.data;
		return (<main>
			<div className="filter_container">
				<ul className="skills">
                	<li className="role">Frontend <span className="X">X</span></li>
                	<li className="level">Senior</li>
                	<li className="languages">HTML</li>
                	<li className="languages">CSS</li>
                	<li className="languages">JavaScript</li>
            	</ul>
            	<span className="clear">Clear</span>
			</div>
			<section className="items item1">
            <div className="logo_description">
                <figure className="logo">
                    <img src={photosnap} alt="photosnap logo" />
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
        <section className="items item1">
            <div className="logo_description">
                <figure className="logo">
                    <img src={manage} />
                </figure>
                <article class="description">
                    <div class="logo_name">
                        <span className="logo_name_span">Manage</span>
                        <span className="new">New!</span>
                        <span className="featured">Featured</span>
                    </div>
                    <h4>Fullstack Developer</h4>
                    <ul className="time_location">
                        <li>1d ago</li>
                        <li>Part Time</li>
                        <li>Remote</li>
                    </ul>
                </article>
            </div>
            <ul className="skills">
                <li className="role">Fullstack</li>
                <li className="level">Midweight</li>
                <li className="languages">Python</li>
                <li className="languages">React</li>
            </ul>
        </section>
		</main>)
	}
}