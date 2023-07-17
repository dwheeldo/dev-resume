import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

const Work = () => {
  return (
    <div className="o-content">
      <h1 className="text-orange-400 mb-4">
        <FontAwesomeIcon icon={faHistory} className="o-content__icon"/>
        Work history
      </h1>

      <div className="o-jobs">
        <div className="o-job">
          <h4 className="o-job__role">Web Developer</h4>
          <p className="o-job__date"><a href="https://electricputty.co.uk/" target="_blank" rel="noopener noreferrer" >Electric Putty</a> | October 2020 - present</p>
          <ul className="o-job__list">
            <li className="o-job__list__item">Designed and built the front-end framework for Laravel applications, using vanilla JS and Vue.</li>
            <li className="o-job__list__item">Modernised the front-end architecture of <a href="https://brandstencil.com/" target="_blank" rel="noopener noreferrer">BrandStencil</a> - a SaaS product - creating a new reusable component library, utilising CSS custom properties to manage client themes, and implementing AA accessibility standards.</li>
            <li className="o-job__list__item">Developed and maintained Craft CMS sites.</li>
            <li className="o-job__list__item">Created self-contained Vue and React apps within Craft sites.</li>
          </ul>
        </div>
        <div className="o-job">
          <h4 className="o-job__role">Front End Developer</h4>
          <p className="o-job__date"><a href="https://www.wilddogdesign.co.uk/" target="_blank" rel="noopener noreferrer" >Wild Dog Design</a> | May 2019 - October 2020</p>
          <ul className="o-job__list">
            <li className="o-job__list__item">Developed responsive and engaging front end web pages using SCSS, JavaScript and the <a href="https://mozilla.github.io/nunjucks/" target="_blank" rel="noopener noreferrer">Nunjucks</a> templating engine</li>
            <li className="o-job__list__item">Contributed to <a href="https://wilddogcanvas.com/" target="_blank" rel="noopener noreferrer">Canvas</a>, a SaaS platform used by holiday companies to create customised trip itineraries, utilising Vue.js.</li>
            <li className="o-job__list__item">Collaborated with designers and back end developers to ensure seamless integration of front-end elements with back-end functionality.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Work;
