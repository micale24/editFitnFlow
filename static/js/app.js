// Get a reference to the table body
var tbody = d3.select("tbody");
var text = d3.select("#text");
//Console.log the weather data from data.js
// console.log(moves.keys(1));

// data.forEach((move) => {
//     var row = tbody.append("tr");
//     Object.entries(move).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });



// function flow_random() {
//     var moveList = []
//     var i = 0
//     while (i in Range(inputValue)){
//         move_1 = string(Math.floor(Math.random() * (max - min + 1) ) + min);
//         flow_1 = data.filter(move_1)
//         //moveList.append(flow_1)
//         i++
//         var newRows = d3.select("tbody");
//         var newRowstext = d3.select("#text");
//         newRows.html("")
//         moveList.forEach((flow_1) => {
//           var newRowstext = newRows.append("tr");
//           Object.entries(flow_1).forEach(([key, value]) =>{
//             var cell = newRowstext.append("td");
//             cell.text(value);
//           });
//         });
//     }
//     return moveList
// }

// console.log(move_1)
// Assign the data from `data.js` to a descriptive variable
// var moves = data;

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
var button = d3.select("#filter-btn")
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#moveNum");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var moveList = []
  var move_1 = Number
  var i = 0
  var max = 28
  var min = 1
    while (i < inputValue){
        move_1 = 0
        move_1 = Math.floor(Math.random() * (max - min + 1) ) + min;
        var flow_num = moves[move_1]
        
        moveList.push(flow_num)
        
        
        var newRows = d3.select("tbody");
        // var newRowstext = d3.select("#text");
        newRows.html("")
        console.log(moveList)
      

        moveList.forEach((move) => {
          console.log(move)
          var newRowstext = newRows.append("tr");
          var cell = newRowstext.append("td")
          cell.text(move)
        //    Object.entries(move).forEach(([key, value]) =>{
        //     console.log(key)
        //     console.log(value)
            // var cell = newRowstext.append("tr");
            // cell.text(value)
        //   });
        });
        i++
    }
    
  //   var filteredData = filterDate.filter(dateInput => dateInput.datetime === inputValue);
  
  // remove the contents and update with user input date and data
    //   var newRows = d3.select("tbody");
    //   var newRowstext = d3.select("#text");
    //   newRows.html("")
    //   moveList.forEach((moveFlow) => {
    //     var newRowstext = newRows.append("tr");
    //     Object.entries(filterweather).forEach(([key, value]) =>{
    //       var cell = newRowstext.append("td");
    //       cell.text(value);
    //     });
    //   });
};
