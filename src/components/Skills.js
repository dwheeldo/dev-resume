import React from 'react';

const Skills = () => {
  return (
    <div className="c-intro">
      <p className="c-intro__icon"><i className="fas fa-code"></i></p>
      <p>Like all good developers, I'm learning all the time, so this list is expanding by the day...</p>
      <ul>
        <li className="css">Responsive web development using semantic HTML5 and Sass/CSS3, mainly from scratch, but I've also used a range of boilerplate frameworks</li>
        <li className="js">Front-end JavaScript, including DOM events and communicating with APIs</li>
        <li className="js">Experience creating web apps in React and Vue</li>
        <li className="js">Using NPM and Yarn to install and customise JavaScript libraries/plugins</li>
        <li className="js">Basic knowledge of running a Node.js server using Express</li>
        <li className="other">Very comfortable using Git</li>
        <li className="other">Comfortable using the command line</li>
        <li className="other">Good understanding of Gulp and WebPack</li>
        <li className="other">I also know my way around Photoshop, XD, MS Office and all sorts of audio production software</li>
      </ul>
    </div>
  )
}

export default Skills;
