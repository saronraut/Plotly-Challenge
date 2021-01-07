// First Task: Use d3 to read json and create a horizontal bar chart with top ten OTU
d3.json("samples.json").then((data) => {
    // console.log(data);
// trying to plot the otu from first sample
var sample_ids = data.samples[0].otu_ids;
// console.log(sample_ids);  

// getting the list of the first 10
var top10_ids = sample_ids.slice(0,10);
// console.log(top10_ids);

// create an array(list) of samples_value 
var top10_values = data.samples[0].sample_values.slice(0,10);
// console.log(top10_values);

// create an array of otu labels that correlate with info
var top10_labels = data.samples[0].otu_labels.slice(0,10);
// console.log(top10_labels);

// Since the Otu is displayed as int, need to add "OTU" infront
// to insure its seens as string and easy to read. 
// map method allows to create a new array with added info
var top_OTU_id = top10_ids.map(id => "OTU " + id);
// console.log(top_OTU_id);


// create a trace for plot
// used reverse to display the graph from highest to lowest
var tracebar = {
    x: top10_values.reverse(),
    y: top_OTU_id.reverse(),
    type: "bar",
    orientation : 'h',
    text : top10_labels.reverse()
};

var layout = {
    title : "Top 10 OTU",
    showlegend : false
};
// create the data into an array
var bardata = [tracebar];

// Use plotly to create a barh
Plotly.newPlot("bar", bardata, layout)


// Second TASK: Creating a bubble chart that display each samples
// x is otu_id and y is sample_values
// sample_id contains all the OTU in first sample

// create an array(list) of samples_value 
var Otu_values = data.samples[0].sample_values;
// console.log(Otu_values);



//  created a Trace for Bubble plot
var tracebubble = {
    x: sample_ids,
    y: Otu_values,
    mode: "markers",
    marker : {
        size: Otu_values,
        color: sample_ids
    },
    // didn't have variables saved but labels was retreieved
    text : data.samples[0].otu_labels
};
// assign layout for clear context layout name was changed. 
var layout_2 = {
    height: 500,
    width : 1000,
    xaxis : {title:"OTU ID"}
}

// creating an array for plot
var bubbledata = [tracebubble];

Plotly.newPlot("bubble", bubbledata, layout_2)

});

// work on creating demographic data
// call function to get data
function getdeminfo(id){
    d3.json("samples.json").then((data)=> {
        var meta_data = data.metadata;
        console.log(meta_data);

        var result = meta_data.filter(item => item.id === id)[0];

        var demoinfo = d3.select("#sample-metadata");
    })
 }




// thought process: similar to creating table for previous homework
// dropdown button needed and connect the json to display id info
