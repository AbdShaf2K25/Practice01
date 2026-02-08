console.log("Module js_14.js | Execution Start");

class App {
     cell_sel_1_id          = ""
    ;cell_sel_1_table       = ""
    ;cell_sel_1_row         = ""
    ;cell_sel_1_column      = ""
    ;cell_sel_1_attribute   = ""
    ;cell_sel_1_type        = ""
    ;cell_sel_1_css_class   = ""
    ;cell_sel_1_data        = ""
    ;cell_sel_1_obj         = ""
    ;cell_sel_1_count       = ""

     cell_prev_1_id          = ""
    ;cell_prev_1_table       = ""
    ;cell_prev_1_row         = ""
    ;cell_prev_1_column      = ""
    ;cell_prev_1_attribute   = ""
    ;cell_prev_1_type        = ""
    ;cell_prev_1_css_class   = ""
    ;cell_prev_1_data        = ""
    ;cell_prev_1_obj         = ""
    ;cell_prev_1_count       = ""
    ;
    /*
    constructor(){
         cell_sel_1_id          = ""
        ;cell_sel_1_table       = ""
        ;cell_sel_1_row         = ""
        ;cell_sel_1_column      = ""
        ;cell_sel_1_attribute   = ""
        ;cell_sel_1_type        = ""
        ;cell_sel_1_css_class   = ""
        ;cell_sel_1_data        = ""
        ;cell_sel_1_obj         = ""
        ;cell_sel_1_count       = ""
        ;
    }
    */
    F_update_selected_cell(cell){
         this.cell_prev_1_id        = this.cell_sel_1_id
        ;this.cell_prev_1_table     = this.cell_sel_1_table
        ;this.cell_prev_1_row       = this.cell_sel_1_row
        ;this.cell_prev_1_column    = this.cell_sel_1_column
        ;this.cell_prev_1_attribute = this.cell_sel_1_attribute
        ;this.cell_prev_1_type      = this.cell_sel_1_type
        ;this.cell_prev_1_css_class = this.cell_sel_1_css_class
        ;this.cell_prev_1_data      = this.cell_sel_1_data
        ;this.cell_prev_1_obj       = this.cell_sel_1_obj
        ;this.cell_prev_1_count     = this.cell_sel_1_count

        ;this.cell_sel_1_id         = cell.id
        ;this.cell_sel_1_table      = cell.table
        ;this.cell_sel_1_row        = cell.row
        ;this.cell_sel_1_column     = cell.column
        ;this.cell_sel_1_attribute  = cell.attribute
        ;this.cell_sel_1_type       = cell.type
        ;this.cell_sel_1_css_class  = cell.css_class
        ;this.cell_sel_1_data       = cell.data
        ;this.cell_sel_1_obj        = cell.cell_obj
        ;this.cell_sel_1_count      = cell.count
        ;
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
                "ID: ["
            +   this.cell_sel_1_id
            +   "] Tbl: ["
            +   this.cell_sel_1_table
            +   "] Row: ["
            +   this.cell_sel_1_row
            +   "] Col: ["
            +   this.cell_sel_1_column
            +   "] Attr: ["
            +   this.cell_sel_1_attribute
            +   "] Type: ["
            +   this.cell_sel_1_type
            +   "] CSS: ["
            +   this.cell_sel_1_css_class
            +   "] Data: ["
            +   this.cell_sel_1_data
            +   "] C_Obj: ["
            +   this.cell_sel_1_obj
            +   "] Cnt: ["
            +   this.cell_sel_1_count
            +   "]"
            ;console.log(str_console);
        ;
    }
}



export {
     App
}

console.log("Module js_14.js | Execution Terminate");


