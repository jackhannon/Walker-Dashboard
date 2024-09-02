import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import ChartStyles from '../styles/ChartStyles.module.css';

type Props = {
}

const data = [
  { 
    name: "agent 1", 
    data: [
      { distance: 0, speed: 0 }, 
      { distance: 1, speed: 0.5 }, 
      { distance: 2, speed: 1 }, 
      { distance: 3, speed: 1.2 }, 
      { distance: 4, speed: 1.5 }, 
      { distance: 5, speed: 1.8 }, 
      { distance: 6, speed: 2 }, 
      { distance: 7, speed: 2.2 }, 
      { distance: 8, speed: 2.4 }, 
      { distance: 9, speed: 2.5 }
    ]
  },
  { 
    name: "agent 2", 
    data: [
      { distance: 0, speed: 0 }, 
      { distance: 1, speed: 1 }, 
      { distance: 2, speed: 2 }, 
      { distance: 3, speed: 2.5 }, 
      { distance: 4, speed: 3 }, 
      { distance: 5, speed: 3 }, 
      { distance: 6, speed: 3.2 }, 
      { distance: 7, speed: 3.4 }, 
      { distance: 8, speed: 3.5 }, 
      { distance: 9, speed: 3.8 }
    ]
  }
];


const LineChart: React.FC<Props> = () => {
  const svgRef = useRef(null);
  const margin = { top: 20, right: 20, bottom: 35, left: 35 }
  const height = 350;
  const width = 350;

  useEffect(() => {
    const element = svgRef.current;
    
const tooltip = d3
  .select("body")
  .append("div")
  .style("position", "absolute")
  .style("background-color", "white")
  .style("padding", "5px")
  .style("border", "1px solid #ccc")
  .style("border-radius", "3px")
  .style("pointer-events", "none")
  .style("opacity", "0")
  .style("transition", "all 0.3s");





    const svg = d3.select(element)

    let xValues: number[] = [];
    let yValues: number[] = [];
  
    data.forEach(agent => {
      xValues = xValues.concat(agent.data.map(data => data.distance));
      yValues = yValues.concat(agent.data.map(data => data.speed));
    });

    const x = d3.scaleLinear()
        .domain([0, d3.max(xValues) as number])
        .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
        .domain([0, d3.max(yValues, (d) => d) as number])
        .range([height - margin.bottom, margin.top]);


    const color = d3.scaleOrdinal(["#52A22A", "#91D96D", ]);

    const line = d3.line<{ distance: number, speed: number }>()
        .x(d => x(d.distance))
        .y(d => y(d.speed))
        .curve(d3.curveCatmullRom.alpha(0.5));

     const path = svg.selectAll('.line')
        .data(data)
        .enter().append('path')
        .attr('class', 'line')
        .attr('d', d => line(d.data))
        .attr('stroke-width', '2')
        .style('fill', 'none')
        .attr('stroke', (_d, i) => color(String(i)))
        .on("mouseover", (event, d) => {
          const lineColor = d3.select(event.target).attr('stroke');
          tooltip
            .html(d.name)
            .style("opacity", "1")
            .style("background-color", lineColor)
            .style("color", "white");
        })
        .on("mousemove", (event) => {
          tooltip
            .style("top", `${event.pageY - 40}px`)
            .style("left", `${event.pageX -30}px`);
        })
        .on("mouseout", () => {
          tooltip.style("opacity", "0");
        });

      

    const length = path?.nodes()
    .sort((nodeA, nodeB) => nodeB.getTotalLength() - nodeA.getTotalLength())[0]
    .getTotalLength()
    
    path
      .attr("stroke-dasharray", length)
      .attr("stroke-dashoffset", length || 0)
      .transition()
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", 0)
      .delay(1500)
      .duration(3000)

    svg
      .append('g')
      .attr('transform', `translate(0,${height-margin.bottom})`)
      .attr('fill', "#00dc82")
      .attr('color', "#00dc82")
      .call(
        d3.axisBottom(x)
          .ticks(5)
          .tickFormat((d) => `${d} m`)
      ).append("text")
      .attr("fill", "#00dc82")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", 30)
      .text("Distance Traveled");

    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .attr('fill', "#00dc82")
      .attr('color', "#00dc82")
      .call(
        d3.axisLeft(y)
          .ticks(5)
          .tickFormat((d) => `${d}`)
      ).append("text")
      .attr("fill", "#00dc82")
      .attr("text-anchor", "middle")
      .attr("x", 0)
      .attr("y", (height / 2) - 25)
      .attr("transform", `rotate(-90, 0, ${height / 2})`)
      .text("Meters per second");

    return () => {
        d3.select(element).selectAll('*').remove();
        tooltip.remove()
    };
  }, [margin.bottom, margin.left, margin.right, margin.top])



  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet" 
      className={ChartStyles.chartContainer}
    ></svg>
  );
}

export default LineChart;