(function(){
var d3 = Plotly.d3;

var element = d3.select('#myGraphPie');
var graphnode = element.node();


var graphTitle = "People Affected by DACA";

var data1 = {
  name: 'Red Title',
  x: ['Hispanic', '', '', '',''],
  y: [4, 6 , 12, 8, 3],
  type: 'bar',
  marker: {
    color: ['pink', 'black', '#DDA0DD','FFD700','C0C0C0'], 
    line: {
        width: 5
    } 
  }
};

Plotly.plot(graphnode, [data1], {
    title: graphTitle,
    font: {
        size: 16
    }
},
{
  displayModeBar: false
});

//this part make sure every window resize it also resizes the graph
window.addEventListener('resize', function(event){
    Plotly.Plots.resize(graphnode);
});

})();