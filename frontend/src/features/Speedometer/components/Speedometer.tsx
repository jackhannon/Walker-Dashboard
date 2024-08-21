import React from 'react'
import * as d3 from 'd3';


type Props = {
  speed: number
}

const Speedometer:React.FC<Props> = ({speed}) => {
  const width = 200;
  const height = 170;
  const radius = Math.min(width, height) / 2 - 10;

  const speedScale = d3.scaleLinear()
    .domain([0, 5])
    .range([-Math.PI / 1.5, Math.PI / 1.5]);

  const backgroundArc = d3.arc()
    .innerRadius(radius-1)
    .outerRadius(radius)
    .startAngle(-Math.PI / 1.5)
    .endAngle(Math.PI / 1.5);  

  const ticks: number[] = speedScale.ticks(12);

  const tickArc = d3.arc()
    .innerRadius(radius - 10)
    .outerRadius(radius)
    .startAngle((d: number) => speedScale(d))
    .endAngle((d: number) => speedScale(d) + 0.01);

  const needleWidth = 2;
  const needleLength = radius - 35;   

  const needlePath = d3.path();
  needlePath.moveTo(-needleWidth / 2, 0);
  needlePath.lineTo(needleWidth / 2, 0);
  needlePath.lineTo(needleWidth / 2, - needleLength);
  needlePath.lineTo(-needleWidth / 2, - needleLength);
  needlePath.closePath();

  return (
    <svg width={width} height={height} className='speedometer'>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        <path d={backgroundArc()} fill='rgb(0, 220, 130)'></path>
        {ticks.map(value => (
          <path 
            className='tick' 
            d={tickArc(value)} 
            fill='rgb(0, 220, 130)'
          >
          </path>
        ))}
        {ticks.map(value => (
          <text 
            className='tick'
            fill='rgb(0, 220, 130)'
            x={(radius - 22) * Math.cos(speedScale(value) - Math.PI / 2)}
            y={(radius - 22) * Math.sin(speedScale(value) - Math.PI / 2)}
            dy="0.35em"
            fontSize=".8rem"
            textAnchor='middle'
          >
            {value}
          </text>
        ))}
        <path
          d={needlePath.toString()}
          fill='rgb(0, 220, 130)'
          transform={`rotate(${speedScale(speed) * (180 / Math.PI)})`}
        >
        </path>
      </g>
    </svg>
  )
}

export default Speedometer