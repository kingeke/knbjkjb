const w = 960;
const h = 570;
const padding = 60

const svg = d3.select(".chart")
    .append("svg")
    .attr("width", w)
    .attr("height", h)

var files = [
    'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json'
]

Promise.all(files.map(url => d3.json(url))).then(function (values) {
    ready(values[0])
});

var tooltip = d3.select('.chart')
    .append('div')
    .attr('id', "tooltip")

var treemap = d3.treemap()
    .size([w / 1.1, h / 1.1])
    .paddingInner(0.5);

function ready(data) {

    var colorScale = d3.scaleOrdinal((data.children.map((item) => item.name)), (d3.schemeSet2))

    var root = d3.hierarchy(data)
        .eachBefore(function (d) {
            d.data.id = (d.parent ? d.parent.data.id + "." : "") + d.data.name;
        })
        .sum(sumBySize)
        .sort(function (a, b) { return b.height - a.height || b.value - a.value; });

    treemap(root);

    var cell = svg.selectAll("g")
        .data(root.leaves())
        .enter()
        .append("g")
        .attr("class", "group")
        .attr("transform", function (d) { return "translate(" + d.x0 + "," + d.y0 + ")"; });

    cell.append("rect")
        .attr("id", (d) => d.data.id)
        .attr("class", "tile")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("data-name", (d) => d.data.name)
        .attr("data-category", (d) => d.data.category)
        .attr("data-value", (d) => d.data.value)
        .attr("fill", (d) => colorScale(d.data.category))
        .on("mousemove", onMouseOver)
        .on("mouseout", () => tooltip.style("opacity", 0))

    cell.append('text')
        .selectAll('tspan')
        .data((d) => d.data.name.split(/(?=[A-Z][^A-Z])/g))
        .enter()
        .append('tspan')
        .text((d) => d)
        .attr('x', 4)
        .attr('y', (d, i) => (i * 10) + 12)
        .style('font-size', 8)

    function onMouseOver(d) {
        tooltip.style("opacity", .9);
        tooltip.html(
            'Name: ' + d.data.name +
            '<br>Category: ' + d.data.category +
            '<br>Value: ' + d.data.value
        )
        tooltip.attr("data-value", d.data.value)
        tooltip.style("left", (d3.event.pageX + 10) + "px")
        tooltip.style("top", (d3.event.pageY - 28) + "px");
    }

    var legend = svg.append("g")
        .attr('id', 'legend')
        .attr("transform", `translate(${w - padding}, ${10})`)
        .selectAll('g')
        .data(data.children)
        .enter()
        .append('g')

    legend.append('rect')
        .attr('class', 'legend-item')
        .attr('width', 10)
        .attr('height', 10)
        .attr('y', (d, i) => i * 15)
        .attr('fill', (d) => colorScale(d.name))

    legend.append('text')
        .attr('y', (d, i) => i * 15 + 9)
        .attr('x', 15)
        .text((d) => d.name)
        .style('font-size', 10)
}

function sumBySize(d) {
    return d.value;
}
