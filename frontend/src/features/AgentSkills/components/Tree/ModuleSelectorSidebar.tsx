import React from 'react'
import SkillTreeStyles from '../styles/SkillTreeStyles.module.css'
import SelectiveModule from '../SelectiveModule'
import SkillModule from '../SkillModule'
import PerceptiveModule from '../PerceptiveModule'

const ModuleSelectorSidebar = () => {
  return (
    <div className={SkillTreeStyles.moduleSelector}>
      <SkillModule />
      <PerceptiveModule />
      <SelectiveModule />
    </div>
  )
}

export default ModuleSelectorSidebar