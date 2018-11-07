// from data.js
var tableData = data;
console.log(data);
var tbody = d3.select("tbody");

data.forEach((ufoReport) => {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
  var cell = row.append("td");
   cell.text(value);
  });
});  

var submit = d3.select("#filter-btn");
submit.on("click", function() {
    d3.event.preventDefault();
    var inputDate = d3.select("#datetime");
    var inputValue = inputDate.property("value");
    var filteredData = tableData.filter(ufoReport => ufoReport.datetime === inputValue);
    console.log(filteredData);

    tbody.html("");

    filteredData.forEach((filteredUfoReport) => {
      var row = tbody.append("tr");
      Object.entries(filteredUfoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });  
  });
