import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import Panel from '../components/Panel';

const Work = () => {
  return (
    <div className="">
      <h1 className="text-orange-400 mb-4">
        <FontAwesomeIcon icon={faHistory} className="mr-2"/>
        Work history
      </h1>

      <ul className="-mb-2">
        <Panel>
          <h2 className="text-base leading-none font-semibold mb-1 lg:text-lg">Web Developer</h2>
          <p><a href="https://electricputty.co.uk/" target="_blank" rel="noopener noreferrer" className="text-orange-400">Electric Putty</a> | October 2020 - June 2023</p>

          <ul className="list-disc ml-4">
            <li className="mb-2">Designed and built the front-end framework for Laravel applications, using vanilla JS and Vue.</li>
            <li className="mb-2">Modernised the front-end architecture of <a href="https://brandstencil.com/" target="_blank" rel="noopener noreferrer" className="text-orange-400">BrandStencil</a> - a SaaS product - creating a new reusable component library, utilising CSS custom properties to manage client themes, and implementing AA accessibility standards.</li>
            <li className="mb-2">Developed and maintained Craft CMS sites.</li>
            <li>Created self-contained Vue and React apps within Craft sites.</li>
          </ul>
        </Panel>
        <Panel>
          <h2 className="text-base leading-none font-semibold mb-1 lg:text-lg">Front-end Developer</h2>
          <p><a href="https://www.wilddogdesign.co.uk/" target="_blank" rel="noopener noreferrer" className="text-orange-400">Wild Dog Design</a> | May 2019 - October 2020</p>

          <ul className="list-disc ml-4">
            <li className="mb-2">Developed responsive and engaging front-end web pages using SCSS, JavaScript and the Nunjucks templating engine.</li>
            <li className="mb-2">Contributed to <a href="https://wilddogcanvas.com/" target="_blank" rel="noopener noreferrer" className="text-orange-400">Canvas</a>, a SaaS platform used by holiday companies to create customised trip itineraries, utilising Vue.js.</li>
            <li>Collaborated with designers and back end developers to ensure seamless integration of front-end elements with back-end functionality.</li>
          </ul>
        </Panel>
      </ul>
    </div>
  )
}

export default Work;
