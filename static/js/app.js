// Get a reference to the table body
var tbody = d3.select("tbody");
var text = d3.select("#text");

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
      
        });
        i++
    }
    
};
