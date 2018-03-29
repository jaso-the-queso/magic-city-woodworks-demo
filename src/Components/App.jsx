import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Nav from './Navbar';
import FooterPage from './Footer';

export default class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/contact' component={Contact} />
                    </Switch>
                    <FooterPage />
                </Fragment>
            </Router>
        )
    }
} 