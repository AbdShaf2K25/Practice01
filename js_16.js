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



/*
Cell constructor(
         id
        ,table
        ,row
        ,column
        ,attribute
        ,type
        ,css_class
        ,data
)
attribute data
        H + [W,X,Y,X] = header type
        W, X, Y, Z
        W = Vertical TOP
        X = Vertical BOTTOM
        Y = Horizontal LEFT
        Z = Horixontal RIGHT
*/
// const C_T1_R0_C1   = new js_11.Cell("C_T1_R0_C1" , "T1", "R0", "C1" , "HW", "H_col_1", "C_T1_H_col_1", "A");

/*

update  selected_cell_id
note it's row and column.

The cell will update first, then trigger the app_1 method.


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

js_14.App.prototype.F_initlalise_internal_cell_list = function(){
    this.cell_list = []
    ; for(let i=0; 10; i++){
        this.cell_list.push(js_12.Export_Obj_1[i]);
    }
    console.log(this.cell_list);
    console.log("Obj Length: " + Array.from(js_12.Export_Obj_1).length);
    console.log("i value: " + i);
}

/*
There is a function in js_11 which calls a function in js_14.
In either of these I will need to trigger a method defined in js_16.

How do I do this?

    1)
In the 1st level monkey patch, create various lists of cells.
Use these in the update function as needed.

    2)
In the cell constructor, update the app class directly.
This way it doesn't have to be MK'ed in.

Then I have to figure out how to trigger it upon a cell update.
Actually, that probably wont have to be MKed in.

####

So, in the cell constructor call an App Object function. Enter the cell objects ids into multiple lists.

Keep track of the previous and currently highlighted rows and columns.

This is easier than executing a function which generates a list of cell IDs to update or not. Although this isn't
a scalable solution. Where as the function which generates
a list is.


*/

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


