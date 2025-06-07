class square_3x3 {
     c01_r01 = "##00"
    ;c02_r01 = "##00"
    ;c03_r01 = "##00"

    ;c01_r02 = "##00"
    ;c02_r02 = "##00"
    ;c03_r02 = "##00"

    ;c01_r03 = "##00"
    ;c02_r03 = "##00"
    ;c03_r03 = "##00"
    constructor (base_val=5){
        if (base_val<=0){
            base_val=15;
        } else if(base_val>=935){
            base_val=930;
        }
        let base_val_1=(base_val+ 0).toString();
        let base_val_2=(base_val+15).toString();
        let base_val_3=(base_val+35).toString();
        if (base_val_1.length==1){
            base_val_1="0"+base_val_1;
        } else if(base_val_1.length==2){
            // Do nothing.
        }
        if (base_val_2.length==1){
            base_val_2="0"+base_val_2;
        } else if(base_val_2.length==2){
            // Do nothing.
        }
        if (base_val_3.length==1){
            base_val_3="0"+base_val_3;
        } else if(base_val_3.length==2){
            // Do nothing.
        }
         this.c01_r01 = "#A"+base_val_1
        ,this.c02_r01 = "#B"+base_val_1
        ,this.c03_r01 = "#C"+base_val_1

        ,this.c01_r02 = "#A"+base_val_2
        ,this.c02_r02 = "#B"+base_val_2
        ,this.c03_r02 = "#C"+base_val_2
    
        ,this.c01_r03 = "#A"+base_val_3
        ,this.c02_r03 = "#B"+base_val_3
        ,this.c03_r03 = "#C"+base_val_3
    }
    F_elem_set(elem,val){
        switch(elem){
            case "c01_r01":
                this.c01_r01=val;
                break;
            case "c02_r01":
                this.c02_r01=val;
                break;
            case "c03_r01":
                this.c03_r01=val;
                break;
            case "c01_r02":
                this.c01_r02=val;
                break;
            case "c02_r02":
                this.c02_r02=val;
                break;
            case "c03_r02":
                this.c03_r02=val;
                break;
            case "c01_r03":
                this.c01_r03=val;
                break;
            case "c02_r03":
                this.c02_r03=val;
                break;
            case "c03_r03":
                this.c03_r03=val;
                break;
        }
    }
    F_elem_get(elem){
        let elem_val;
        switch(elem){
            case "c01_r01":
                elem_val=this.c01_r01;
                break;
            case "c02_r01":
                elem_val=this.c02_r01;
                break;
            case "c03_r01":
                elem_val=this.c03_r01;
                break;
            case "c01_r02":
                elem_val=this.c01_r02;
                break;
            case "c02_r02":
                elem_val=this.c02_r02;
                break;
            case "c03_r02":
                elem_val=this.c03_r02;
                break;
            case "c01_r03":
                elem_val=this.c01_r03;
                break;
            case "c02_r03":
                elem_val=this.c02_r03;
                break;
            case "c03_r03":
                elem_val=this.c03_r03;
                break;
        }
        return elem_val;
    }
    F_elem_set_all(
         c01_r01_val
        ,c02_r01_val
        ,c03_r01_val
        ,c01_r02_val
        ,c02_r02_val
        ,c03_r02_val
        ,c01_r03_val
        ,c02_r03_val
        ,c03_r03_val
    ){
         this.c01_r01=c01_r01_val
        ;this.c02_r01=c02_r01_val
        ;this.c03_r01=c03_r01_val
        ;this.c01_r02=c01_r02_val
        ;this.c02_r02=c02_r02_val
        ;this.c03_r02=c03_r02_val
        ;this.c01_r03=c01_r03_val
        ;this.c02_r03=c02_r03_val
        ;this.c03_r03=c03_r03_val
    }
    F_elem_get_all(){
        let elem_array = [
             this.c01_r01
            ,this.c02_r01
            ,this.c03_r01
            ,this.c01_r02
            ,this.c02_r02
            ,this.c03_r02
            ,this.c01_r03
            ,this.c02_r03
            ,this.c03_r03
        ]
        ; return elem_array ;
    }
    F_elem_get_all_csv(){
        let elem_string =
                    this.c01_r01
            + "," + this.c02_r01
            + "." + this.c03_r01
            + "," + this.c01_r02
            + "," + this.c02_r02
            + "," + this.c03_r02
            + "," + this.c01_r03
            + "," + this.c02_r03
            + "," + this.c03_r03
        ; return elem_string ;
    }
    F_print_obj() {
         console.log("|---------------------------|")
        ,console.log ("|" + this.c01_r01 + "|" + this.c02_r01 + "|" + this.c03_r01 + "|")
        ,console.log ("|" + this.c01_r02 + "|" + this.c02_r02 + "|" + this.c03_r02 + "|")
        ,console.log ("|" + this.c01_r03 + "|" + this.c02_r03 + "|" + this.c03_r03 + "|")
        ,console.log("|---------------------------|")
        ,console.log("")
    }
}
class square_4x4 {
     c01_r01 = "###000"
    ;c02_r01 = "###000"
    ;c03_r01 = "###000"
    ;c04_r01 = "###000"

