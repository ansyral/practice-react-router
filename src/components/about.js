import {PageTemplate} from './PageTemplate.js'
import React from 'react';
import ReactDOM from 'react-dom';
import {AboutMenu} from './aboutMenu.js';
import {  
    Route
} from 'react-router-dom';

const Company = () =>
    <section className="company">
        <h2>Company</h2>
    </section>
const Services = () =>
    <section className="services">
        <h2>Services</h2>
    </section>   
const History = () =>
    <section className="history">
        <h2>History</h2>
    </section> 
const Location = () =>
    <section className="location">
        <h2>Location</h2>
    </section>  
const TestParams = ({match}) =>
    <div className="member">
        <ul>
            <li>gender: {match.params.gender}</li>
            <li>state: {match.params.state}</li>
            <li>city: {match.params.city}</li>
        </ul>
    </div>

export const About = ({ match }) =>
    <PageTemplate>
        <section className="about">
            <Route component={AboutMenu} />
            <Route exact path="/about" component={Company}/>
            <Route path="/about/history" component={History}/>
            <Route path="/about/services" component={Services}/>
            <Route path="/about/location" component={Location}/>
            <Route exact path="/about/:gender/:state/:city" component={TestParams}/>
        </section>
    </PageTemplate>