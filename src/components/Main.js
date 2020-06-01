import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';

const Main = () => {

  return (
    <div role="main" className="o-main">
      <h1>David Wheeldon</h1>
      <h2>Front End Developer</h2>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/skills' component={Skills} />
        <Route path='/work' component={Work} />
        <Route path='/contact' component={Contact} />
        <Route default component={Home} />
      </Switch>
    </div>
  )

}

export default Main;
