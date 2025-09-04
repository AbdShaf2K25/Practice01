console.log("Module js_11.js | Execution Start");
import * as js_15 from './js_15.js'

class Cell {
    constructor(cell_id,cell_type,cell_column,cell_row){
         this.cell_id       = cell_id
        ;this.cell_type     = cell_type
        ;this.cell_column   = cell_column
        ;this.cell_row      = Number(cell_row)
        ;this.cell_count    = Number(cell_row)
        ;this.cell_string   = cell_column + cell_row

        ;this.cell          = document.getElementById(cell_id)
        ;this.cell.addEventListener("click", this.F_update_text.bind(this))
        ;js_15.App_1.F_update_selected_cell.bind(this)
        ;js_15.App_1.F_alert_date.bind(this)
        ;js_15.App_1.F_log_text.bind(this)
        ;
    }
    F_update_counter(val=1){
        this.cell_count+=val;
    }
    F_update_text(text_new="|#"){
         this.cell_count     += 1
        ;this.cell_string    =  String(this.cell_column) + String(this.cell_count)
//*
        ;let str_console_T1 =
                "| ["
            +   this.cell_id
            +   "] | ["
            +   this.cell_column
            +   this.cell_row
            +   "] | "
            +   "Count: ["
            +   this.cell_count
            +   "] | "
            +   "String: ["
            +   this.cell_string
            +   "] | "
            +   "Cell_Obj: ["
            +   this.cell
            +   "] | [#############]"
//            ;console.log(str_console_T1)
        ;
//*/
        ;document.getElementById(this.cell_id).innerHTML = this.cell_string
/*
        ;let str_console =
                "| ["
            +   this.cell_column
            +   this.cell_row
            +   "] | Updated To: ["
            +   this.cell_string
            +   "] |"
        ;console.log(str_console)
*/
        ;js_15.App_1.F_update_selected_cell(this)
        ;js_15.App_1.F_log_text()
        ;
    }
    F_log_text(text_new="|#"){
        ;let str_console =
                "| ["
            +   this.cell_id
            +   "] | ["
            +   this.cell_column
            +   this.cell_row
            +   "] | "
            +   "Count: ["
            +   this.cell_count
            +   "] | "
            +   "String: ["
            +   this.cell_string
            +   "] | "
            +   "Cell_Obj: ["
            +   this.cell
            +   "] |"
            ;console.log(str_console);
        ;
    }
    F_HTML_addEventListener(text_new="|#"){
        // this.cell          = document.getElementById(cell_id)
        //;document.addEventListener("click", this.F_update_text)
        ;document.getElementById(this.cell_id).addEventListener("click", this.F_alert_date);

        //this.cell_count     += 1
        //;this.cell_string    =  this.cell_column + this.cell_count

        ;let str_console_T1 =
                "| ["
            +   this.cell_column
            +   this.cell_row
            +   "] | Updated To: ["
            +   this.cell_string
            +   "] | [#############]"
        ;console.log(str_console_T1);

        //;document.getElementById(String(this.cell_id)).innerHTML = String(this.cell_string)
        ;let str_console =
                "| ["
            +   this.cell_column
            +   this.cell_row
            +   "] | Updated To: ["
            +   this.cell_string
            +   "] |"
        ;console.log(str_console);
        ;
    }
}
/*
    cell_type
"cell_main_1"
"cell_control_navigation"
"cell_control_number"
*/


export {
     Cell
}

console.log("Module js_11.js | Execution Terminate");


