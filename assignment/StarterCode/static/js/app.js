// Submit Button handler

d3.json("/static/js/samples.json").then((data) => {
    console.log(data.names)
    
    var selector = d3.select("select");

    var options = selector.selectAll("option")
    .data(data)
    .enter()
    .append("option")
    .html(function(d)
    {return `<option value="${d.names}">${ d.names}</option>`;});
    console.log("foo");

    function onchange() {
        selectValue = selector.property('value')
        d3.select('body').append('select')
    };



});



function buildCharts(sample) {
    d3.json("samples.json").then((data) => {
        var samples = data.samples;
        var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
        var otu_ids = resultArray[0].otu_ids;
        var sample_values = resultArray[0].sample_values;
        var otu_labels = resultArray[0].otu_labels;
        
        
        var trace1 = [{
            type: "bar",
            orientation: "h",
            x: otu_ids.slice(0,10),
            y: sample_values.slice(0,10), }]; 
        
        // var layout = {
        //     title: `${stock} closing prices`,
        //     xaxis: };

    Plotly.newPlot("plot",trace1, layout);


    });
}

function optionChanged() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    d3.json("samples.json").then((data) => {
        data.names.forEach()
    })      
    }; 
