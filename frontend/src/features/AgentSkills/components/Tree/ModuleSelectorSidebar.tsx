import ModulesStyles from '../../styles/ModulesStyles.module.css'
import SelectiveModule from '../SelectiveModule'
import SkillModule from '../SkillModule'
import PerceptiveModule from '../PerceptiveModule'
import ModuleInfoTab from './ModuleInfoTab'
import DragModule from '../DragModule'

const ModuleSelectorSidebar = () => {
  return (
    <div className={ModulesStyles.moduleSelector}>
      <DragModule type='skillModule'>
        <SkillModule>
          <ModuleInfoTab info={"A skill module"} />
        </SkillModule>
      </DragModule>
      <DragModule type='perceptiveModule'>
        <PerceptiveModule>
          <ModuleInfoTab info={"A perceiving module"} />
        </PerceptiveModule>
      </DragModule>
      <DragModule type='selectiveModule'>
        <SelectiveModule>
          <ModuleInfoTab info={"A selective module"} toggleStyles={ModulesStyles.selectiveInfoToggle}/>
        </SelectiveModule>
      </DragModule>
    </div>
  )
}

export default ModuleSelectorSidebar