import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Whoops404} from './components/page404.js';
import {About} from './components/about.js';
import {Contact} from './components/contact.js';
import {Events} from './components/events.js';
import {Home} from './components/home.js';
import {Products} from './components/products.js';
import { 
    HashRouter, 
    Route, 
    Switch,
    Redirect
} from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Redirect from="/history" to="/about/history" />
        <Route path="/events" component={Events} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route component={Whoops404} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root')
)
