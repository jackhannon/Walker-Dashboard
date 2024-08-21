import PerceptiveModule from './PerceptiveModule'
import SkillTreeStyles from '../styles/SkillTreeStyles.module.css'

type Props = {
  activePerceptorPosition?: number
}

const info = "This module percieves the wind speed"

const PerceptionLayer:React.FC<Props> = ({activePerceptorPosition}) => {
  return (
    <div className={`${SkillTreeStyles.perceptionLayer} ${SkillTreeStyles.layer}`}>
      <PerceptiveModule isActive={activePerceptorPosition === 0} info={info}/>
      <PerceptiveModule isActive={activePerceptorPosition === 1} info={info}/>
      <PerceptiveModule isActive={activePerceptorPosition === 2} info={info}/>
    </div>
  )
}

export default PerceptionLayer