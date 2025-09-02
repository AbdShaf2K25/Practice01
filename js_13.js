/*
let cell_A1 = 1;
let cell_A2 = 2;
let cell_A3 = 3;
*/

/*
const button_2 = document.getElementById("button_2");
button_2.addEventListener("click", js_11.alert_date_1);
document.getElementById("p1").innerHTML = "New text!";
*/

/*
function printName(user){
    console.log(`User's name is ${user.name}`);
}
*/

/*
function alert_date_1(){
    let d = new Date();
    alert("Today's date is " + d);
}
*/


/*
objectDefinition.js
// This file defines the object and its methods.
const myObject = {
  data: 'Hello, World!',
  
  // Method that will be called by the event listener.
  // We use a regular function here so 'this' can be rebound.
  handleClick: function(event) {
    console.log(this.data); // 'this' will be 'myObject' due to binding.
    console.log(event.target); // The HTML element that was clicked.
  }
};
*/

/*
app.js
// This file initializes the application and binds the event.
// Assuming we have an HTML button with id="myButton".
const myButton = document.getElementById('myButton');

// Create the object instance. In your case, you already defined it.
// Here we're just making a reference to it.
const appInstance = myObject;

// Bind the event listener to the object's method.
// We use .bind(appInstance) to ensure 'this' in 'handleClick' refers to 'appInstance'.
myButton.addEventListener('click', appInstance.handleClick.bind(appInstance));
*/

//
//
//

/*
So I've finally managed to get this all working as expected. I just need to clean things up
and implement all the objects I need. Then I can think of all of my next steps.
*/

/*
Cell_A1.F_log_text();
Cell_A2.F_log_text();
Cell_A3.F_log_text();

Cell_A1.F_update_text("New text for A1");
Cell_A1.F_update_text("New text for A2");
Cell_A1.F_update_text("New text for A3");

Cell_A1.F_log_text();
*/

//        ;this.cell          = document.getElementById(cell_id)
//        ;document.addEventListener("click", this.F_update_text)
        //;console.log(this.cell_id)
//document.getElementById("A1").addEventListener("click", Cell_A1.F_alert_date);

/*
         this.cell_id       = cell_id
        ;this.cell_column   = cell_column
        ;this.cell_row      = cell_row
        ;this.cell_count    = cell_row
        ;this.cell_string   = cell_column & cell_row

        ;this.cell          = document.getElementById(cell_id)
        ;this.cell.addEventListener("click", this.F_update_text)
*/

/*
        ;let str_console =
                "| ["
            +   this.cell_column
            +   this.cell_row
            +   "] | Updated To: ["
            +   this.cell_string
            +   "] |"
        ;console.log(str_console);
*/


