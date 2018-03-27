import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Nav from './Navbar';

export default class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
                </Fragment>
            </Router> 
        )
    }
} 