import React from 'react';

const Skills = () => {
  return (
    <div className="o-content">
      <p className="o-content__icon"><i className="fas fa-code"></i></p>
      <p>This list gives a decent impression of what I can do. I've dabbled with plenty of other bits and pieces too, but these are the skills I use on a daily basis.</p>

      <ul className="o-skills">
        <li className="o-skill">Responsive website development using semantic <strong>HTML5</strong> and <strong>Sass/CSS3</strong>, mainly from scratch using component-based SCSS, but I've also used a range of boilerplate frameworks</li>
        <li className="o-skill">Front-end <strong>JavaScript</strong> (ES6+)</li>
        <li className="o-skill">Building web apps in <strong>React</strong> and <strong>Vue</strong></li>
        <li className="o-skill">Using package managers (<strong>NPM</strong>, <strong>Yarn</strong>) to install and customise JavaScript libraries/plugins</li>
        <li className="o-skill">Git version control (and yes, I'm comfortable using the terminal)</li>
        <li className="o-skill">Configuring build tools (mostly <strong>WebPack</strong>, but a bit of <strong>Gulp</strong> too)</li>
        <li className="o-skill">I also know my way around Photoshop, XD, MS Office and all sorts of audio production software</li>
        <li className="o-skill">And I like to keep my code neat and tidy - no spaghetti served here</li>
      </ul>
    </div>
  )
}

export default Skills;
