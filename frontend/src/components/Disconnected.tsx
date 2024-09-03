import { faWarning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Disconnected = ({message}: {message: string}) => {
  return (
    <div className="disconnect">
      <FontAwesomeIcon icon={faWarning}/>
      {message}
    </div>
  )
}

export default Disconnected