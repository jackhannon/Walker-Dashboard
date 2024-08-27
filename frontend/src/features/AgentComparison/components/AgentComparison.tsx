
import Spinner from '@/components/Spinner';
import DashBoardStyles from '../../../DashBoardStyles.module.css'
import InfoTab from '@/components/InfoTab/InfoTab';
import { useState } from 'react';
// import * as d3 from 'd3';
// import AxisBottom from './AxisBottom';
// import AxisLeft from './AxisLeft';
import ChartStyles from '../styles/ChartStyles.module.css'


// type AgentData = {
//   speed: number,
//   name: string
// }

type Props = {
  isLoading: boolean
}
const AgentComparison: React.FC<Props> = ({isLoading}) => {
  const [dimensions] = useState({ width: 350, height: 350 });
  
  // const marginTop = 20;
  // const marginRight = 20;
  // const marginBottom = 30;
  // const marginLeft = 40;

  const data = [
    { name: "agent 1", data: [{distance: 0, speed: 0}, {distance: 1, speed: 1} ,{distance: 2, speed: 1}] },
    { name: "agent 2", data: [{distance: 0, speed: 0}, {distance: 2, speed: 3} ,{distance: 4, speed: 3}] },
  ];

  let xValues: number[] = []

  data.forEach(agent => {
    xValues = xValues.concat(agent.data.map(data => data.distance))
  })

  // let yValues: number[] = []

  // data.forEach(agent => {
  //   yValues = xValues.concat(agent.data.map(data => data.speed))
  // })

  // const x = d3.scaleLinear()
  // .domain([0, d3.max(xValues, (d) => d) as number])
  // .range([marginLeft, dimensions.width - marginRight]);

  // const y = d3.scaleLinear()
  // .domain([0, d3.max(yValues, (d) => d) as number])
  // .range([dimensions.height - marginBottom, marginTop]);


  return (
    <div className={DashBoardStyles.agentComparisonContainer}>
      <div className={DashBoardStyles.label}>Agent Metric</div>
      <InfoTab/>
    {isLoading ? (
      <Spinner/>
    ) : (
      <>
        <svg 
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          preserveAspectRatio="xMidYMid meet" 
          className={ChartStyles.chartContainer}
        >
          <g>
            {/* {data.map((data, i) => (
              // <rect 
              //   key={i}
              //   x={x(data.name)} 
              //   y={y(data.speed)}
              //   height={y(0) - y(data.speed)}
              //   width={x.bandwidth()}
              //   fill='#00dc82'
              // >
              // </rect>
            ))} */}
          </g>
          {/* <AxisBottom
            scale={x} 
            transform={`translate(0,${dimensions.height - marginBottom})`}
          />
          <AxisLeft
            scale={y} 
            transform={`translate(${marginLeft},0)`}
            marginLeft={marginLeft}
          /> */}
        </svg>
      </>
    )}
    </div>
  )
}

export default AgentComparison

