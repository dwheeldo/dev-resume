import React from 'react';

const Work = () => {
  return (
    <div className="c-intro">
      <p className="c-intro__icon"><i className="fas fa-history"></i></p>
      <p>Here's what I've been up to all these years:</p>
      <div className="o-job o-job--blue">
        <p className="o-job__role">Front End Developer</p>
        <p className="o-job__date"><a href="https://www.wilddogdesign.co.uk/" target="_blank" rel="noopener noreferrer" >Wild Dog Design</a> | June 2019 - present</p>
        <ul className="o-job__list">
          <li className="o-job__list__item">Developing front end templates for responsive websites based on XD designs</li>
          <li className="o-job__list__item">Working with the rest of the dev team to improve our build process and make lovely, accessible sites</li>
        </ul>
      </div>
      <div className="o-job o-job--red">
        <p className="o-job__role">Copywriter / Learning Designer</p>
        <p className="o-job__date">Freelance | July 2018 - present</p>
        <ul className="o-job__list">
          <li className="o-job__list__item">Creating engaging copy for web, video, audio and printed materials</li>
          <li className="o-job__list__item">Designing and writing online training solutions</li>
          <li className="o-job__list__item">Working closely with clients including <strong>PepsiCo</strong>, <strong>IBM</strong> and <strong>Lloyds Banking Group</strong></li>
        </ul>
      </div>
      <div className="o-job o-job--orange">
        <p className="o-job__role">E-learning Scriptwriter / Developer</p>
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
  )
}

export default Work;
