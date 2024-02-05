// Select the chart container
const chartContainer = d3.select("#chart-container");

// Load data from JSON file
d3.json("data.json").then(data => {
    // Create a simple bar chart
    const chart = d3.select("#chart-container")
        .append("svg")
        .attr("width", 400)
        .attr("height", 200);

    chart.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 100)
        .attr("y", d => 200 - d.value)
        .attr("width", 80)
        .attr("height", d => d.value)
        .attr("fill", "steelblue");
});
