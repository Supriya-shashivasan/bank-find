import React, { Component } from 'react';
import { render } from 'react-dom';
import request from 'axios';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


import './index.css';

import Main from './components/main';
import Bank from './components/bank'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/bank/:id" component={Bank} />
                    <Route exact path="/" component={Main} />
                    
                </div>
            </Router>
        )
    }
}

render(<App />, document.getElementById('app'))