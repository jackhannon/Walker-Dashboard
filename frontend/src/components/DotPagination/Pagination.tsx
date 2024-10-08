import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DotPaginationStyles from './styles/DotPaginationStyle.module.css'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState, ReactNode, Children, cloneElement, ReactElement } from 'react';


type Props = {
  children: ReactNode
  handleChange?: (index: number) => void,
}
const Pagination: React.FC<Props> = ({children, handleChange = () => {}}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalChildren = Children.count(children);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => {
      const newActiveIndex = prevIndex === 0 ? totalChildren - 1 : prevIndex - 1
      handleChange(newActiveIndex)
      return newActiveIndex
    });
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => {
      const newActiveIndex = prevIndex === totalChildren - 1 ? 0 : prevIndex + 1
      handleChange(newActiveIndex)
      return newActiveIndex
    });
  };

  const handleDotClick = (index: number) => {
    handleChange(index);
    setActiveIndex(index);
  };

  const activeChild = Children.toArray(children)[activeIndex] as ReactElement;

  return (
    <div className={DotPaginationStyles.container}>
      <div className={DotPaginationStyles.agentAndSelectorContainer}>
        <button onClick={handlePrevClick} className={`circularButtonOne`} aria-label="paginate-left"> 
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={DotPaginationStyles.childContainer}>
          {cloneElement(activeChild)}
        </div>
        <button onClick={handleNextClick} className={`circularButtonOne`} aria-label="paginate-right"> 
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className={DotPaginationStyles.dotsContainer}>
        {Array.from({ length: totalChildren }).map((_, index) => (
          <span
            role='button'
            aria-label={`pagination-dot-${index}`}
            key={index}
            className={`${DotPaginationStyles.dot} ${index === activeIndex ? DotPaginationStyles.activeDot : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Pagination