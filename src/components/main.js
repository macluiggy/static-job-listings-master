import React, { Component } from 'react';

import { $$, $, p } from './functions.js'
//images
import photosnap from './images/photosnap.svg';
import manage from './images/manage.svg';
import account from './images/account.svg';
import myHome from './images/myhome.svg';
import loopStudios from './images/loop-studios.svg';
import facelt from './images/faceit.svg';
import shortly from './images/shortly.svg';
import insure from './images/insure.svg';
import eyecam from './images/eyecam-co.svg'
import theAirFilterCompany from './images/the-air-filter-company.svg';

import Filter from './Filter';

/*
let skills = $$('.skills');

function checkIfAreTheSame(arr) {
    // body... 
    for (let i = 0, length1 = skills.length; i < length1; i++) {
        let skill = skills[i].childNodes;
        for (let j = 0, length1 = skill.length; j < length1; j++) {
            let item = skill[j];
            //p(item)
            for(let k = 0, length1 = arr.length; k < length1; k++){
            	let el = arr[k];
            	//console.log(el)
            	p(item.innerText == el)
            	p(skills[i].parentNode)
            	if (item.innerText !== el) {
            		// statement
            		skills[i].parentNode.className = 'none';
            	}
            }
        }
    }
}
*/

export default class Main extends Component {

    state = {
        skills: [],
        cardContainer: "items item1",
        none: "none",
        sections: ["one", 'two', "three", 'four', 'five', "six", 'seven', 'eight', 'nine', 'ten'],
        sectionsFixed: ['one', "two", 'three', 'four', 'five', "six", 'seven', 'eight', 'nine', 'ten']
    }

    


    filterSkill = (e) => {
        //console.log(e.currentTarget)
        let skill = e.target.innerText;
        //console.log(this.props.data)
        //console.log(skill);
        this.setState({
        	skills: [...this.state.skills, skill]
        })
        /*for (let i = 0, length1 = this.props.data.length; i < length1; i++) {
            let person = this.props.data[i]
            let skillsArray = [person.role, person.level, ...person.languages, ...person.tools];
            for(let i = 0, length1 = skillsArray.length; i < length1; i++){
            	
            	if (skill === skillsArray[i]) {
            		// statement
            		this.setState({
            			skills: [...this.state.skills, skill]
            		})
            	}
            }
            
        }*/
        //llama otra funcion
        this.filterContainer(skill);

    	this.showSkillsContainer();
    }

    filterContainer = (skill) => {
    	let array = this.props.data;
    	let arr2 = [...new Set([...this.state.skills, skill])];
    	
    	for(let i = 0, length1 = array.length; i < length1; i++){
    		let person = array[i];
    		const arrSinLimites = [person.role, person.level, ...person.languages, ...person.tools];
    		const arr1 = [...new Set(arrSinLimites)];
    		let test = arr1.some(i => arr2.includes(i));
    		//p(arr2)
    		//p(arr1)
    		//p(test)
    		if (test) {
    			// statement
    			this.state.sections[i] = this.state.sectionsFixed[i]
    		} else {
    			// statement
    			this.state.sections[i] = this.state.none
    		}
    	}
    	
    	/*
    	for(let i = 0, length1 = arr2.length; i < length1; i++){
    		let skill = arr2[i];
    		for(let j = 0, length1 = arr1.length; j < length1; j++){
    			let person = arr1[j];
    			if (skill === person.role || skill === person.level) {
    				// statement
    				this.state.sections[j] = this.state.sectionsFixed[j]
    			} else {
    				this.state.sections[j] = this.state.none
    			}
    			for(let k = 0, length1 = person.languages.length; k < length1; k++){
    				let language = person.languages[k]
    				if (skill === language) {
    					// statement
    					this.state.sections[j] = this.state.sectionsFixed[j]
    				} else {
    					// statement
    					this.state.sections[j] = this.state.none
    				}
    			}
    		}
    	}*/
    	/*for(let i = 0, length1 = arr1.length; i < length1; i++){
    		let person = arr1[i];
    		for(let j = 0, length1 = arr2.length; j < length1; j++){
    			let skill = arr2[j];
    			if (skill === person.role || skill === person.level) {
    				// statement
    				continue;
    			} else {
    				this.state.sections[i] = 'none'
    			}
    		}
    	}*/
    }

    clear = () => {
    	this.setState({
    		skills: []
    	})
    	this.show();
    	this.hideSkillsContainer();
    }

