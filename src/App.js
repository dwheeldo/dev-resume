import React, { Component } from 'react';
import Nav from './Nav';
import NavToggler from './NavToggler';
import PageHolder from './PageHolder';
import './App.css';

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
        <Nav currentPage={ currentPage } setPage={ this.setPage } togglerOpen={ togglerOpen }/>
        <NavToggler toggleNav={this.toggleNav} togglerOpen={ togglerOpen }/>
        <PageHolder currentPage={ currentPage } />
      </div>
    );
  }
}

export default App;
