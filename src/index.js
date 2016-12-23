import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './js/App';
import Quote from './js/components/Quote';
import AboutUs from './js/components/AboutUs';
import Location from './js/components/Location';
import Gallery from './js/components/Gallery';
import './css/common.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/contact-us" component={Location}/>
    <Route path="/about-us" component={AboutUs}/>
    <Route path="/quote" component={Quote}/>
    <Route path="/gallery" component={Gallery}/>
  </Router>,
  document.getElementById('root')
);
