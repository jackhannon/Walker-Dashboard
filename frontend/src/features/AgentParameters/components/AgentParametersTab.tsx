import { useState } from 'react'
import ParametersTabStyles from '../styles/ParametersTabStyles.module.css'
import Slider from './Slider'

const AgentParametersTab = () => {
  const [hullValue, setHullValue] = useState(0);
  const [femurValue, setFemurValue] = useState(0);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy")

  const handlHullChange = (value: number) => {
    setHullValue(value)
  }

  const handleFemurChange = (value: number) => {
    setFemurValue(value)
  }

  const handleRadioChange = (id: "easy" | "medium" | "hard") => {
    setDifficulty(id)
  }

  return (
    <div className={ParametersTabStyles.parametersContainer}>
      Hull size: {hullValue}
      <Slider value={hullValue} handleValueChange={handlHullChange}/>

      Femur length: {femurValue}
      <Slider value={femurValue} handleValueChange={handleFemurChange}/>

      Terrain difficulty:
      <div className={ParametersTabStyles.radios}>
        <div className={ParametersTabStyles.radioGroup}> 
          <input type='radio' id="easy" checked={difficulty === "easy"} onChange={() => handleRadioChange("easy")}></input>
          <label htmlFor='easy'>easy</label>
        </div>
        <div className={ParametersTabStyles.radioGroup}> 
          <input type='radio' id="medium" checked={difficulty === "medium"} onChange={() => handleRadioChange("medium")}></input>
          <label htmlFor='medium'>medium</label>
        </div>
        <div className={ParametersTabStyles.radioGroup}> 
          <input type='radio' id="hard" checked={difficulty === "hard"} onChange={() => handleRadioChange("hard")}></input>
          <label htmlFor='hard'>hard</label>
        </div>
      </div>
    </div>
  )
}

export default AgentParametersTab