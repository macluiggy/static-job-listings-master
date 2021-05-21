import React, { Component } from 'react';

import { $$, $, p } from './functions.js'
//images
import photosnap from './images/photosnap.svg';
import manage from './images/manage.svg';

import Filter from './Filter';

let skills = $$('.skills').childNodes;

export default class Main extends Component {

    state = {
        skills: [],
        cardContainer: "items item1",
        none: "none"
    }

    filterSkill = (e) => {
        //console.log(e.currentTarget)
        let skill = e.target.innerText;
        console.log(this.props.data)
        //console.log(skill);
        for (let i = 0, length1 = this.props.data.length; i < length1; i++) {
            let person = this.props.data[i]
            if (person.role === skill || person.level === skill) {
                // statement
                this.setState({
                    skills: [...this.state.skills, skill]
                })
            }
            for (let i = 0, length1 = person.languages.length; i < length1; i++) {
                let language = person.languages[i]
                if (language === skill) {
                    // statement
                    this.setState({
                        skills: [...this.state.skills, skill]
                    })
                }
            }
        }
    }



    render() {
        const skills = [...new Set(this.state.skills)]
        console.log(skills)
        //console.log(data)
        return (<main>
			<div className='filter_container'>
				<ul className="skills">
                	<li className="role" >Frontend<span className="X">X</span></li>
                	<li className="level">Senior</li>
                	{skills.map(skill => {
                		return <li key={skill.id}>{skill}</li>
                	})}
            	</ul>
            	<span className="clear">Clear</span>
			</div>
			<section className={this.state.cardContainer}>
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
                <li className="languages" onClick={this.filterSkill}>HTML</li>
                <li className="languages" onClick={this.filterSkill}>CSS</li>
                <li className="languages" onClick={this.filterSkill}>JavaScript</li>
            </ul>
        </section>
        <section className={this.state.cardContainer}>
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