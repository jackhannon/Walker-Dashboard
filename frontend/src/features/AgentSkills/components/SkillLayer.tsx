import SkillTreeStyles from '../styles/SkillTreeStyles.module.css'
import SelectiveModule from './SelectiveModule'
import SkillModule from './SkillModule'

type Props = {
  activeSkillPosition?: number
}

const skillInfo = "This module adjusts the yaw"

const selectiveInfo = "This module selects a skill to use"

const SkillLayer:React.FC<Props> = ({activeSkillPosition}) => {
  return (
    <>
      <div className={`${SkillTreeStyles.layer} ${SkillTreeStyles.selectiveLayer}`}>
        <SelectiveModule info={selectiveInfo }/>
      </div>
      <div className={`${SkillTreeStyles.layer} ${SkillTreeStyles.skillLayer}`}>
        <SkillModule isActive={activeSkillPosition === 0} info={skillInfo}/>
        <SkillModule isActive={activeSkillPosition === 1} info={skillInfo}/>
        <SkillModule isActive={activeSkillPosition === 2} info={skillInfo}/>
      </div>
    </>
   
  )
}

export default SkillLayer