    show = () => {
    	for(let i = 0, length1 = this.state.sections.length; i < length1; i++){
    		this.state.sections[i] = this.state.sectionsFixed[i]
    	}
    }

    hideSkillsContainer = () => {
    	let skillsContainer = $('.filter_container');
    	skillsContainer.style.display = 'none';
    }
    showSkillsContainer = () => {
    	let skillsContainer = $('.filter_container');
    	skillsContainer.style.display = 'flex';
    }

    render() {
        const skills = [...new Set(this.state.skills)];
        let count = -1;
        //console.log(skills)
        //checkIfAreTheSame(skills)
        //console.log(data)
        return (<main>
			<div className='filter_container'>
				<ul className="skills2">
                	{[...new Set(this.state.skills)].map(skill => {
                		count++;
                		return <li key={count}>
                		<p>{skill}</p>
                		</li>;
                	})}
            	</ul>
            	<span className="clear" onClick={this.clear}>Clear</span>
			</div>
			<section id={this.state.sections[0]} className={this.state.cardContainer}>
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
        <section id={this.state.sections[1]} className='items item2'>
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
                <li className="level" onClick={this.filterSkill}>Midweight</li>
                <li className="tools" onClick={this.filterSkill}>React</li>
                <li className="languages" onClick={this.filterSkill}>Python</li>
            </ul>
        </section>
        <section id={this.state.sections[2]} className={this.state.cardContainer}>
            <div className="logo_description">
                <figure className="logo">
                    <img src={account} alt="photosnap logo" />
                </figure>
                <article className="description">
                    <div className="logo_name">
                        <span className="logo_name_span">Account</span>
                        <span className="new">New!</span>
                    </div>
                    <h4>Junior Frontend Developer</h4>
                    <ul className="time_location">
                        <li>2d ago</li>
                        <li>Part Time</li>
                        <li>USA only</li>
                    </ul>
                </article>
            </div>
            <ul className="skills">
                <li className="role" onClick={this.filterSkill}>Frontend</li>
                <li className="level" onClick={this.filterSkill}>Junior</li>
                <li className="languages" onClick={this.filterSkill}>JavaScript</li>
                <li className="tools" onClick={this.filterSkill}>React</li>
                <li className="tools" onClick={this.filterSkill}>Sass</li>
            </ul>
        </section>
        <section id={this.state.sections[3]} className={this.state.cardContainer}>
            <div className="logo_description">
                <figure className="logo">
                    <img src={myHome} />
                </figure>
                <article className="description">
                    <div className="logo_name">
                        <span className="logo_name_span">MyHome</span>
                    </div>
                    <h4>Junior Frontend Developer</h4>
                    <ul className="time_location">
                        <li>5d ago</li>
                        <li>Contract</li>
                        <li>USA only</li>
                    </ul>
                </article>
            </div>
            <ul className="skills">
                <li className="role" onClick={this.filterSkill}>Frontend</li>
                <li className="level" onClick={this.filterSkill}>Junior</li>
                <li className="languages" onClick={this.filterSkill}>CSS</li>
                <li className="languages" onClick={this.filterSkill}>JavaScript</li>
            </ul>
        </section>
        <section id={this.state.sections[4]} className={this.state.cardContainer}>
            <div className="logo_description">
                <figure className="logo">
                    <img src={loopStudios} />
                </figure>
                <article className="description">
                    <div className="logo_name">
                        <span className="logo_name_span">Loop Studios</span>
                    </div>
                    <h4>Software Engineer</h4>
                    <ul className="time_location">
                        <li>1w ago</li>
                        <li>Full Time</li>
                        <li>Worldwide</li>
                    </ul>
                </article>
            </div>
            <ul className="skills">
                <li className="role" onClick={this.filterSkill}>Fullstack</li>
                <li className="level" onClick={this.filterSkill}>Midweight</li>
                <li className="languages" onClick={this.filterSkill}>JavaScript</li>
                <li className="languages" onClick={this.filterSkill}>Ruby</li>
                <li className="tools" onClick={this.filterSkill}>Sass</li>
            </ul>
        </section>
        <section id={this.state.sections[5]} className={this.state.cardContainer}>
            <div className="logo_description">
                <figure className="logo">
                    <img src={facelt} />
                </figure>
                <article className="description">
                    <div className="logo_name">
                        <span className="logo_name_span">FaceIt</span>
                    </div>
                    <h4>Junior Backend Developer</h4>
                    <ul className="time_location">
                        <li>2w ago</li>
                        <li>Full Time</li>
                        <li>UK only</li>
                    </ul>
                </article>
            </div>
            <ul className="skills">
                <li className="role" onClick={this.filterSkill}>Backend</li>
                <li className="level" onClick={this.filterSkill}>Junior</li>
                <li className="languages" onClick={this.filterSkill}>Ruby</li>
                <li className="tools" onClick={this.filterSkill}>RoR</li>
            </ul>
        </section>
        <section id={this.state.sections[6]} className={this.state.cardContainer}>
            <div className="logo_description">
                <figure className="logo">
                    <img src={shortly} />
                </figure>
                <article className="description">
                    <div className="logo_name">
                        <span className="logo_name_span">Shortly</span>
                    </div>
                    <h4>Junior Developer</h4>
                    <ul className="time_location">
                        <li>2w ago</li>
                        <li>Full Time</li>
                        <li>Worldwide</li>
                    </ul>
                </article>
            </div>
            <ul className="skills">
                <li className="role" onClick={this.filterSkill}>Frontend</li>
                <li className="level" onClick={this.filterSkill}>Junior</li>
                <li className="languages" onClick={this.filterSkill}>HTML</li>
                <li className="languages" onClick={this.filterSkill}>JavaScript</li>
                <li className="tools" onClick={this.filterSkill}>Sass</li>
            </ul>
        </section>
        <section id={this.state.sections[7]} className={this.state.cardContainer}>
            <div className="logo_description">
                <figure className="logo">
                    <img src={insure} />
                </figure>
                <article className="description">
                    <div className="logo_name">
                        <span className="logo_name_span">Insure</span>
                    </div>
                    <h4>Junior Frontend Developer</h4>
                    <ul className="time_location">
                        <li>2w ago</li>
                        <li>Full Time</li>
                        <li>USA only</li>
                    </ul>
                </article>
            </div>
            <ul className="skills">
                <li className="role" onClick={this.filterSkill}>Frontend</li>
                <li className="level" onClick={this.filterSkill}>Junior</li>
                <li className="languages" onClick={this.filterSkill}>JavaScript</li>
                <li className="tools" onClick={this.filterSkill}>Sass</li>
                <li className="tools" onClick={this.filterSkill}>Vue</li>
            </ul>
        </section>
        <section id={this.state.sections[8]} className={this.state.cardContainer}>
            <div className="logo_description">
                <figure className="logo">
                    <img src={eyecam} />
                </figure>
                <article className="description">
                    <div className="logo_name">
                        <span className="logo_name_span">Eyecam Co.</span>
                    </div>
                    <h4>Full Stack Engineer</h4>
                    <ul className="time_location">
                        <li>3w ago</li>
                        <li>Full Time</li>
                        <li>Worldwide</li>
                    </ul>
                </article>
            </div>
            <ul className="skills">
                <li className="role" onClick={this.filterSkill}>Fullstack</li>
                <li className="level" onClick={this.filterSkill}>Midweight</li>
                <li className="languages" onClick={this.filterSkill}>JavaScript</li>
                <li className="languages" onClick={this.filterSkill}>Python</li>
                <li className="tools" onClick={this.filterSkill}>Django</li>
            </ul>
        </section>
        <section id={this.state.sections[9]} className={this.state.cardContainer}>
            <div className="logo_description">
                <figure className="logo">
                    <img src={theAirFilterCompany} />
                </figure>
                <article className="description">
                    <div className="logo_name">
                        <span className="logo_name_span">The Air Filter Company</span>
                    </div>
                    <h4>Front-end Dev</h4>
                    <ul className="time_location">
                        <li>1mo ago</li>
                        <li>Part Time</li>
                        <li>Worldwide</li>
                    </ul>
                </article>
            </div>
            <ul className="skills">
                <li className="role" onClick={this.filterSkill}>Frontend</li>
                <li className="level" onClick={this.filterSkill}>Junior</li>
                <li className="languages" onClick={this.filterSkill}>JavaScript</li>
                <li className="languages" onClick={this.filterSkill}>Python</li>
                <li className="tools" onClick={this.filterSkill}>React</li>
                <li className="tools" onClick={this.filterSkill}>Sass</li>
            </ul>
        </section>
		</main>)
    }
}