// import React, { useEffect, useRef } from 'react'
// import * as d3 from 'd3';

// type Props = {
//   scale: number[] & d3.ScaleLinear<number, number, never>
//   transform: string
//   marginLeft: number
// }
// const AxisLeft:React.FC<Props> = ({scale, transform, marginLeft}) => {
//   const axisRef = useRef(null);

//   useEffect(() => {
//     const axis = d3
//                   .axisLeft(scale)
//                   .tickFormat((y) => (y * 1).toFixed());

//     d3.select(axisRef.current)
//     .call(axis)
//     .call(g => g.select(".domain").remove())
//     .call(g => g.append("text")
//           .attr("x", -marginLeft + 10)
//           .attr("y", 10)
//           .attr("fill", "#00dc82")
//           .attr("text-anchor", "start")
//           .text("↑ speed in meters"));
//   }, [scale, marginLeft]);

//   return <g 
//            ref={axisRef} 
//            transform={transform} 
//            textAnchor="middle" 
//            fill='#00dc82'
//            color='#00dc82'
//          />;
// };

// export default AxisLeft