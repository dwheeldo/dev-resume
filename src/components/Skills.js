import React from 'react';

const Skills = () => {
  return(
    <div className="intro-text">
      <p className="text-lead-icon"><i className="fas fa-code"></i></p>
      <p>I'm learning all the time, so this list is expanding by the day. Here's what I've got in my locker right now...</p>
      <ul>
        <li className="css">Extensive experience building responsive web pages with HTML5 and Sass/CSS3, mainly from scratch, but also using boilerplate frameworks like Bootstrap</li>
        <li className="css">Experience using Sass</li>
        <li className="js">Solid understanding of front-end JavaScript, including DOM events and API requests</li>
        <li className="js">Experience creating single page web apps in React</li>
        <li className="js">Experience integrating and customising JavaScript libraries</li>
        <li className="js">Basic knowledge of running a Node.js server using Express</li>
        <li className="other">Very comfortable managing Git repositories and GitHub</li>
        <li className="other">Comfortable using the command line - NPM, Yarn, Gulp and WebPack</li>
        <li className="other">I also know my way around Photoshop, XD, MS Office and all sorts of audio production software</li>
      </ul>
    </div>
  )
}

export default Skills;