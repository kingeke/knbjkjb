const w = 1200;
const h = 450;
const padding = 60

var country = counties.objects.counties.geometries[0]


country.arcs = country.arcs[0].map((item) => counties.arcs[item])
// const minXValue = d3.min(data.monthlyVariance, (d) => d.year)
// const maxXValue = d3.max(data.monthlyVariance, (d) => d.year)
// const minYValue = d3.min(data.monthlyVariance, (d) => d.month)
// const maxYValue = d3.max(data.monthlyVariance, (d) => d.month)

console.log(country.arcs.flat(Infinity))
const colors = [
    {
        min: 0,
        color: 'rgb(49, 54, 149)'
    },
    {
        min: 2.8,
        color: 'rgb(69, 117, 180)'
    },
    {
        min: 3.9,
        color: 'rgb(116, 173, 209)'
    },
    {
        min: 5.0,
        color: 'rgb(171, 217, 233)'
    },
    {
        min: 6.1,
        color: 'rgb(224, 243, 248)'
    },
    {
        min: 7.2,
        color: 'rgb(255, 255, 191)'
    },
    {
        min: 8.3,
        color: 'rgb(254, 224, 144)'
    },
    {
        min: 9.5,
        color: 'rgb(253, 174, 97)'
    },
    {
        min: 10.6,
        color: 'rgb(244, 109, 67)'
    },
    {
        min: 11.7,
        color: 'rgb(215, 48, 39)'
    },
    {
        min: 12.8,
        color: 'rgb(165, 0, 38)'
    }
]

// const xScale = d3.scaleLinear(([minXValue - 1, maxXValue + 1]), ([padding, w - padding]))
// const yScale = d3.scaleLinear(([maxYValue, minYValue]), ([h - padding, padding]))
// var xAxis = d3.axisBottom(xScale)
// var yAxis = d3.axisLeft(yScale)

// const legendXMin = d3.min(colors, (d) => d.min)
// const legendXMax = d3.max(colors, (d) => d.min)
// const legendXScale = d3.scaleLinear(([0, 11]), ([0, 30 * colors.length - 1]))
// const legendXAxis = d3.axisBottom(legendXScale)

// function rectWidth(month) {
//     var total = data.monthlyVariance.filter((item) => item.month === month).length
//     return w / total
// }

// function rectFill(variant) {
//     var color = colors.filter((item) => item.min >= variant)
//     return color.length > 0 ? color[0].color : colors[colors.length - 1].color
// }

d3.json(
    "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json",
    function (json) {
        console.log(json)
    })

const svg = d3.select(".chart")
    .append("svg")
    .attr("width", w)
    .attr("height", h)

// var tooltip = d3.select('.chart')
//     .append('div')
//     .attr('id', "tooltip")
//     .style('text-align', 'center')

// svg.append('text')
//     .attr('y', 10)
//     .attr('x', -(h / 2))
//     .text("Months")
//     .attr("transform", 'rotate(-90)')
//     .style('font-size', '15')

// svg.append('text')
//     .attr('y', h - 30)
//     .attr('x', (w / 2))
//     .text("Years")
//     .style('font-size', '15')


svg.append('path')
    .attr('class', 'cell')
    .attr('d', `M ${country.arcs.flat(Infinity).join(" ")}`)
    .attr('stroke', 'red')
    .attr('stroke-width', '2')
    .attr('fill', 'none')
    // .attr('fill', (v) => rectFill(v.variance + baseTemp))
    // .attr('data-month', (v) => v.month - 1)
    // .attr('data-year', (v) => v.year)
    // .attr('data-temp', (v) => v.variance + baseTemp)
    // .attr("x", (v, i) => xScale(v.year))
    // .attr("y", (v, i) => yScale(v.month - 1))
    // .attr('width', (v) => rectWidth(v.month))
    // .attr('height', 25)
    .on('mouseover', handleMouseOver)
    .on('mouseout', handleMouseOut)

// svg.append("g")
//     .attr('id', 'x-axis')
    // .attr("transform", `translate(0, ${h - padding})`)
    // .call(xAxis.tickFormat((d) => d));

// svg.append("g")
//     .attr('id', 'y-axis')
//     .attr("transform", `translate(${padding}, -20)`)
//     .call(yAxis
//         .tickFormat((v) => d3.timeFormat('%B')(new Date(0).setMonth(v - 1)))
//     )

// var legend = svg.append("g")
//     .attr('id', 'legend')
//     .attr("transform", `translate(10, ${h - 20})`)

// legend.append('g')
//     .call(legendXAxis.tickFormat((v, i) => colors[i] && colors[i].min))

// legend.selectAll('rect')
//     .data(colors)
//     .enter()
//     .append('rect')
//     .attr('fill', (v) => v.color)
//     .attr("y", -15)
//     .attr("x", (v, i) => (i * 30))
//     .attr('width', 30)
//     .attr('height', 15)

// function getMonth(date) {
//     return d3.timeFormat('%B')(new Date(0).setMonth(date - 1))
// }

// function handleMouseOver(v, i) {
//     d3.select(this).attr('stroke', 'black')
//     tooltip.attr('data-year', v.year)
//     tooltip.html(
//         `<p>${v.year} - ${getMonth(v.month)}</p>
//         <p>${(v.variance + baseTemp).toFixed(1)}&#8451<p>
//         <p>${v.variance.toFixed(1)}&#8451</p>
//         `
//     )
//     tooltip.style('opacity', '1')
//     tooltip.style('top', `${yScale(v.month) - 40}px`)
//     tooltip.style('left', `${xScale(v.year) - 15}px`)
// }

// function handleMouseOut() {
//     tooltip.style('opacity', '0')
//     d3.select(this).attr('stroke', '')
// }