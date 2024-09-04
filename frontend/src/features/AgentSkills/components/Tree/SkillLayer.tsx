import SkillStyles from '../../styles/SkillTreeStyles.module.css'
import SkillModule from '../SkillModule'
import SelectiveModule from './SelectiveModule'

type Props = {
  activeSkillPosition?: number
}

const skillInfo = "This is a skill module"

const selectiveInfo = "This is a selective module"

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