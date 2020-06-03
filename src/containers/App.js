import React, { Component } from 'react';
import debounce from 'lodash.debounce';

import Nav from '../components/Nav';
import Main from '../components/Main';

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
        <Main />
      </div>
    );
  }
}

export default App;
