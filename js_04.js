class square_3x3 {
     c01_r01 = "#"
    ;c02_r01 = "#"
    ;c03_r01 = "#"
    ;c01_r02 = "#"
    ;c02_r02 = "#"
    ;c03_r02 = "#"
    ;c01_r03 = "#"
    ;c02_r03 = "#"
    ;c03_r03 = "#"
    ;
    constructor (base_val="#"){
         this.c01_r01=base_val
        ;this.c02_r01=base_val
        ;this.c03_r01=base_val
        ;this.c01_r02=base_val
        ;this.c02_r02=base_val
        ;this.c03_r02=base_val
        ;this.c01_r03=base_val
        ;this.c02_r03=base_val
        ;this.c03_r03=base_val
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
    F_elem_set_all_arr(
         sq_3x3_elem_arr=[]
    ){
         this.c01_r01=sq_3x3_elem_arr[0]
        ;this.c02_r01=sq_3x3_elem_arr[1]
        ;this.c03_r01=sq_3x3_elem_arr[2]
        ;this.c01_r02=sq_3x3_elem_arr[3]
        ;this.c02_r02=sq_3x3_elem_arr[4]
        ;this.c03_r02=sq_3x3_elem_arr[5]
        ;this.c01_r03=sq_3x3_elem_arr[6]
        ;this.c02_r03=sq_3x3_elem_arr[7]
        ;this.c03_r03=sq_3x3_elem_arr[8]
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
        // console.log(
        //    "|---------------------------|"
        //)
         console.log(
            "|-----|"
        )
         ,console.log (
              "|"
            + this.c01_r01
            + ":"
            + this.c02_r01
            + ":"
            + this.c03_r01
            + "|"
        )
        ,console.log (
              "|"
            + this.c01_r02
            + ":"
            + this.c02_r02
            + ":"
            + this.c03_r02
            + "|"
        )
        ,console.log (
              "|"
            + this.c01_r03
            + ":"
            + this.c02_r03
            + ":"
            + this.c03_r03
            + "|"
        )
        //,console.log(
        //    "|---------------------------|"
        //)
        ,console.log("|-----|")
        ,console.log("")
    }
}
class grid {
     c01_r01_sq = new square_3x3()
    ;c02_r01_sq = new square_3x3()
    ;c03_r01_sq = new square_3x3()
    ;c01_r02_sq = new square_3x3()
    ;c02_r02_sq = new square_3x3()
    ;c03_r02_sq = new square_3x3()
    ;c01_r03_sq = new square_3x3()
    ;c02_r03_sq = new square_3x3()
    ;c03_r03_sq = new square_3x3()
    ;
    constructor(){
    }
    F_elem_set_all(
         c01_r01_elem_arr=[]
        ,c02_r01_elem_arr=[]
        ,c03_r01_elem_arr=[]
        ,c01_r02_elem_arr=[]
        ,c02_r02_elem_arr=[]
        ,c03_r02_elem_arr=[]
        ,c01_r03_elem_arr=[]
        ,c02_r03_elem_arr=[]
        ,c03_r03_elem_arr=[]
    ){
     this.c01_r01_sq.F_elem_set_all_arr(c01_r01_elem_arr)
    ;this.c02_r01_sq.F_elem_set_all_arr(c02_r01_elem_arr)
    ;this.c03_r01_sq.F_elem_set_all_arr(c03_r01_elem_arr)

    ;this.c01_r02_sq.F_elem_set_all_arr(c01_r02_elem_arr)
    ;this.c02_r02_sq.F_elem_set_all_arr(c02_r02_elem_arr)
    ;this.c03_r02_sq.F_elem_set_all_arr(c03_r02_elem_arr)

    ;this.c01_r03_sq.F_elem_set_all_arr(c01_r03_elem_arr)
    ;this.c02_r03_sq.F_elem_set_all_arr(c02_r03_elem_arr)
    ;this.c03_r03_sq.F_elem_set_all_arr(c03_r03_elem_arr)
    ;
    }
    F_print_obj(){
         console.log(
            "|-----------------|"
        )
        ,console.log (
              "|"
            + this.c01_r01_sq.c01_r01
            + ":"
            + this.c01_r01_sq.c02_r01
            + ":"
            + this.c01_r01_sq.c03_r01
            + "-"

            + this.c02_r01_sq.c01_r01
            + ":"
            + this.c02_r01_sq.c02_r01
            + ":"
            + this.c02_r01_sq.c03_r01
            + "-"

            + this.c03_r01_sq.c01_r01
            + ":"
            + this.c03_r01_sq.c02_r01
            + ":"
            + this.c03_r01_sq.c03_r01
            + "|"
        )
        ,console.log (
              "|"
            + this.c01_r01_sq.c01_r02
            + ":"
            + this.c01_r01_sq.c02_r02
            + ":"
            + this.c01_r01_sq.c03_r02
            + "-"

            + this.c02_r01_sq.c01_r02
            + ":"
            + this.c02_r01_sq.c02_r02
            + ":"
            + this.c02_r01_sq.c03_r02
            + "-"

            + this.c03_r01_sq.c01_r02
            + ":"
            + this.c03_r01_sq.c02_r02
            + ":"
            + this.c03_r01_sq.c03_r02
            + "|"
        )
        ,console.log (
              "|"
            + this.c01_r01_sq.c01_r03
            + ":"
            + this.c01_r01_sq.c02_r03
            + ":"
            + this.c01_r01_sq.c03_r03
            + "-"

            + this.c02_r01_sq.c01_r03
            + ":"
            + this.c02_r01_sq.c02_r03
            + ":"
            + this.c02_r01_sq.c03_r03
            + "-"

            + this.c03_r01_sq.c01_r03
            + ":"
            + this.c03_r01_sq.c02_r03
            + ":"
            + this.c03_r01_sq.c03_r03
            + "|"
        )
        ,console.log(
            "|-----------------|"
        )
        ,console.log (
              "|"
            + this.c01_r02_sq.c01_r01
            + ":"
            + this.c01_r02_sq.c02_r01
            + ":"
            + this.c01_r02_sq.c03_r01
            + "-"

            + this.c02_r02_sq.c01_r01
            + ":"
            + this.c02_r02_sq.c02_r01
            + ":"
            + this.c02_r02_sq.c03_r01
            + "-"

            + this.c03_r02_sq.c01_r01
            + ":"
            + this.c03_r02_sq.c02_r01
            + ":"
            + this.c03_r02_sq.c03_r01
            + "|"
        )
        ,console.log (
              "|"
            + this.c01_r02_sq.c01_r02
            + ":"
            + this.c01_r02_sq.c02_r02
            + ":"
            + this.c01_r02_sq.c03_r02
            + "-"

            + this.c02_r02_sq.c01_r02
            + ":"
            + this.c02_r02_sq.c02_r02
            + ":"
            + this.c02_r02_sq.c03_r02
            + "-"

            + this.c03_r02_sq.c01_r02
            + ":"
            + this.c03_r02_sq.c02_r02
            + ":"
            + this.c03_r02_sq.c03_r02
            + "|"
        )
        ,console.log (
              "|"
            + this.c01_r02_sq.c01_r03
            + ":"
            + this.c01_r02_sq.c02_r03
            + ":"
            + this.c01_r02_sq.c03_r03
            + "-"

            + this.c02_r02_sq.c01_r03
            + ":"
            + this.c02_r02_sq.c02_r03
            + ":"
            + this.c02_r02_sq.c03_r03
            + "-"

            + this.c03_r02_sq.c01_r03
            + ":"
            + this.c03_r02_sq.c02_r03
            + ":"
            + this.c03_r02_sq.c03_r03
            + "|"
        )
        ,console.log(
            "|-----------------|"
        )
        ,console.log (
              "|"
            + this.c01_r03_sq.c01_r01
            + ":"
            + this.c01_r03_sq.c02_r01
            + ":"
            + this.c01_r03_sq.c03_r01
            + "-"

            + this.c02_r03_sq.c01_r01
            + ":"
            + this.c02_r03_sq.c02_r01
            + ":"
            + this.c02_r03_sq.c03_r01
            + "-"

            + this.c03_r03_sq.c01_r01
            + ":"
            + this.c03_r03_sq.c02_r01
            + ":"
            + this.c03_r03_sq.c03_r01
            + "|"
        )
        ,console.log (
              "|"
            + this.c01_r03_sq.c01_r02
            + ":"
            + this.c01_r03_sq.c02_r02
            + ":"
            + this.c01_r03_sq.c03_r02
            + "-"

            + this.c02_r03_sq.c01_r02
            + ":"
            + this.c02_r03_sq.c02_r02
            + ":"
            + this.c02_r03_sq.c03_r02
            + "-"

            + this.c03_r03_sq.c01_r02
            + ":"
            + this.c03_r03_sq.c02_r02
            + ":"
            + this.c03_r03_sq.c03_r02
            + "|"
        )
        ,console.log (
              "|"
            + this.c01_r03_sq.c01_r03
            + ":"
            + this.c01_r03_sq.c02_r03
            + ":"
            + this.c01_r03_sq.c03_r03
            + "-"

            + this.c02_r03_sq.c01_r03
            + ":"
            + this.c02_r03_sq.c02_r03
            + ":"
            + this.c02_r03_sq.c03_r03
            + "-"

            + this.c03_r03_sq.c01_r03
            + ":"
            + this.c03_r03_sq.c02_r03
            + ":"
            + this.c03_r03_sq.c03_r03
            + "|"
        )
        ,console.log(
            "|-----------------|"
        )
        ,console.log("")
    }
}

let grid_1 = new grid();
grid_1.F_elem_set_all(
     ["A","B","C","D","E","F","G","H","I"]
    ,[1  ,2  ,3  ,4  ,5  ,6  ,7  ,8  ,9  ]
    ,["J","K","L","M","N","O","P","Q","R"]

    ,[1  ,2  ,3  ,4  ,5  ,6  ,7  ,8  ,9  ]
    ,["X","Y","Z","D","E","F","G","H","I"]
    ,[1  ,2  ,3  ,4  ,5  ,6  ,7  ,8  ,9  ]

    ,["J","K","L","M","N","O","P","Q","R"]
    ,[1  ,2  ,3  ,4  ,5  ,6  ,7  ,8  ,9  ]
    ,["A","B","C","D","E","F","G","H","I"]
)
grid_1.F_print_obj();


// I now have eveything I need to implement a sudoku board.



