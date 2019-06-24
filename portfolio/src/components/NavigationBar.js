import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LandingPage from './LandingPage';
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Resume from './Resume'



const NavigationBar = () => (
    <Switch>
        <Route exact path="/" component ={LandingPage} />
        <Route path="/aboutme" component ={About} />
        <Route path="/contact" component ={Contact} />
        <Route path="/projects" component ={Projects} />
        <Route path="/resume" component ={Resume} />
    </Switch>
)

export default NavigationBar
