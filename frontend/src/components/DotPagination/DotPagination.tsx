import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DotPaginationStyles from './styles/DotPaginationStyle.module.css'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState, ReactNode, Children, cloneElement, ReactElement } from 'react';


type Props = {
  children: ReactNode
}
const DotPagination: React.FC<Props> = ({children, }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalChildren = Children.count(children);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? totalChildren - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === totalChildren - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const activeChild = Children.toArray(children)[activeIndex] as ReactElement;

  return (
    <div className={DotPaginationStyles.container}>
      <div className={DotPaginationStyles.agentAndSelectorContainer}>
        <button onClick={handlePrevClick} className={`circularButton`}> 
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={DotPaginationStyles.childContainer}>
          {cloneElement(activeChild)}
        </div>
        <button onClick={handleNextClick} className={`circularButton`}> 
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className={DotPaginationStyles.dotsContainer}>
        {Array.from({ length: totalChildren }).map((_, index) => (
          <span
            key={index}
            className={`${DotPaginationStyles.dot} ${index === activeIndex ? DotPaginationStyles.activeDot : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default DotPagination