import React, { Component } from 'react';

import { $$, $, p } from './functions.js'
//images
import photosnap from './images/photosnap.svg';
import manage from './images/manage.svg';

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
        sections: ["one", 'two', "three"],
        sectionsFixed: ['one', "two", 'three']
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
        this.filterContainer(skill)
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
    }

    clearItem = (e) => {
    	let item = e.target.parentNode.firstChild.innerText;
    	//p(item);
    	let index = this.state.skills.indexOf(item);
    	//p(index)
    	if (index > -1) {
    		// statement
    		let removedSkill = this.state.skills.splice(index, 1)
    		p(`item removido: ${removedSkill}`)
    		this.setState({
    			skills: this.state.skills
    		})
    		this.showItem(item)
    	}
    	//p(this.state.skills)




    }

    show = () => {
    	for(let i = 0, length1 = this.state.sections.length; i < length1; i++){
    		this.state.sections[i] = this.state.sectionsFixed[i]
    	}
    }

    showItem = (removedSkill) => {

    	let array = this.props.data
    	for(let i = 0, length1 = array.length; i < length1; i++){
    		let person = array[i];
    		const arrSinLimites = [person.role, person.level, ...person.languages, ...person.tools];
    		const arr1 = [...new Set(arrSinLimites)];
    		arr1.map(el => {
    			if (el == removedSkill) {
    				this.state.sections[i] = this.state.sectionsFixed[i];
    			} else {
    				let one = typeof removedSkill;
    				let two = typeof el;
    				p(`el elemento ${one} no coincide con ${two}`);
    			}
    		})
    		/*let index = arr1.indexOf(removedSkill);
    		
    		if (index > -1) {
    			// statement
    			p('elemento encontrado en ' + index )
    			this.state.sections[i] = this.state.sectionsFixed[i];
    		} else {
    			p(`no se encontro ${removedSkill} en ${arr1}`)
    		}*/
    	}
    	
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
                	<li className="role" ><p>Froxxntendrr</p><span className="X">X</span></li>
                	<li className="level"><p>Senxxiorrr</p></li>
                	{[...new Set(this.state.skills)].map(skill => {
                		count++;
                		return <li key={count}>
                		<p>{skill}</p>
                		<span 
                		className="X" 
                		onClick={this.clearItem}>
                		X</span>
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
                    <img src={photosnap} alt="photosnap logo" />
                </figure>
                <article className="description">
                    <div className="logo_name">
                        <span className="logo_name_span">Account</span>
                        <span className="new">New!</span>
                        <span className="featured"></span>
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
		</main>)
    }
}