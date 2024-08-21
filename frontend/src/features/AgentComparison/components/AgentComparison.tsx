
import Spinner from '@/components/Spinner';
import DashBoardStyles from '../../../DashBoardStyles.module.css'
import InfoTab from '@/components/InfoTab/InfoTab';



// type AgentData = {
//   speed: number,
//   name: string
// }

type Props = {
  isLoading: boolean
}
const AgentComparison: React.FC<Props> = ({isLoading}) => {
  // const [dimensions, setDimensions] = useState({ width: 350, height: 350 });
  
  // const marginTop = 20;
  // const marginRight = 20;
  // const marginBottom = 30;
  // const marginLeft = 40;

  // const data: AgentData[] = [
  //   { speed: 10, name: "agent 1" },
  //   { speed: 10, name: "agent 2" },
  //   { speed: 10, name: "agent 3" },
  //   { speed: 10, name: "agent 4" }
  // ];

  // const x = d3.scaleBand()
  // .domain(data.map(agent => agent.name))
  // .range([marginLeft, dimensions.width - marginRight])
  // .padding(0.1);

  // const y = d3.scaleLinear()
  // .domain([0, d3.max(data, (d) => d.speed) as number])
  // .range([dimensions.height - marginBottom, marginTop]);
  

  return (

    <div className='agentComparisonContainer'>
      <div className={DashBoardStyles.label}>Agent Metric</div>
      <InfoTab/>
    {isLoading ? (
      <Spinner/>
    ) : (
      <></>
    )}
    </div>
  )
}

export default AgentComparison


      {/* <svg 
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="xMidYMid meet" 
        className={ChartStyles.chartContainer}
      >
        <g>
          {data.map((data, i) => (
            <rect 
              key={i}
              x={x(data.name)} 
              y={y(data.speed)}
              height={y(0) - y(data.speed)}
              width={x.bandwidth()}
              fill='#00dc82'
            >
            </rect>
          ))}
        </g>
        <AxisBottom 
          scale={x} 
          transform={`translate(0,${dimensions.height - marginBottom})`}
        />
        <AxisLeft
          scale={y} 
          transform={`translate(${marginLeft},0)`}
          marginLeft={marginLeft}
        />
      </svg> */}