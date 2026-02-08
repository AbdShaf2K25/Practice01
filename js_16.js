console.log("Module js_16.js | Execution Start");
import * as js_14 from './js_14.js'
import * as js_12 from './js_12.js'

// I will have to monkey patch using the following example code:

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

js_14.App.prototype.F_console_log_all_cells = function(){
    js_12.Export_Obj_1.C_T1_R1_C1.F_update_text();
    js_12.Export_Obj_1.C_T1_R1_C2.F_update_text();
    js_12.Export_Obj_1.C_T1_R1_C3.F_update_text();

    js_12.Export_Obj_1.C_T1_R2_C1.F_update_text();
    js_12.Export_Obj_1.C_T1_R2_C2.F_update_text();
    js_12.Export_Obj_1.C_T1_R2_C3.F_update_text();

    js_12.Export_Obj_1.C_T1_R3_C1.F_update_text();
    js_12.Export_Obj_1.C_T1_R3_C2.F_update_text();
    js_12.Export_Obj_1.C_T1_R3_C3.F_update_text();
}

/*
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
   /*
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
*/


/*
export {
     App
}
*/

console.log("Module js_16.js | Execution Terminate");


