import { FadeLoader } from 'react-spinners'

const Spinner = () => {
  return (
    <div className="spinner">
      <FadeLoader color={"var(--p-500)"} loading={true}  />
    </div>
  )
}

export default Spinner