import React, { Component } from 'react';
import Nav from '../components/Nav';
import Particles from 'react-particles-js';
import NavToggler from '../components/NavToggler';
import PageHolder from '../components/PageHolder';
import './App.scss';
import '../css/main.scss';

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
      "value": 0.5,
      "random": true
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
      currentPage: 'about',
      bodyClass: 'page-container'
    }

    window.addEventListener('resize', this.debounce(this.closeToggler));
  }

  debounce = (func, wait = 20, immediate = true) => {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  closeToggler = () => {
    if(window.innerWidth > 768) {
      this.setState({
        bodyClass: 'page-container'
      });
    }
  }

  setPage = (e) => {
    const link = e.target;
    
    this.setState({
      currentPage: link.textContent.toLowerCase(),
      bodyClass: 'page-container'
    });
  }

  toggleNav = () => {
    this.setBodyClass();
  }

  setBodyClass = () => {
    if (this.state.bodyClass === 'page-container') {
      this.setState({
        bodyClass: 'page-container is-visible-mobile-menu'
      })
    } else {
      this.setState({
        bodyClass: 'page-container'
      })
    }
  }

  render() {
    const { currentPage, bodyClass } = this.state;
    
    return (
      <div className={ bodyClass }>
        <Nav 
          currentPage={ currentPage }
          setPage={ this.setPage }
          bodyClass={ bodyClass } />
        <Particles
          className="particles"
          params={particleSettings} />
        <NavToggler 
          toggleNav={this.toggleNav}
          bodyClass={ bodyClass }
          />
        <PageHolder 
          currentPage={ currentPage } />
      </div>
    );
  }
}

export default App;
