console.log("Module js_14.js | Execution Start");

class App {
     selected_cell_id       = "999"
    ;selected_cell_type     = "888"
    ;selected_cell_column   = "777"
    ;selected_cell_row      = "666"
    ;selected_cell_count    = "555"
    ;selected_cell_string   = "444"
    ;selected_cell          = "333"
    ;
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

console.log("Module js_14.js | Execution Terminate");