    ;c01_r02 = "###000"
    ;c02_r02 = "###000"
    ;c03_r02 = "###000"
    ;c04_r02 = "###000"

    ;c01_r03 = "###000"
    ;c02_r03 = "###000"
    ;c03_r03 = "###000"
    ;c04_r03 = "###000"

    ;c01_r04 = "###000"
    ;c02_r04 = "###000"
    ;c03_r04 = "###000"
    ;c04_r04 = "###000"
    constructor (base_val=5){
        if (base_val<=0){
            base_val=15;
        } else if(base_val>=935){
            base_val=930;
        }
        let base_val_1=(base_val+ 0).toString();
        let base_val_2=(base_val+15).toString();
        let base_val_3=(base_val+35).toString();
        let base_val_4=(base_val+65).toString();
        if (base_val_1.length==1){
            base_val_1="00"+base_val_1;
        } else if(base_val_1.length==2){
            base_val_1="0" +base_val_1;
        } else if(base_val_1.length==3){
            // Do nothing.
        }
        if (base_val_2.length==1){
            base_val_2="00"+base_val_2;
        } else if(base_val_2.length==2){
            base_val_2="0" +base_val_2;
        } else if(base_val_2.length==3){
            // Do nothing.
        }
        if (base_val_3.length==1){
            base_val_3="00"+base_val_3;
        } else if(base_val_3.length==2){
            base_val_3="0" +base_val_3;
        } else if(base_val_3.length==3){
            // Do nothing.
        }
        if (base_val_4.length==1){
            base_val_4="00"+base_val_4;
        } else if(base_val_4.length==2){
            base_val_4="0" +base_val_4;
        } else if(base_val_4.length==3){
            // Do nothing.
        }
         this.c01_r01 = "##A"+base_val_1
        ,this.c02_r01 = "##B"+base_val_1
        ,this.c03_r01 = "##C"+base_val_1
        ,this.c04_r01 = "##D"+base_val_1

        ,this.c01_r02 = "##A"+base_val_2
        ,this.c02_r02 = "##B"+base_val_2
        ,this.c03_r02 = "##C"+base_val_2
        ,this.c04_r02 = "##D"+base_val_2
    
        ,this.c01_r03 = "##A"+base_val_3
        ,this.c02_r03 = "##B"+base_val_3
        ,this.c03_r03 = "##C"+base_val_3
        ,this.c04_r03 = "##D"+base_val_3

        ,this.c01_r04 = "##A"+base_val_4
        ,this.c02_r04 = "##B"+base_val_4
        ,this.c03_r04 = "##C"+base_val_4
        ,this.c04_r04 = "##D"+base_val_4
    }
    F_updateval(elem,val){
        switch(elem){
            case "c01_r01":
                this.c01_r01=val;
                break;
            case "c02_r01":
                this.c02_r01=val;
                break;
            case "c03_r01":
                this.c03_r01=val;
                break;
            case "c04_r01":
                this.c04_r01=val;
                break;
            case "c01_r02":
                this.c01_r02=val;
                break;
            case "c02_r02":
                this.c02_r02=val;
                break;
            case "c03_r02":
                this.c03_r02=val;
                break;
            case "c04_r02":
                this.c04_r02=val;
                break;
            case "c01_r03":
                this.c01_r03=val;
                break;
            case "c02_r03":
                this.c02_r03=val;
                break;
            case "c03_r03":
                this.c03_r03=val;
                break;
            case "c04_r03":
                this.c04_r03=val;
                break;
            case "c01_r04":
                this.c01_r04=val;
                break;
            case "c02_r04":
                this.c02_r04=val;
                break;
            case "c03_r04":
                this.c03_r04=val;
                break;
            case "c04_r04":
                this.c04_r04=val;
                break;
        }
    }
    F_retreiveval(elem){
        let elem_val;
        switch(elem){
            case "c01_r01":
                elem_val=this.c01_r01;
                break;
            case "c02_r01":
                elem_val=this.c02_r01;
                break;
            case "c03_r01":
                elem_val=this.c03_r01;
                break;
            case "c04_r01":
                elem_val=this.c04_r01;
                break;
            case "c01_r02":
                elem_val=this.c01_r02;
                break;
            case "c02_r02":
                elem_val=this.c02_r02;
                break;
            case "c03_r02":
                elem_val=this.c03_r02;
                break;
            case "c04_r02":
                elem_val=this.c04_r02;
                break;
            case "c01_r03":
                elem_val=this.c01_r03;
                break;
            case "c02_r03":
                elem_val=this.c02_r03;
                break;
            case "c03_r03":
                elem_val=this.c03_r03;
                break;
            case "c04_r03":
                elem_val=this.c04_r03;
                break;
            case "c01_r04":
                elem_val=this.c01_r04;
                break;
            case "c02_r04":
                elem_val=this.c02_r04;
                break;
            case "c03_r04":
                elem_val=this.c03_r04;
                break;
            case "c04_r04":
                elem_val=this.c04_r04;
                break;
        }
        return elem_val;
    }
    F_consolelog() {
         console.log("|---------------------------|")
        ,console.log ("|" + this.c01_r01 + "|" + this.c02_r01 + "|" + this.c03_r01 + "|" + this.c04_r01 + "|")
        ,console.log ("|" + this.c01_r02 + "|" + this.c02_r02 + "|" + this.c03_r02 + "|" + this.c04_r02 + "|")
        ,console.log ("|" + this.c01_r03 + "|" + this.c02_r03 + "|" + this.c03_r03 + "|" + this.c04_r03 + "|")
        ,console.log ("|" + this.c01_r04 + "|" + this.c02_r04 + "|" + this.c03_r04 + "|" + this.c04_r04 + "|")
        ,console.log("|---------------------------|")
        ,console.log("")
    }
}

