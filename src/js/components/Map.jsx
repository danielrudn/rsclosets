import React, { Component } from 'react';
import { GOOGLE_MAPS_KEY } from '../secret.js';

export default class Map extends Component {
  componentWillMount() {
    this.setState({ frameLoaded: false });
    this.checkInterval = setInterval(() => {
      try {
        document.querySelector('iframe').contentDocument;
      } catch(ex) {
        clearInterval(this.checkInterval);
        setTimeout(() => this.setState({ frameLoaded: true }), 250);
      }
    }, 150);
  }

  render() {
    const { frameLoaded } = this.state;
    const { location } = this.props;
    const loadingContent = (
      <div className="text-center" style={{paddingTop: '38%', height: '700px', background: 'white'}}>
        <span className="glyphicon glyphicon-refresh loading"></span>
        <h2 style={{color: '#212121'}}><strong>LOADING MAP...</strong></h2>
      </div>
    );
    return (
      <div style={{position: 'relative', height: '700px'}}>
        {frameLoaded ? '' : loadingContent}
        <iframe
          frameBorder="0"
          style={{border: '0', width: '100%', height: '100%', opacity: frameLoaded ? '1' : '0', position: 'absolute', top: '0', left: '0'}}
          src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_KEY}&q=${location}`}/>
      </div>
    );
  }
}
