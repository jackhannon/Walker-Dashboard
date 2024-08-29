import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type Props = {
  scale: d3.ScaleLinear<number, number, never>;
  transform: string;
  marginLeft: number;
  svgWidth: number; // Pass SVG width as a prop
  svgHeight: number; // Pass SVG height as a prop
}

const AxisLeft: React.FC<Props> = ({ scale, transform, marginLeft, svgWidth, svgHeight }) => {
  const axisRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const axis = d3.axisLeft(scale)
      .ticks(5)
      .tickFormat((y) => `${y.toFixed()}`);

    const axisElement = d3.select(axisRef.current);
    
    axisElement.call(axis);

    // Add axis label with rotation
    axisElement.append("text")
      .attr("fill", "#00dc82")
      .attr("text-anchor", "middle")
      .attr("x", 0) // Center the label vertically
      .attr("y", (svgHeight / 2) - 25) // Position the label to the left of the axis
      .attr("transform", `rotate(-90, 0, ${svgHeight / 2})`) // Rotate the label 90 degrees
      .text("Meters per second");

  }, [scale, marginLeft, svgWidth, svgHeight]);

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

export default AxisLeft;
