import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

const Work = () => {
  return (
    <div className="o-content">
      <p className="o-content__icon">
        <FontAwesomeIcon icon={faHistory} />
      </p>
      <p>Here's what I've been up to all these years:</p>

      <div className="o-jobs">
        <div className="o-job">
          <h4 className="o-job__role">Front End Developer</h4>
          <p className="o-job__date"><a href="https://www.wilddogdesign.co.uk/" target="_blank" rel="noopener noreferrer" >Wild Dog Design</a> | June 2019 - present</p>
          <ul className="o-job__list">
            <li className="o-job__list__item">Developing front end templates for use with Wordpress CMS</li>
            <li className="o-job__list__item">Working with the rest of the dev team to keep our build processes aligned with the latest standards and make pretty, accessible sites</li>
          </ul>
        </div>
        <div className="o-job">
          <h4 className="o-job__role">Copywriter / Learning Designer</h4>
          <p className="o-job__date">Freelance | July 2018 - present</p>
          <ul className="o-job__list">
            <li className="o-job__list__item">Creating engaging copy for web, video, audio and printed materials</li>
            <li className="o-job__list__item">Designing and writing online training solutions</li>
            <li className="o-job__list__item">Working closely with clients including <strong>PepsiCo</strong>, <strong>IBM</strong> and <strong>Lloyds Banking Group</strong></li>
          </ul>
        </div>
        <div className="o-job">
          <h4 className="o-job__role">E-learning Scriptwriter / Developer</h4>
          <p className="o-job__date"><a href="https://www.brightwavegroup.com/" target="_blank" rel="noopener noreferrer" >Brightwave</a>, Brighton | Aug 2011 - Jul 2018</p>
          <ul className="o-job__list">
            <li className="o-job__list__item">Writing online training for clients including <strong>Greater Manchester Police</strong>, <strong>O2</strong> and the <strong>British Army</strong></li>
            <li className="o-job__list__item">Working closely with Subject Matter Experts to write engaging text, audio and video content</li>
            <li className="o-job__list__item">Setting up and developing e-learning courses with Articulate Storyline, Elucidat and Adobe Captivate</li>
            <li className="o-job__list__item">Developing courses using HTML, XML and CSS in Brightwave's 'Waveform' engine</li>
            <li className="o-job__list__item">Communicating with clients to solve technical issues</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Work;
