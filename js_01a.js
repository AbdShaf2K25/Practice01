let i = 0;
let i_max = 200000 ;

// VSCode is quite slow. Let's see if we can alleviate this somehow (e.g. disable a whole bunch of extensions).

// I need to streamliine the software loadout of this chromebook as much as possible, if I can. It has really weak hardware and I want to get the most out of it.

const square_3x3 = {
     c01_r01 : "[]"
    ,c01_r02 : "[]"
    ,c01_r03 : "[]"
    ,c02_r01 : "[]"
    ,c02_r02 : "[]"
    ,c02_r03 : "[]"
    ,c03_r01 : "[]"
    ,c03_r02 : "[]"
    ,c03_r03 : "[]"
    ,F_initialise : function (base_val=1){
         this.c01_r01 = "A" + base_val +  0
        ,this.c01_r02 = "A" + base_val +  5
        ,this.c01_r03 = "A" + base_val + 10
        ,this.c02_r01 = "B" + base_val +  0
        ,this.c02_r02 = "B" + base_val +  5
        ,this.c02_r03 = "B" + base_val + 10
        ,this.c03_r01 = "C" + base_val +  0
        ,this.c03_r02 = "C" + base_val +  5
        ,this.c03_r03 = "C" + base_val + 10
    }
    ,F_consolelog : function (){
         console.log("|--------|")
        ,console.log
    }
}

while (i < i_max){
    console.log(i*i) ;
    i = i + 1 ;
}