let square_3x3 = {
     c01_r01 : "###000"
    ,c01_r02 : "###000"
    ,c01_r03 : "###000"
    ,c02_r01 : "###000"
    ,c02_r02 : "###000"
    ,c02_r03 : "###000"
    ,c03_r01 : "###000"
    ,c03_r02 : "###000"
    ,c03_r03 : "###000"
    ,F_initialise : function(base_val=5){
        if (base_val<=0){
            base_val=15;
        } else if(base_val>=975){
            base_val=970;
        }
        let base_val_1=(base_val+ 0).toString();
        let base_val_2=(base_val+15).toString();
        let base_val_3=(base_val+25).toString();
        if (base_val_1.length==1){
            base_val_1="00"+base_val_1;
        } else if(base_val_1.length==2){
            base_val_1="0" +base_val_1
        } else if(base_val_1.length==3){
            // Do nothing.
        }
        if (base_val_2.length==1){
            base_val_2="00"+base_val_2;
        } else if(base_val_2.length==2){
            base_val_2="0" +base_val_2
        } else if(base_val_2.length==3){
            // Do nothing.
        }
        if (base_val_3.length==1){
            base_val_3="00"+base_val_3;
        } else if(base_val_3.length==2){
            base_val_3="0" +base_val_3
        } else if(base_val_3.length==3){
            // Do nothing.
        }
         this.c01_r01 = "##A"+base_val_1
        ,this.c01_r02 = "##A"+base_val_2
        ,this.c01_r03 = "##A"+base_val_3
        ,this.c02_r01 = "##B"+base_val_1
        ,this.c02_r02 = "##B"+base_val_2
        ,this.c02_r03 = "##B"+base_val_3
        ,this.c03_r01 = "##C"+base_val_1
        ,this.c03_r02 = "##C"+base_val_2
        ,this.c03_r03 = "##C"+base_val_3
        // Here I need to be a bit careful with the "base_val". I want to format it to always be between
    }
    ,F_consolelog : function (){
         console.log("|--------------------|")
        ,console.log ("|" + this.c01_r01 + "|" + this.c01_r02 + "|" + this.c01_r03 + "|")
        ,console.log ("|" + this.c02_r01 + "|" + this.c02_r02 + "|" + this.c02_r03 + "|")
        ,console.log ("|" + this.c03_r01 + "|" + this.c03_r02 + "|" + this.c03_r03 + "|")
        ,console.log("|--------------------|")
        ,console.log("")
    }
}
/*
let square_4x4 = {
     c01_r01 : "###000"
    ,c01_r02 : "###000"
    ,c01_r03 : "###000"
    ,c01_r04 : "###000"
    ,c02_r01 : "###000"
    ,c02_r02 : "###000"
    ,c02_r03 : "###000"
    ,c02_r04 : "###000"
    ,c03_r01 : "###000"
    ,c03_r02 : "###000"
    ,c03_r03 : "###000"
    ,c03_r04 : "###000"
    ,c04_r01 : "###000"
    ,c04_r02 : "###000"
    ,c04_r03 : "###000"
    ,c04_r04 : "###000"
    ,F_initialise : function(base_val=5){
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
            base_val_1="0" +base_val_1
        } else if(base_val_1.length==3){
            // Do nothing.
        }
        if (base_val_2.length==1){
            base_val_2="00"+base_val_2;
        } else if(base_val_2.length==2){
            base_val_2="0" +base_val_2
        } else if(base_val_2.length==3){
            // Do nothing.
        }
        if (base_val_3.length==1){
            base_val_3="00"+base_val_3;
        } else if(base_val_3.length==2){
            base_val_3="0" +base_val_3
        } else if(base_val_3.length==3){
            // Do nothing.
        }
        if (base_val_4.length==1){
            base_val_4="00"+base_val_4;
        } else if(base_val_4.length==2){
            base_val_4="0" +base_val_4
        } else if(base_val_4.length==3){
            // Do nothing.
        }
         this.c01_r01 = "##A"+base_val_1
        ,this.c01_r02 = "##A"+base_val_2
        ,this.c01_r03 = "##A"+base_val_3
        ,this.c01_r04 = "##A"+base_val_4
        ,this.c02_r01 = "##B"+base_val_1
        ,this.c02_r02 = "##B"+base_val_2
        ,this.c02_r03 = "##B"+base_val_3
        ,this.c02_r04 = "##B"+base_val_4
        ,this.c03_r01 = "##C"+base_val_1
        ,this.c03_r02 = "##C"+base_val_2
        ,this.c03_r03 = "##C"+base_val_3
        ,this.c03_r04 = "##C"+base_val_4
        ,this.c04_r01 = "##D"+base_val_1
        ,this.c04_r02 = "##D"+base_val_2
        ,this.c04_r03 = "##D"+base_val_3
        ,this.c04_r04 = "##D"+base_val_4
        // Here I need to be a bit careful with the "base_val". I want to format it to always be between
    }
    ,F_consolelog : function (){
         console.log("|---------------------------|")
        ,console.log ("|" + this.c01_r01 + "|" + this.c02_r01 + "|" + this.c03_r01 + "|" + this.c04_r01 + "|")
        ,console.log ("|" + this.c01_r02 + "|" + this.c02_r02 + "|" + this.c03_r02 + "|" + this.c04_r02 + "|")
        ,console.log ("|" + this.c01_r03 + "|" + this.c02_r03 + "|" + this.c03_r03 + "|" + this.c04_r03 + "|")
        ,console.log ("|" + this.c01_r04 + "|" + this.c02_r04 + "|" + this.c03_r04 + "|" + this.c04_r04 + "|")
        ,console.log("|---------------------------|")
        ,console.log("")
    }
}
*/
class square_4x4 {
     c01_r01 = "###000"
    ;c01_r02 = "###000"
    ;c01_r03 = "###000"
    ;c01_r04 = "###000"
    ;c02_r01 = "###000"
    ;c02_r02 = "###000"
    ;c02_r03 = "###000"
    ;c02_r04 = "###000"
    ;c03_r01 = "###000"
    ;c03_r02 = "###000"
    ;c03_r03 = "###000"
    ;c03_r04 = "###000"
    ;c04_r01 = "###000"
    ;c04_r02 = "###000"
    ;c04_r03 = "###000"
    ;c04_r04 = "###000"
    constructor (base_val){
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
            base_val_1="0" +base_val_1
        } else if(base_val_1.length==3){
            // Do nothing.
        }
        if (base_val_2.length==1){
            base_val_2="00"+base_val_2;
        } else if(base_val_2.length==2){
            base_val_2="0" +base_val_2
        } else if(base_val_2.length==3){
            // Do nothing.
        }
        if (base_val_3.length==1){
            base_val_3="00"+base_val_3;
        } else if(base_val_3.length==2){
            base_val_3="0" +base_val_3
        } else if(base_val_3.length==3){
            // Do nothing.
        }
        if (base_val_4.length==1){
            base_val_4="00"+base_val_4;
        } else if(base_val_4.length==2){
            base_val_4="0" +base_val_4
        } else if(base_val_4.length==3){
            // Do nothing.
        }
         this.c01_r01 = "##A"+base_val_1
        ,this.c01_r02 = "##A"+base_val_2
        ,this.c01_r03 = "##A"+base_val_3
        ,this.c01_r04 = "##A"+base_val_4
        ,this.c02_r01 = "##B"+base_val_1
        ,this.c02_r02 = "##B"+base_val_2
        ,this.c02_r03 = "##B"+base_val_3
        ,this.c02_r04 = "##B"+base_val_4
        ,this.c03_r01 = "##C"+base_val_1
        ,this.c03_r02 = "##C"+base_val_2
        ,this.c03_r03 = "##C"+base_val_3
        ,this.c03_r04 = "##C"+base_val_4
        ,this.c04_r01 = "##D"+base_val_1
        ,this.c04_r02 = "##D"+base_val_2
        ,this.c04_r03 = "##D"+base_val_3
        ,this.c04_r04 = "##D"+base_val_4
        // Here I need to be a bit careful with the "base_val". I want to format it to always be between
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

/*
square_3x3.F_consolelog ();
square_3x3.F_initialise ();
square_3x3.F_consolelog ();
square_3x3.F_initialise (325);
square_3x3.F_consolelog ();
*/
/*
square_4x4.F_consolelog ();
square_4x4.F_initialise ();
square_4x4.F_consolelog ();
*/
/*
square_4x4.F_initialise (325);
square_4x4.F_consolelog ();
*/

square_4x4.F_initialise (325);
square_4x4.F_consolelog ();

let sq_1 = new square_4x4();