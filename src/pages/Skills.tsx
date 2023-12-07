import { useContext } from 'react';
import parse from 'html-react-parser';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../context/AppContext';
import type { SkillType } from '../types/interfaces';
import Title from '../components/Title';
import Panel from '../components/Panel';

const Skills = () => {
  const { skills: skillsList } = useContext(AppContext);

  const renderedSkills = skillsList.map((skill: SkillType) => {
    return (
      <Panel elementType="li" key={skill.id}>
        {parse(skill.content)}
      </Panel>
    );
  });

  return (
    <div className="">
      <Title text="Skills" icon={faWrench} />

      <p>This list gives a decent impression of what I can do. I've dabbled with plenty of other bits and pieces too, but these are the skills I use on a daily basis.</p>

      <ul className="mt-4 -mb-2">
        {renderedSkills}
      </ul>
    </div>
  )
}

export default Skills;
