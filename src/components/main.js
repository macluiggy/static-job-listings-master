import React, {Component} from 'react';

//images
import photosnap from './images/photosnap.svg';
import manage from './images/manage.svg';

import Filter from './Filter';

export default class Main extends Component {

	state = {
		skills: []
	}

	filterSkill = (e) => {
		//console.log(e.currentTarget)
		let skill = e.target.innerText;
		console.log(this.props.data)
		//console.log(skill);
		for(let i = 0, length1 = this.props.data.length; i < length1; i++){
			let person = this.props.data[i]
			if (person.role === skill || person.level === skill) {
				// statement
				this.setState({
					skills: [...this.state.skills, skill]
				})
			}
		}
		//this.appendFilter(filteredSkill)
	}

	

	render() {
		const data = [...new Set(this.state.skills)]
		console.log(data)
		//console.log(data)
		return (<main>
			<div className="filter_container">
				<ul className="skills">
                	<li className="role" >Frontend<span className="X">X</span></li>
                	<li className="level">Senior</li>
                	{data.map(skill => {
                		return <li>{skill}</li>
                	})}
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
                <li className="role" onClick={this.filterSkill}>Fullstack</li>
                <li className="level">Midweight</li>
                <li className="languages">Python</li>
                <li className="languages">React</li>
            </ul>
        </section>
		</main>)
	}
}