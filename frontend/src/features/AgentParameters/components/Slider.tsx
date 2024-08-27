import ReactSlider from "react-slider";
import ParametersTabStyles from '../styles/ParametersTabStyles.module.css'

type Props = {
  value: number
  handleValueChange: (value: number) => void
}
const Slider:React.FC<Props>= ({value, handleValueChange}) => {

  return (
    <ReactSlider 
      onChange={(value) => handleValueChange(value)}
      className={ParametersTabStyles.slider}
      trackClassName={ParametersTabStyles.track}
      thumbClassName={ParametersTabStyles.thumb}
      markClassName={ParametersTabStyles.mark}
      value={value}
      min={1}
      max={100}
    />
  );
};

export default Slider;
