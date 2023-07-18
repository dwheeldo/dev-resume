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
          Responsive website development using <span className="text-orange-400">HTML5</span> and <span className="text-orange-400">Sass/CSS</span>
        </Panel>
        <Panel elementType="li">
          Front-end <span className="text-orange-400">JavaScript</span> (ES6+)
        </Panel>
        <Panel elementType="li">
          Building single page applications with <span className="text-orange-400">React</span> and <span className="text-orange-400">Vue</span>
        </Panel>
        <Panel elementType="li">
          Sending and retrieving data from <span className="text-orange-400">REST APIs</span>
        </Panel>
        <Panel elementType="li">
          Building sites using <span className="text-orange-400">Craft CMS</span>
        </Panel>
        <Panel elementType="li">
          Using package managers (<span className="text-orange-400">NPM</span>, <span className="text-orange-400">Yarn</span>)
        </Panel>
        <Panel elementType="li">
          <span className="text-orange-400">Git</span> version control
        </Panel>
        <Panel elementType="li">
          Configuring build tools (<span className="text-orange-400">Webpack</span>, <span className="text-orange-400">Laravel Mix</span>, <span className="text-orange-400">Rollup</span>)
        </Panel>
      </ul>
    </div>
  )
}

export default Skills;
