import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Panel from '../components/Panel';

const Skills = () => {

  return (
    <div className="">
      <h1 className="text-orange-400">
        <FontAwesomeIcon icon={faCode} className="mr-2"/>
        Skills
      </h1>

      <p>This list gives a decent impression of what I can do. I've dabbled with plenty of other bits and pieces too, but these are the skills I use on a daily basis.</p>

      <ul className="-mb-2">
        <Panel elementType="li">
          Responsive webs development using <span className="text-orange-400">HTML</span> and <span className="text-orange-400">CSS/SCSS</span>
        </Panel>
        <Panel elementType="li">
          Modern <span className="text-orange-400">JavaScript</span> (ES6+) and <span className="text-orange-400">TypeScript</span>
        </Panel>
        <Panel elementType="li">
          Building user interfaces with <span className="text-orange-400">Vue</span> and <span className="text-orange-400">React</span>
        </Panel>
        <Panel elementType="li">
          Sending and retrieving data from <span className="text-orange-400">REST APIs</span>
        </Panel>
        <Panel elementType="li">
          Building and configuring <span className="text-orange-400">Craft CMS</span> sites
        </Panel>
        <Panel elementType="li">
          State management &ndash; <span className="text-orange-400">Vuex</span>, <span className="text-orange-400">Pinia</span>, <span className="text-orange-400">Redux</span>
        </Panel>
        <Panel elementType="li">
          Package managers &ndash; <span className="text-orange-400">NPM</span>, <span className="text-orange-400">Yarn</span>, <span className="text-orange-400">Composer</span>
        </Panel>
        <Panel elementType="li">
          <span className="text-orange-400">Git</span> version control
        </Panel>
        <Panel elementType="li">
          Configuring build tools &ndash; <span className="text-orange-400">Vite</span>, <span className="text-orange-400">Webpack</span>, <span className="text-orange-400">Rollup</span>
        </Panel>
      </ul>
    </div>
  )
}

export default Skills;
