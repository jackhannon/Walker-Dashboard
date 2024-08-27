import PerceptiveModule from './PerceptiveModule'
import SkillTreeStyles from '../styles/SkillTreeStyles.module.css'

type Props = {
  activePerceptorPosition?: number
}

const info = "This module percieves the wind speed"

const PerceptionLayer:React.FC<Props> = () => {
  return (
    <div className={`${SkillTreeStyles.perceptionLayer} ${SkillTreeStyles.layer}`}>
      <PerceptiveModule info={info}/>
      <PerceptiveModule info={info}/>
      <PerceptiveModule info={info}/>
    </div>
  )
}

export default PerceptionLayer