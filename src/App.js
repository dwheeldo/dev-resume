import React, { Component } from 'react';
import Nav from './Nav';
import Particles from 'react-particles-js';
import NavToggler from './NavToggler';
import PageHolder from './PageHolder';
import './App.css';

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
      togglerOpen: false
    }

    window.addEventListener('resize', this.update);
  }

  update = () => {
    if(window.innerWidth > 768) {
      this.setState({
        togglerOpen: false
      })
    }
  }

  setPage = (e) => {
    const link = e.target;
    
    this.setState({
      currentPage: link.textContent.toLowerCase(),
      togglerOpen: false
    });
  }

  toggleNav = () => {
    this.setState(state => ({
      togglerOpen: !state.togglerOpen
    }))
  }

  render() {
    const { currentPage, togglerOpen } = this.state;
    
    return (
      <div className="page-container">
        <Nav 
          currentPage={ currentPage }
          setPage={ this.setPage }
          togglerOpen={ togglerOpen } />
        <Particles
          className="particles"
          params={particleSettings} />
        <NavToggler 
          toggleNav={this.toggleNav} 
          togglerOpen={ togglerOpen }/>
        <PageHolder 
          currentPage={ currentPage } />
      </div>
    );
  }
}

export default App;
