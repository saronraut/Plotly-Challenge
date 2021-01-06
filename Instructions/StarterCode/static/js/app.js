// First Task: Use d3 to read json and create a horizontal bar chart with top ten OTU
d3.json("samples.json").then((data) => {
    console.log(data);
// trying to plot the otu from first sample
var sample_ids = data.samples[0].otu_ids;
// console.log(sample_ids);  

// getting the list of the first 10
var top10_ids = sample_ids.slice(0,10);
console.log(top10_ids);

// create an array(list) of samples_value 
var top10_values = data.samples[0].sample_values.slice(0,10);
console.log(top10_values);

// create an array of otu labels that correlate with info
var top10_labels = data.samples[0].otu_labels.slice(0,10);
console.log(top10_labels);

// Since the Otu is displayed as int, need to add "OTU" infront
// to insure its seens as string and easy to read. 
// map method allows to create a new array with added info
var top_OTU_id = top10_ids.map(id => "OTU " + id);
console.log(top_OTU_id);


// create a trace for plot
// used reverse to display the graph from highest to lowest
var tracebar = {
    x: top10_values.reverse(),
    y: top_OTU_id.reverse(),
    type: "bar",
    orientation : 'h',
    text : top10_labels.reverse()
};

var bardata = [tracebar];


Plotly.newPlot("bar", bardata)

});