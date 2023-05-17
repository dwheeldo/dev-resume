import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <div className="o-content">
      <p className="o-content__icon">
        <FontAwesomeIcon icon={faCode} />
      </p>
      <p>This list gives a decent impression of what I can do. I've dabbled with plenty of other bits and pieces too, but these are the skills I use on a daily basis.</p>

      <ul className="o-skills">
        <li className="o-skill">Responsive website development using <strong>HTML5</strong> and <strong>Sass/CSS</strong></li>
        <li className="o-skill">Front-end <strong>JavaScript</strong> (ES6+)</li>
        <li className="o-skill">Building single page applications with <strong>React</strong> and <strong>Vue</strong></li>
        <li className="o-skill">Working with <strong>REST APIs</strong></li>
        <li className="o-skill">Building sites using <strong>Craft CMS</strong></li>
        <li className="o-skill">Using package managers (<strong>NPM</strong>, <strong>Yarn</strong>)</li>
        <li className="o-skill">Git version control</li>
        <li className="o-skill">Configuring build tools (<strong>Webpack</strong>, <strong>Laravel Mix</strong>, <strong>Rollup</strong></li>
      </ul>
    </div>
  )
}

export default Skills;
