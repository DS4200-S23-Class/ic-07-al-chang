const data = [55000, 48000, 27000, 66000, 90000];

const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 200;
const FRAME_MARGINS = { left: 100, right: 50, top: 50, bottom: 50 };

VIS_HEIGHT = FRAME_HEIGHT - FRAME_MARGINS.top - FRAME_MARGINS.bottom;
VIS_WIDTH = FRAME_WIDTH - FRAME_MARGINS.left - FRAME_MARGINS.right;

const FRAME = d3
  .select("#vis")
  .append("svg")
  .attr("height", FRAME_HEIGHT)
  .attr("width", FRAME_WIDTH)
  .attr("class", "frame");

const MAX_Y = d3.max(data, (d) => d);

const Y_SCALE = d3
  .scaleLinear()
  .domain([0, MAX_Y + 10000])
  .range([VIS_HEIGHT, 0]);

FRAME.selectAll("points")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", FRAME_MARGINS.left + 10)
  .attr("cy", (d) => Y_SCALE(d) + FRAME_MARGINS.top)
  .attr("r", 10)
  .attr("class", "point");

FRAME.append("g")
  .attr(
    "transform",
    `translate(${FRAME_MARGINS.left - 10},${FRAME_MARGINS.top})`
  )
  .call(d3.axisLeft(Y_SCALE).ticks(4))
  .attr("font-size", "20px");
