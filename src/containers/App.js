import React, { Component } from 'react';
import Particles from 'react-particles-js';
import debounce from 'lodash.debounce';

import Nav from '../components/Nav';
import Main from '../components/Main';

const particleSettings = {
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ff8c42"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.4,
      "random": false
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "move": {
      "enable": true,
      "speed": 1,
      "random": true,
      "straight": false,
      "out_mode": "out"
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false
    }

    window.addEventListener('resize', debounce(this.checkDeviceSize));
  }

  checkDeviceSize = () => {
    if (window.innerWidth > 767) {
      this.closeNav();
    } else {
      return;
    }
  }

  toggleNav = () => {
    this.setState(state => ({ navOpen: !state.navOpen }));
  }

  closeNav = () => {
    this.setState({
      navOpen: false
    });
  }

  render() {
    const { navOpen } = this.state;

    return (
      <div className={navOpen ? 'o-wrapper is-visible--mobile-menu' : 'o-wrapper'}>
        <Nav
          toggleNav={this.toggleNav}
          closeNav={this.closeNav} />
        <Particles
          className="particles"
          params={particleSettings} />
        <Main />
      </div>
    );
  }
}

export default App;
