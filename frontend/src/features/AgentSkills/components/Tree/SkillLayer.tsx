import SkillStyles from '../../styles/SkillStyles.module.css'
import SkillModule from '../SkillModule'
import SelectiveModule from './SelectiveModule'

type Props = {
  activeSkillPosition?: number
}

const skillInfo = "This module adjusts the yaw"

const selectiveInfo = "This module selects a skill to use"

const SkillLayer:React.FC<Props> = () => {
  return (
    <>
      <div className={`${SkillStyles.layer} ${SkillStyles.selectiveLayer}`}>
        <SelectiveModule info={selectiveInfo }/>
      </div>
      <div className={`${SkillStyles.layer} ${SkillStyles.skillLayer}`}>
        <SkillModule info={skillInfo}/>
        <SkillModule info={skillInfo}/>
        <SkillModule info={skillInfo}/>
      </div>
    </>
   
  )
}

export default SkillLayer