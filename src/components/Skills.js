import React from 'react';

const Skills = () => {
  return(
    <div className="intro-text">
      <p className="text-lead-icon"><i className="fas fa-code"></i></p>
      <p>I'm learning all the time, so this list is expanding by the day. Here's what I've got in my locker right now...</p>
      <ul>
        <li className="css">Extensive experience building responsive web pages with HTML5 and CSS3, both from scratch and building on frameworks like Bootstrap and Tachyons</li>
        <li className="css">Experience using Sass</li>
        <li className="js">Solid understanding of JavaScript, including DOM manipulation and API requests</li>
        <li className="js">Experience creating single page web apps in React (I used React to build this site)</li>
        <li className="js">Experience integrating JavaScript libraries like jQuery into projects</li>
        <li className="js">Basic knowledge of running a Node.js server using Express</li>
        <li className="other">Very comfortable using Git and GitHub</li>
        <li className="other">Comfortable using the command line and installing NPM packages</li>
        <li className="other">I also know my way around Photoshop, MS Office and all sorts of audio production software</li>
      </ul>
    </div>
  )
}

export default Skills;