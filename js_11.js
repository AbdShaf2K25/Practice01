console.log("Module js_11.js | Execution Start");
import * as js_15 from './js_15.js'

// Title    (id,css_class,data)
// Body     (id,css_class)
// h1       (id,css_class,data)

class Title {
    constructor(id,css_class,data){
         this.id        = id
        ;this.css_class = css_class
        ;this.data      = data
        ;this.title_obj = document.getElementById(id)
        ;document.getElementById(id).setAttribute("class",css_class)
        ;document.getElementById(id).innerHTML = data
        ;
    }
}

class Body {
    constructor(id,css_class){
         this.id        = id
        ;this.css_class = css_class
        ;this.bosy_obj  = document.getElementById(id)
        ;document.getElementById(id).setAttribute("class",css_class)
        ;
    }
}

class H1 {
    constructor(id,css_class,data){
         this.id        = id
        ;this.css_class = css_class
        ;this.data      = data
        ;this.h1_obj    = document.getElementById(id)
        ;document.getElementById(id).setAttribute("class",css_class)
        ;document.getElementById(id).innerHTML = data
        ;
    }
}

class Div {
    constructor(id,css_class,data){
         this.id        = id
        ;this.css_class = css_class
        ;this.data      = data
        ;this.div_obj   = document.getElementById(id)
        ;document.getElementById(id).setAttribute("class",css_class)
        ;document.getElementById(id).innerHTML = data
        ;
    }
}

class Table {
    constructor(id,css_class){
         this.id        = id
        ;this.css_class = css_class
        ;this.table_obj = document.getElementById(id)
        ;document.getElementById(id).setAttribute("class",css_class)
        ;
    }
}

class Cell {
    constructor(id,table,row,column,attribute,type,css_class,data){
         this.id        = id
        ;this.table     = table
        ;this.row       = row
        ;this.column    = column
        ;this.attribute = attribute
        ;this.type      = type
        ;this.css_class = css_class
        ;this.data      = data

        ;this.cell_obj  = document.getElementById(id)
        ;this.count     = 0

        ;document.getElementById(id).setAttribute("class",css_class)
        ;document.getElementById(id).innerHTML = data

        ;this.cell_obj.addEventListener("click", this.F_update_text.bind(this))
        ;js_15.App_1.F_update_selected_cell.bind(this)
        ;js_15.App_1.F_alert_date.bind(this)
        ;js_15.App_1.F_log_text.bind(this)
        ;
    }
    F_update_counter(val=1){
        this.count+=val;
    }
    F_update_text(text_new="|#"){
         this.count += 1
        ;this.data  =  String(this.count)
//*
        ;let str_console_T1 =
                "| ["
            +   this.id
            +   "] | ["
            +   this.row
            +   this.column
            +   "] | "
            +   "Count: ["
            +   this.count
            +   "] | "
            +   "String: ["
            +   this.data
            +   "] | "
            +   "Cell_Obj: ["
            +   this.cell
            +   "] | [#############]"
//            ;console.log(str_console_T1)
        ;
//*/
        ;document.getElementById(this.id).innerHTML = this.data
        ;document.getElementById(this.id).setAttribute("class","C_T1_main_sel_1")
        // Move all of this into the App class (in "js_14.js").
        // 

//        ;document.getElementById(this.cell_id).style.borderColor = "rgba(255, 255, 000, 1.000)"
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
        // Pre-log ???
        ;js_15.App_1.F_update_selected_cell(this)
        // Here add a UI update function.
        ;js_15.App_1.F_log_text()
        ;
    }
    F_log_text(text_new="|#"){
        ;let str_console =
                "| ["
            +   this.id
            +   "] | ["
            +   this.column
            +   this.row
            +   "] | "
            +   "Count: ["
            +   this.count
            +   "] | "
            +   "String: ["
            +   this.data
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
        ;document.getElementById(this.id).addEventListener("click", this.F_alert_date);

        //this.cell_count     += 1
        //;this.cell_string    =  this.cell_column + this.cell_count

        ;let str_console_T1 =
                "| ["
            +   this.row
            +   this.column
            +   "] | Updated To: ["
            +   this.data
            +   "] | [#############]"
        ;console.log(str_console_T1);

        //;document.getElementById(String(this.cell_id)).innerHTML = String(this.cell_string)
        ;let str_console =
                "| ["
            +   this.row
            +   this.column
            +   "] | Updated To: ["
            +   this.data
            +   "] |"
        ;console.log(str_console);
        ;
    }
}



export {
     Title
    ,Body
    ,H1
    ,Div
    ,Table
    ,Cell
}

console.log("Module js_11.js | Execution Terminate");


