import React, {Component} from 'react';

//images
import photosnap from './images/photosnap.svg';
import manage from './images/manage.svg';

export default class Main extends Component {
	
	filterSkill = (e) => {
		//console.log(e.currentTarget)
		let skill = e.target.innerText;
		//console.log(skill);
		let filteredSkill = this.props.data.find(person => {
			return skill === person.role || skill === person.level || skill === person.languages.find(language => language == skill)
		})
		console.log(filteredSkill)
		this.appendFilter(filteredSkill)
	}

	appendFilter = (filteredSkill) => {
		return <li>{filteredSkill}</li>
	}

	render() {
		const data = this.props.data;
		console.log(data)
		return (<main>
			<div className="filter_container">
				<ul className="skills">
                	<li className="role" >Frontend<span className="X">X</span></li>
                	<li className="level">Senior</li>
                	{this.appendFilter}
            	</ul>
            	<span className="clear">Clear</span>
			</div>
			<section className="items item1">
            <div className="logo_description">
                <figure className="logo">
                    <img src={photosnap} alt="photosnap logo" />
                </figure>
                <article className="description">
                    <div className="logo_name">
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
                <li className="role" onClick={this.filterSkill}>Frontend</li>
                <li className="level" onClick={this.filterSkill}>Senior</li>
                <li className="languages">HTML</li>
                <li className="languages">CSS</li>
                <li className="languages">JavaScript</li>
            </ul>
        </section>
        <section className="items item2">
            <div className="logo_description">
                <figure className="logo">
                    <img src={manage} alt="manage logo"/>
                </figure>
                <article className="description">
                    <div className="logo_name">
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