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


});