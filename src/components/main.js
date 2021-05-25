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
        let skill = e.target.innerText;//el valor que se obtiene cuando se cliquea en una de las skills
        //console.log(this.props.data)
        //console.log(skill);
        this.setState({
        	skills: [...this.state.skills, skill]//actualiza las skills del state object añadiendo la que se acaba de clicar
        })
   		
        //llama otra funcion
        this.filterContainer(skill);//llama a la funcion que filtrara la skill

    	this.showSkillsContainer();//muestra el contenedor de las skills filtradas
    }

    filterContainer = (skill) => {
    	let array = this.props.data;//el array que proviene de App
    	let arr2 = [...new Set([...this.state.skills, skill])];//evita que se repita los mismos valores en el array
    	
    	//itera por cada elemento del array
    	for(let i = 0, length1 = array.length; i < length1; i++){
    		let person = array[i];//cada elemneto del array representa un objeto con datos de un individuo
    		//el añade un array con los datos correspondientes 
    		const arrSinLimites = [person.role, person.level, ...person.languages, ...person.tools];
    		const arr1 = [...new Set(arrSinLimites)];// evita que ese array se repita
    		let test = arr1.some(i => arr2.includes(i));//verifica si al menos un elemento del arr2 se encuentra en el arr1
    		//p(arr2)
    		//p(arr1)
    		//p(test)
    		if (test) {// si el test es verdadero
    			// statement
    			this.state.sections[i] = this.state.sectionsFixed[i];//cambia el id de la seccion correspondiente al id que lo mostrara por pantalla
    		} else {
    			// statement
    			this.state.sections[i] = this.state.none; //si no, cambia el id para que no se muestre por pantalla
    		}
    	}
    	
    }

    clear = () => {//funcion para borrar todas las skills filtradas
    	this.setState({//cambia el estado
    		skills: [] //a un array vacio
    	})
    	this.show();//llama la funcion show
    	this.hideSkillsContainer();//llama la funcion que ocultara el contenedor de las skills filtradas
    }

    show = () => {// funcion para mostrar todas las secciones en pantalla
    	for(let i = 0, length1 = this.state.sections.length; i < length1; i++){//itera por cada seccion
    		this.state.sections[i] = this.state.sectionsFixed[i]; //cambia su id para que se muestre en pantalla
    	}
    }

    hideSkillsContainer = () => {//funcion para que se oculte el contenedor de las skills filtradas
    	let skillsContainer = $('.filter_container');//obten el elemento
    	skillsContainer.style.display = 'none';//cambia si propiedad display a none
    }
    showSkillsContainer = () => {//funcion para que se muestre el contenedor de las skills filtradas
    	let skillsContainer = $('.filter_container');//obten el elemento
    	skillsContainer.style.display = 'flex';//cambia si propiedad display a flex
    }

    render() {
        const skills = [...new Set(this.state.skills)];//obten la propiedad skills del objeto state
        let count = -1;//inicializa el contador
        //console.log(skills)
        //console.log(data)
        return (<main>
			<div className='filter_container'>
				<ul className="skills2">
                	{[...new Set(this.state.skills)].map(skill => {//mapea cada elemento del array de las skills filtradas, y añade cada una al contenedor
                		count++;//aumenta el contenedor
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
                    <img src={myHome} alt="myhome logo"/>
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
                    <img src={loopStudios} alt="loopStudios logo" />
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
                    <img src={facelt} alt="faceit logo" />
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
                    <img src={shortly} alt="shortly logo" />
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
                    <img src={insure} alt="insure logo" />
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
                    <img src={eyecam} alt="eyecam logo" />
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
                    <img src={theAirFilterCompany} alt="theAirFilterCompany logo" />
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