// Add a function to basically set every single element in the class. Then constuct another class to house nine square_3x3 objects. Use this as the basis of a sudoku board. I need to write a print function for this as well.

let sq_1 = new square_3x3();
//sq_1.F_initialise (325);
sq_1.F_print_obj ();
sq_1.F_elem_set("c01_r01","-1");
sq_1.F_print_obj ();

sq_1.F_elem_set_all(
     "##Z101"
    ,"##Z102"
    ,"##Z103"

    ,"##Z104"
    ,"##Z105"
    ,"##Z106"

    ,"##Z107"
    ,"##Z108"
    ,"##Z109"
);

/*
let val_1 =
        sq_1.F_elem_get("c01_r01")
    +   sq_1.F_elem_get("c02_r01")
    +   sq_1.F_elem_get("c03_r01")

    +   sq_1.F_elem_get("c01_r02")
    +   sq_1.F_elem_get("c02_r02")
    +   sq_1.F_elem_get("c03_r02")

    +   sq_1.F_elem_get("c01_r03")
    +   sq_1.F_elem_get("c02_r03")
    +   sq_1.F_elem_get("c03_r03")
    ;
*/
let val_1 = sq_1.F_elem_get_all_csv();

console.log(val_1);
console.log();
console.log();
console.log();
sq_1.F_print_obj ();


