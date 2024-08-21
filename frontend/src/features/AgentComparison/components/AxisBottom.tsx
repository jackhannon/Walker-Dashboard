import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3';

type Props = {
  scale: d3.ScaleBand<string>
  transform: string
}
const AxisBottom:React.FC<Props> = ({scale, transform}) => {
  const axisRef = useRef(null);

  useEffect(() => {
    const axis = d3.axisBottom(scale).tickSizeOuter(0);

    d3.select(axisRef.current).call(axis);
  }, [scale]);

  return <g 
           ref={axisRef} 
           transform={transform} 
           textAnchor="middle" 
           fill='#00dc82'
           color='#00dc82'
         />;
};

export default AxisBottom