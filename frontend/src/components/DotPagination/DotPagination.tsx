import DotPaginationStyles from './styles/DotPaginationStyle.module.css'
import { useState, ReactNode, Children, cloneElement, ReactElement } from 'react';


type Props = {
  children: ReactNode
  handleChange?: (index: number) => void,
}
const DotPagination: React.FC<Props> = ({children, handleChange = () => {}}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalChildren = Children.count(children);

  const handleDotClick = (index: number) => {
    handleChange(index);
    setActiveIndex(index);
  };

  const activeChild = Children.toArray(children)[activeIndex] as ReactElement;

  return (
    <div className={DotPaginationStyles.container}>
      <div className={DotPaginationStyles.agentAndSelectorContainer}>
        <div className={DotPaginationStyles.childContainer}>
          {cloneElement(activeChild)}
        </div>
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

export default DotPagination