console.log("Module js_16.js | Execution Start");

/// I want to add methods to the App class, after the app and cell objects have been initialised.
/// The definitions of said methods will be housed here and "js_17.js" will initialise them.

// The code below is how I will have to do things.

/*
class Robot {
  constructor(model) {
    this.model = model;
  }
}

const bot1 = new Robot("T-800");

// Adding to the prototype later
Robot.prototype.identify = function() {
  console.log(`Model: ${this.model}`);
};

bot1.identify(); // "Model: T-800"
*/

class App {
     selected_cell_id       = "999"
    ;selected_cell_type     = "888"
    ;selected_cell_column   = "777"
    ;selected_cell_row      = "666"
    ;selected_cell_count    = "555"
    ;selected_cell_string   = "444"
    ;selected_cell          = "333"
    ;previous_cell_id       = "999"
    ;previous_cell_type     = "888"
    ;previous_cell_column   = "777"
    ;previous_cell_row      = "666"
    ;previous_cell_count    = "555"
    ;previous_cell_string   = "444"
    ;previous_cell          = "333"
    /*
    constructor(){
         this.selected_cell_id       = ""
        ;this.selected_cell_type     = ""
        ;this.selected_cell_column   = ""
        ;this.selected_cell_row      = ""
        ;this.selected_cell_count    = ""
        ;this.selected_cell_string   = ""
        ;this.selected_cell          = ""
        ;
    }
    */
    F_update_selected_cell(cell){
         this.selected_cell_id      = cell.cell_id
        ;this.selected_cell_type    = cell.cell_type
        ;this.selected_cell_column  = cell.cell_column
        ;this.selected_cell_row     = cell.cell_row
        ;this.selected_cell_count   = cell.cell_count
        ;this.selected_cell_string  = cell.cell_string
        ;this.selected_cell         = cell.cell
    }
    F_alert_date(){
         let d = new Date();
        ;let str_console =
                "Today's date is: "
            +   d
            ;
        ;console.log(str_console)
        ;alert(str_console)
        ;
    }
    F_log_text(text_new="|#"){
        ;let str_console =
                "| ["
            +   this.selected_cell_id
            +   "] | ["
            +   this.selected_cell_type
            +   "] | ["
            +   this.selected_cell_column
            +   this.selected_cell_row
            +   "] | "
            +   "Count: ["
            +   this.selected_cell_count
            +   "] | "
            +   "String: ["
            +   this.selected_cell_string
            +   "] | "
            +   "Cell_Obj: ["
            +   this.selected_cell
            +   "] | [^^^^^^^^^^^^^]"
            ;console.log(str_console);
        ;
    }
}



export {
     App
}

console.log("Module js_16.js | Execution Terminate");


