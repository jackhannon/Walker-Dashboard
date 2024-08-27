import PerceptiveModule from '../PerceptiveModule'
import SkillStyles from '../../styles/SkillStyles.module.css'

type Props = {
  activePerceptorPosition?: number
}

const info = "This module percieves the wind speed"

const PerceptionLayer:React.FC<Props> = () => {
  return (
    <div className={`${SkillStyles.perceptionLayer} ${SkillStyles.layer}`}>
      <PerceptiveModule info={info}/>
      <PerceptiveModule info={info}/>
      <PerceptiveModule info={info}/>
    </div>
  )
}

export default PerceptionLayer