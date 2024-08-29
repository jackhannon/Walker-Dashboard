import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type Props = {
  scale: d3.ScaleLinear<number, number, never>;
  transform: string;
  svgWidth: number; // Add SVG width as a prop
  svgHeight: number; // Add SVG height as a prop
}

const AxisBottom: React.FC<Props> = ({ scale, transform, svgWidth, svgHeight }) => {
  const axisRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const axis = d3.axisBottom(scale)
      .ticks(5)
      .tickFormat((d) => `${d.toFixed()} m`);

    const axisElement = d3.select(axisRef.current);
    
    axisElement.call(axis);
    // Add axis label
    axisElement.append("text")
      .attr("fill", "#00dc82")
      .attr("text-anchor", "middle")
      .attr("x", svgWidth / 2)
      .attr("y", 35)
      .text("Distance Traveled");

  }, [scale, svgWidth, svgHeight]);

  return (
    <g 
      ref={axisRef} 
      transform={transform} 
      textAnchor="middle" 
      fill='#00dc82'
      color='#00dc82'
    />
  );
};

export default AxisBottom;
