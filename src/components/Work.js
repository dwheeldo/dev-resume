import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

const Work = () => {
  return (
    <div className="o-content">
      <p className="o-content__icon">
        <FontAwesomeIcon icon={faHistory} />
      </p>

      <div className="o-jobs">
        <div className="o-job">
          <h4 className="o-job__role">Web Developer</h4>
          <p className="o-job__date"><a href="https://electricputty.co.uk/" target="_blank" rel="noopener noreferrer" >Electric Putty</a> | October 2020 - present</p>
          <ul className="o-job__list">
            <li className="o-job__list__item">Creating front end components for Laravel applications using Vue.</li>
            <li className="o-job__list__item">Handling data requests to and from REST APIs.</li>
            <li className="o-job__list__item">Developing and maintaining Craft CMS sites.</li>
          </ul>
        </div>
        <div className="o-job">
          <h4 className="o-job__role">Front End Developer</h4>
          <p className="o-job__date"><a href="https://www.wilddogdesign.co.uk/" target="_blank" rel="noopener noreferrer" >Wild Dog Design</a> | May 2019 - October 2020</p>
          <ul className="o-job__list">
            <li className="o-job__list__item">Developing front end web pages using SCSS, JavaScript and the <a href="https://mozilla.github.io/nunjucks/" target="_blank" rel="noopener noreferrer">Nunjucks</a> templating engine</li>
            <li className="o-job__list__item">Working on <a href="https://wilddogcanvas.com/" target="_blank" rel="noopener noreferrer">Canvas</a>, a SaaS powered by Vue to generate trip itineraries for holiday companies</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Work;
