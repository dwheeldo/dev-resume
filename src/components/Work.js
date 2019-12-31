import React from 'react';
import './Work.css';

const Work = () => {
  return(
    <div className="intro-text">
      <p className="text-lead-icon"><i className="fas fa-history"></i></p>
      <p>Here's what I've been up to all these years:</p>
      <div className="job blue">
        <p className="job-role">Front End Developer</p>
        <p className="job-date"><a href="https://www.wilddogdesign.co.uk/" target="_blank" rel="noopener noreferrer" >Wild Dog Design</a> | June 2019 - present</p>
        <ul>
          <li>Developing front end templates for responsive websites based on XD designs</li>
          <li>Working with the rest of the dev team to improve our build process and make lovely, accessible sites</li>
        </ul>
      </div>
      <div className="job red">
        <p className="job-role">Copywriter / Learning Designer</p>
        <p className="job-date">Freelance | July 2018 - present</p>
        <ul>
          <li>Creating engaging copy for web, video, audio and printed materials</li>
          <li>Designing and writing online training solutions</li>
          <li>Working closely with clients including <strong>PepsiCo</strong>, <strong>IBM</strong> and <strong>Lloyds Banking Group</strong></li>
        </ul>
      </div>
      <div className="job orange">
        <p className="job-role">E-learning Scriptwriter / Developer</p>
        <p className="job-date"><a href="https://www.brightwavegroup.com/" target="_blank" rel="noopener noreferrer" >Brightwave</a>, Brighton | Aug 2011 - Jul 2018</p>
        <ul>
          <li>Writing online training for clients including <strong>Greater Manchester Police</strong>, <strong>O2</strong> and the <strong>British Army</strong></li>
          <li>Working closely with Subject Matter Experts to write engaging text, audio and video content</li>
          <li>Setting up and developing e-learning courses with Articulate Storyline, Elucidat and Adobe Captivate</li>
          <li>Developing courses using HTML, XML and CSS in Brightwave's 'Waveform' engine</li>
          <li>Communicating with clients to solve technical issues</li>
        </ul>
      </div>
    </div>
  )
}

export default Work;