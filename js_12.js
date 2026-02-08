console.log("Module js_12.js | Execution Start");
import * as js_11 from './js_11.js'

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

// Table 1

const _Title_T1    = new js_11.Title("_Title_T1", ""    , "Sudoku Board #01");
const _Body_B1     = new js_11.Body ("_Body_B1" , "B_B1");
const H_H1         = new js_11.H1   ("H_H1"     , ""    , "Sudoku Board:"   );

const T_T1         = new js_11.Table("T_T1", "T_T1");

const C_T1_R0_C0   = new js_11.Cell("C_T1_R0_C0" , "T1", "R0", "C0" , "HY", "H_row_1", "C_T1_H_row_1", "" );
const C_T1_R0_C1   = new js_11.Cell("C_T1_R0_C1" , "T1", "R0", "C1" , "HW", "H_col_1", "C_T1_H_col_1", "A");
const C_T1_R0_C2   = new js_11.Cell("C_T1_R0_C2" , "T1", "R0", "C2" , "HW", "H_col_1", "C_T1_H_col_1", "B");
const C_T1_R0_C3   = new js_11.Cell("C_T1_R0_C3" , "T1", "R0", "C3" , "HW", "H_col_1", "C_T1_H_col_1", "C");
const C_T1_R0_C4   = new js_11.Cell("C_T1_R0_C4" , "T1", "R0", "C4" , "HW", "H_col_1", "C_T1_H_col_1", "D");
const C_T1_R0_C5   = new js_11.Cell("C_T1_R0_C5" , "T1", "R0", "C5" , "HW", "H_col_1", "C_T1_H_col_1", "E");
const C_T1_R0_C6   = new js_11.Cell("C_T1_R0_C6" , "T1", "R0", "C6" , "HW", "H_col_1", "C_T1_H_col_1", "F");
const C_T1_R0_C7   = new js_11.Cell("C_T1_R0_C7" , "T1", "R0", "C7" , "HW", "H_col_1", "C_T1_H_col_1", "G");
const C_T1_R0_C8   = new js_11.Cell("C_T1_R0_C8" , "T1", "R0", "C8" , "HW", "H_col_1", "C_T1_H_col_1", "H");
const C_T1_R0_C9   = new js_11.Cell("C_T1_R0_C9" , "T1", "R0", "C9" , "HW", "H_col_1", "C_T1_H_col_1", "I");
const C_T1_R0_C10  = new js_11.Cell("C_T1_R0_C10", "T1", "R0", "C10", "HZ", "H_row_1", "C_T1_H_row_1", "" );

const C_T1_R1_C0   = new js_11.Cell("C_T1_R1_C0" , "T1", "R1", "C0" , "HY" , "H_row_1" , "C_T1_H_row_1" , "1" );
const C_T1_R1_C1   = new js_11.Cell("C_T1_R1_C1" , "T1", "R1", "C1" , "N/A", "C_main_1", "C_T1_main_S_1", "A1");
const C_T1_R1_C2   = new js_11.Cell("C_T1_R1_C2" , "T1", "R1", "C2" , "N/A", "C_main_1", "C_T1_main_S_1", "B1");
const C_T1_R1_C3   = new js_11.Cell("C_T1_R1_C3" , "T1", "R1", "C3" , "N/A", "C_main_1", "C_T1_main_S_1", "C1");
const C_T1_R1_C4   = new js_11.Cell("C_T1_R1_C4" , "T1", "R1", "C4" , "N/A", "C_main_1", "C_T1_main_S_2", "D1");
const C_T1_R1_C5   = new js_11.Cell("C_T1_R1_C5" , "T1", "R1", "C5" , "N/A", "C_main_1", "C_T1_main_S_2", "E1");
const C_T1_R1_C6   = new js_11.Cell("C_T1_R1_C6" , "T1", "R1", "C6" , "N/A", "C_main_1", "C_T1_main_S_2", "F1");
const C_T1_R1_C7   = new js_11.Cell("C_T1_R1_C7" , "T1", "R1", "C7" , "N/A", "C_main_1", "C_T1_main_S_3", "G1");
const C_T1_R1_C8   = new js_11.Cell("C_T1_R1_C8" , "T1", "R1", "C8" , "N/A", "C_main_1", "C_T1_main_S_3", "H1");
const C_T1_R1_C9   = new js_11.Cell("C_T1_R1_C9" , "T1", "R1", "C9" , "N/A", "C_main_1", "C_T1_main_S_3", "I1");
const C_T1_R1_C10  = new js_11.Cell("C_T1_R1_C10", "T1", "R1", "C10", "HZ" , "H_row_1" , "C_T1_H_row_1" , "1" );

const C_T1_R2_C0   = new js_11.Cell("C_T1_R2_C0" , "T1", "R2", "C0" , "HY" , "H_row_1" , "C_T1_H_row_1" , "2" );
const C_T1_R2_C1   = new js_11.Cell("C_T1_R2_C1" , "T1", "R2", "C1" , "N/A", "C_main_1", "C_T1_main_S_1", "A2");
const C_T1_R2_C2   = new js_11.Cell("C_T1_R2_C2" , "T1", "R2", "C2" , "N/A", "C_main_1", "C_T1_main_S_1", "B2");
const C_T1_R2_C3   = new js_11.Cell("C_T1_R2_C3" , "T1", "R2", "C3" , "N/A", "C_main_1", "C_T1_main_S_1", "C2");
const C_T1_R2_C4   = new js_11.Cell("C_T1_R2_C4" , "T1", "R2", "C4" , "N/A", "C_main_1", "C_T1_main_S_2", "D2");
const C_T1_R2_C5   = new js_11.Cell("C_T1_R2_C5" , "T1", "R2", "C5" , "N/A", "C_main_1", "C_T1_main_S_2", "E2");
const C_T1_R2_C6   = new js_11.Cell("C_T1_R2_C6" , "T1", "R2", "C6" , "N/A", "C_main_1", "C_T1_main_S_2", "F2");
const C_T1_R2_C7   = new js_11.Cell("C_T1_R2_C7" , "T1", "R2", "C7" , "N/A", "C_main_1", "C_T1_main_S_3", "G2");
const C_T1_R2_C8   = new js_11.Cell("C_T1_R2_C8" , "T1", "R2", "C8" , "N/A", "C_main_1", "C_T1_main_S_3", "H2");
const C_T1_R2_C9   = new js_11.Cell("C_T1_R2_C9" , "T1", "R2", "C9" , "N/A", "C_main_1", "C_T1_main_S_3", "I2");
const C_T1_R2_C10  = new js_11.Cell("C_T1_R2_C10", "T1", "R2", "C10", "HZ" , "H_row_1" , "C_T1_H_row_1" , "2" );

const C_T1_R3_C0   = new js_11.Cell("C_T1_R3_C0" , "T1", "R3", "C0" , "HY" , "H_row_1" , "C_T1_H_row_1" , "3" );
const C_T1_R3_C1   = new js_11.Cell("C_T1_R3_C1" , "T1", "R3", "C1" , "N/A", "C_main_1", "C_T1_main_S_1", "A3");
const C_T1_R3_C2   = new js_11.Cell("C_T1_R3_C2" , "T1", "R3", "C2" , "N/A", "C_main_1", "C_T1_main_S_1", "B3");
const C_T1_R3_C3   = new js_11.Cell("C_T1_R3_C3" , "T1", "R3", "C3" , "N/A", "C_main_1", "C_T1_main_S_1", "C3");
const C_T1_R3_C4   = new js_11.Cell("C_T1_R3_C4" , "T1", "R3", "C4" , "N/A", "C_main_1", "C_T1_main_S_2", "D3");
const C_T1_R3_C5   = new js_11.Cell("C_T1_R3_C5" , "T1", "R3", "C5" , "N/A", "C_main_1", "C_T1_main_S_2", "E3");
const C_T1_R3_C6   = new js_11.Cell("C_T1_R3_C6" , "T1", "R3", "C6" , "N/A", "C_main_1", "C_T1_main_S_2", "F3");
const C_T1_R3_C7   = new js_11.Cell("C_T1_R3_C7" , "T1", "R3", "C7" , "N/A", "C_main_1", "C_T1_main_S_3", "G3");
const C_T1_R3_C8   = new js_11.Cell("C_T1_R3_C8" , "T1", "R3", "C8" , "N/A", "C_main_1", "C_T1_main_S_3", "H3");
const C_T1_R3_C9   = new js_11.Cell("C_T1_R3_C9" , "T1", "R3", "C9" , "N/A", "C_main_1", "C_T1_main_S_3", "I3");
const C_T1_R3_C10  = new js_11.Cell("C_T1_R3_C10", "T1", "R3", "C10", "HZ" , "H_row_1" , "C_T1_H_row_1" , "3" );

const C_T1_R4_C0   = new js_11.Cell("C_T1_R4_C0" , "T1", "R4", "C0" , "HY" , "H_row_1" , "C_T1_H_row_1" , "4" );
const C_T1_R4_C1   = new js_11.Cell("C_T1_R4_C1" , "T1", "R4", "C1" , "N/A", "C_main_1", "C_T1_main_S_4", "A4");
const C_T1_R4_C2   = new js_11.Cell("C_T1_R4_C2" , "T1", "R4", "C2" , "N/A", "C_main_1", "C_T1_main_S_4", "B4");
const C_T1_R4_C3   = new js_11.Cell("C_T1_R4_C3" , "T1", "R4", "C3" , "N/A", "C_main_1", "C_T1_main_S_4", "C4");
const C_T1_R4_C4   = new js_11.Cell("C_T1_R4_C4" , "T1", "R4", "C4" , "N/A", "C_main_1", "C_T1_main_S_5", "D4");
const C_T1_R4_C5   = new js_11.Cell("C_T1_R4_C5" , "T1", "R4", "C5" , "N/A", "C_main_1", "C_T1_main_S_5", "E4");
const C_T1_R4_C6   = new js_11.Cell("C_T1_R4_C6" , "T1", "R4", "C6" , "N/A", "C_main_1", "C_T1_main_S_5", "F4");
const C_T1_R4_C7   = new js_11.Cell("C_T1_R4_C7" , "T1", "R4", "C7" , "N/A", "C_main_1", "C_T1_main_S_6", "G4");
const C_T1_R4_C8   = new js_11.Cell("C_T1_R4_C8" , "T1", "R4", "C8" , "N/A", "C_main_1", "C_T1_main_S_6", "H4");
const C_T1_R4_C9   = new js_11.Cell("C_T1_R4_C9" , "T1", "R4", "C9" , "N/A", "C_main_1", "C_T1_main_S_6", "I4");
const C_T1_R4_C10  = new js_11.Cell("C_T1_R4_C10", "T!", "R4", "C10", "HZ" , "H_row_1" , "C_T1_H_row_1" , "4" );

const C_T1_R5_C0   = new js_11.Cell("C_T1_R5_C0" , "T1", "R5", "C0" , "HY" , "H_row_1" , "C_T1_H_row_1" , "5" );
const C_T1_R5_C1   = new js_11.Cell("C_T1_R5_C1" , "T1", "R5", "C1" , "N/A", "C_main_1", "C_T1_main_S_4", "A5");
const C_T1_R5_C2   = new js_11.Cell("C_T1_R5_C2" , "T1", "R5", "C2" , "N/A", "C_main_1", "C_T1_main_S_4", "B5");
const C_T1_R5_C3   = new js_11.Cell("C_T1_R5_C3" , "T1", "R5", "C3" , "N/A", "C_main_1", "C_T1_main_S_4", "C5");
const C_T1_R5_C4   = new js_11.Cell("C_T1_R5_C4" , "T1", "R5", "C4" , "N/A", "C_main_1", "C_T1_main_S_5", "D5");
const C_T1_R5_C5   = new js_11.Cell("C_T1_R5_C5" , "T1", "R5", "C5" , "N/A", "C_main_1", "C_T1_main_S_5", "E5");
const C_T1_R5_C6   = new js_11.Cell("C_T1_R5_C6" , "T1", "R5", "C6" , "N/A", "C_main_1", "C_T1_main_S_5", "F5");
const C_T1_R5_C7   = new js_11.Cell("C_T1_R5_C7" , "T1", "R5", "C7" , "n/A", "C_main_1", "C_T1_main_S_6", "G5");
const C_T1_R5_C8   = new js_11.Cell("C_T1_R5_C8" , "T1", "R5", "C8" , "N/A", "C_main_1", "C_T1_main_S_6", "H5");
const C_T1_R5_C9   = new js_11.Cell("C_T1_R5_C9" , "T1", "R5", "C9" , "N/A", "C_main_1", "C_T1_main_S_6", "I5");
const C_T1_R5_C10  = new js_11.Cell("C_T1_R5_C10", "T1", "R5", "C10", "HZ" , "H_row_1" , "C_T1_H_row_1" , "5" );

const C_T1_R6_C0   = new js_11.Cell("C_T1_R6_C0" , "T1", "R6", "C0" , "HY" , "H_row_1" , "C_T1_H_row_1" , "6" );
const C_T1_R6_C1   = new js_11.Cell("C_T1_R6_C1" , "T1", "R6", "C1" , "N/A", "C_main_1", "C_T1_main_S_4", "A6");
const C_T1_R6_C2   = new js_11.Cell("C_T1_R6_C2" , "T1", "R6", "C2" , "N/A", "C_main_1", "C_T1_main_S_4", "B6");
const C_T1_R6_C3   = new js_11.Cell("C_T1_R6_C3" , "T1", "R6", "C3" , "N/A", "C_main_1", "C_T1_main_S_4", "C6");
const C_T1_R6_C4   = new js_11.Cell("C_T1_R6_C4" , "T1", "R6", "C4" , "N/A", "C_main_1", "C_T1_main_S_5", "D6");
const C_T1_R6_C5   = new js_11.Cell("C_T1_R6_C5" , "T1", "R6", "C5" , "N/A", "C_main_1", "C_T1_main_S_5", "E6");
const C_T1_R6_C6   = new js_11.Cell("C_T1_R6_C6" , "T1", "R6", "C6" , "N/A", "C_main_1", "C_T1_main_S_5", "F6");
const C_T1_R6_C7   = new js_11.Cell("C_T1_R6_C7" , "T1", "R6", "C7" , "N/A", "C_main_1", "C_T1_main_S_6", "G6");
const C_T1_R6_C8   = new js_11.Cell("C_T1_R6_C8" , "T1", "R6", "C8" , "N/A", "C_main_1", "C_T1_main_S_6", "H6");
const C_T1_R6_C9   = new js_11.Cell("C_T1_R6_C9" , "T1", "R6", "C9" , "N/A", "C_main_1", "C_T1_main_S_6", "I6");
const C_T1_R6_C10  = new js_11.Cell("C_T1_R6_C10", "T1", "R6", "C10", "HZ" , "H_row_1" , "C_T1_H_row_1" , "6" );

const C_T1_R7_C0   = new js_11.Cell("C_T1_R7_C0" , "T1", "R7", "C0" , "HY" , "H_row_1" , "C_T1_H_row_1" , "7" );
const C_T1_R7_C1   = new js_11.Cell("C_T1_R7_C1" , "T1", "R7", "C1" , "N/A", "C_main_1", "C_T1_main_S_7", "A7");
const C_T1_R7_C2   = new js_11.Cell("C_T1_R7_C2" , "T1", "R7", "C2" , "N/A", "C_main_1", "C_T1_main_S_7", "B7");
const C_T1_R7_C3   = new js_11.Cell("C_T1_R7_C3" , "T1", "R7", "C3" , "N/A", "C_main_1", "C_T1_main_S_7", "C7");
const C_T1_R7_C4   = new js_11.Cell("C_T1_R7_C4" , "T1", "R7", "C4" , "N/A", "C_main_1", "C_T1_main_S_8", "D7");
const C_T1_R7_C5   = new js_11.Cell("C_T1_R7_C5" , "T1", "R7", "C5" , "N/A", "C_main_1", "C_T1_main_S_8", "E7");
const C_T1_R7_C6   = new js_11.Cell("C_T1_R7_C6" , "T1", "R7", "C6" , "N/A", "C_main_1", "C_T1_main_S_8", "F7");
const C_T1_R7_C7   = new js_11.Cell("C_T1_R7_C7" , "T1", "R7", "C7" , "N/A", "C_main_1", "C_T1_main_S_9", "G7");
const C_T1_R7_C8   = new js_11.Cell("C_T1_R7_C8" , "T1", "R7", "C8" , "N/A", "C_main_1", "C_T1_main_S_9", "H7");
const C_T1_R7_C9   = new js_11.Cell("C_T1_R7_C9" , "T1", "R7", "C9" , "N/A", "C_main_1", "C_T1_main_S_9", "I7");
const C_T1_R7_C10  = new js_11.Cell("C_T1_R7_C10", "T1", "R7", "C10", "HZ" , "H_row_1" , "C_T1_H_row_1" , "7" );

const C_T1_R8_C0   = new js_11.Cell("C_T1_R8_C0" , "T1", "R8", "C0" , "HY" , "H_row_1" , "C_T1_H_row_1" , "8" );
const C_T1_R8_C1   = new js_11.Cell("C_T1_R8_C1" , "T1", "R8", "C1" , "N/A", "C_main_1", "C_T1_main_S_7", "A8");
const C_T1_R8_C2   = new js_11.Cell("C_T1_R8_C2" , "T1", "R8", "C2" , "N/A", "C_main_1", "C_T1_main_S_7", "B8");
const C_T1_R8_C3   = new js_11.Cell("C_T1_R8_C3" , "T1", "R8", "C3" , "N/A", "C_main_1", "C_T1_main_S_7", "C8");
const C_T1_R8_C4   = new js_11.Cell("C_T1_R8_C4" , "T1", "R8", "C4" , "N/A", "C_main_1", "C_T1_main_S_8", "D8");
const C_T1_R8_C5   = new js_11.Cell("C_T1_R8_C5" , "T1", "R8", "C5" , "N/A", "C_main_1", "C_T1_main_S_8", "E8");
const C_T1_R8_C6   = new js_11.Cell("C_T1_R8_C6" , "T1", "R8", "C6" , "N/A", "C_main_1", "C_T1_main_S_8", "F8");
const C_T1_R8_C7   = new js_11.Cell("C_T1_R8_C7" , "T1", "R8", "C7" , "N/A", "C_main_1", "C_T1_main_S_9", "G8");
const C_T1_R8_C8   = new js_11.Cell("C_T1_R8_C8" , "T1", "R8", "C8" , "N/A", "C_main_1", "C_T1_main_S_9", "H8");
const C_T1_R8_C9   = new js_11.Cell("C_T1_R8_C9" , "T1", "R8", "C9" , "N/A", "C_main_1", "C_T1_main_S_9", "I8");
const C_T1_R8_C10  = new js_11.Cell("C_T1_R8_C10", "T1", "R8", "C10", "HZ" , "H_row_1" , "C_T1_H_row_1" , "8" );

const C_T1_R9_C0   = new js_11.Cell("C_T1_R9_C0" , "T1", "R9", "C0" , "HY" , "H_row_1" , "C_T1_H_row_1" , "9" );
const C_T1_R9_C1   = new js_11.Cell("C_T1_R9_C1" , "T1", "R9", "C1" , "N/A", "C_main_1", "C_T1_main_S_7", "A9");
const C_T1_R9_C2   = new js_11.Cell("C_T1_R9_C2" , "T1", "R9", "C2" , "N/A", "C_main_1", "C_T1_main_S_7", "B9");
const C_T1_R9_C3   = new js_11.Cell("C_T1_R9_C3" , "T1", "R9", "C3" , "N/A", "C_main_1", "C_T1_main_S_7", "C9");
const C_T1_R9_C4   = new js_11.Cell("C_T1_R9_C4" , "T1", "R9", "C4" , "N/A", "C_main_1", "C_T1_main_S_8", "D9");
const C_T1_R9_C5   = new js_11.Cell("C_T1_R9_C5" , "T1", "R9", "C5" , "N/A", "C_main_1", "C_T1_main_S_8", "E9");
const C_T1_R9_C6   = new js_11.Cell("C_T1_R9_C6" , "T1", "R9", "C6" , "N/A", "C_main_1", "C_T1_main_S_8", "F9");
const C_T1_R9_C7   = new js_11.Cell("C_T1_R9_C7" , "T1", "R9", "C7" , "N/A", "C_main_1", "C_T1_main_S_9", "G9");
const C_T1_R9_C8   = new js_11.Cell("C_T1_R9_C8" , "T1", "R9", "C8" , "N/A", "C_main_1", "C_T1_main_S_9", "H9");
const C_T1_R9_C9   = new js_11.Cell("C_T1_R9_C9" , "T1", "R9", "C0" , "N/A", "C_main_1", "C_T1_main_S_9", "I9");
const C_T1_R9_C10  = new js_11.Cell("C_T1_R9_C10", "T1", "R9", "C10", "HZ" , "H_row_1" , "C_T1_H_row_1" , "9" );

const C_T1_R10_C0  = new js_11.Cell("C_T1_R10_C0" , "T1", "R10", "C0" , "HY", "H_row_1", "C_T1_H_row_1", "" );
const C_T1_R10_C1  = new js_11.Cell("C_T1_R10_C1" , "T1", "R10", "C1" , "HX", "H_col_1", "C_T1_H_col_1", "A");
const C_T1_R10_C2  = new js_11.Cell("C_T1_R10_C2" , "T1", "R10", "C2" , "HX", "H_col_1", "C_T1_H_col_1", "B");
const C_T1_R10_C3  = new js_11.Cell("C_T1_R10_C3" , "T1", "R10", "C3" , "HX", "H_col_1", "C_T1_H_col_1", "C");
const C_T1_R10_C4  = new js_11.Cell("C_T1_R10_C4" , "T1", "R10", "C4" , "HX", "H_col_1", "C_T1_H_col_1", "D");
const C_T1_R10_C5  = new js_11.Cell("C_T1_R10_C5" , "T1", "R10", "C5" , "HX", "H_col_1", "C_T1_H_col_1", "E");
const C_T1_R10_C6  = new js_11.Cell("C_T1_R10_C6" , "T1", "R10", "C6" , "HX", "H_col_1", "C_T1_H_col_1", "F");
const C_T1_R10_C7  = new js_11.Cell("C_T1_R10_C7" , "T1", "R10", "C7" , "HX", "H_col_1", "C_T1_H_col_1", "G");
const C_T1_R10_C8  = new js_11.Cell("C_T1_R10_C8" , "T1", "R10", "C8" , "HX", "H_col_1", "C_T1_H_col_1", "H");
const C_T1_R10_C9  = new js_11.Cell("C_T1_R10_C9" , "T1", "R10", "C9" , "HX", "H_col_1", "C_T1_H_col_1", "I");
const C_T1_R10_C10 = new js_11.Cell("C_T1_R10_C10", "T1", "R10", "C10", "HZ", "H_row_1", "C_T1_H_row_1", "" );

const T_T2         = new js_11.Table("T_T2", "T_T2");

const C_T2_R0_C0   = new js_11.Cell("C_T2_R0_C0" , "T2", "R0", "C0" , "HY", "H_row_unused_1", "C_T2_H_row_1", "" );
const C_T2_R0_C1   = new js_11.Cell("C_T2_R0_C1" , "T2", "R0", "C1" , "HW", "H_col_unused_1", "C_T2_H_col_1", "A");
const C_T2_R0_C2   = new js_11.Cell("C_T2_R0_C2" , "T2", "R0", "C2" , "HW", "H_col_unused_1", "C_T2_H_col_1", "B");
const C_T2_R0_C3   = new js_11.Cell("C_T2_R0_C3" , "T2", "R0", "C3" , "HW", "H_col_unused_1", "C_T2_H_col_1", "C");
const C_T2_R0_C4   = new js_11.Cell("C_T2_R0_C4" , "T2", "R0", "C4" , "HW", "H_col_unused_1", "C_T2_H_col_1", "D");
const C_T2_R0_C5   = new js_11.Cell("C_T2_R0_C5" , "T2", "R0", "C5" , "HW", "H_col_unused_1", "C_T2_H_col_1", "E");
const C_T2_R0_C6   = new js_11.Cell("C_T2_R0_C6" , "T2", "R0", "C6" , "HW", "H_col_unused_1", "C_T2_H_col_1", "F");
const C_T2_R0_C7   = new js_11.Cell("C_T2_R0_C7" , "T2", "R0", "C7" , "HW", "H_col_unused_1", "C_T2_H_col_1", "G");
const C_T2_R0_C8   = new js_11.Cell("C_T2_R0_C8" , "T2", "R0", "C8" , "HW", "H_col_unused_1", "C_T2_H_col_1", "H");
const C_T2_R0_C9   = new js_11.Cell("C_T2_R0_C9" , "T2", "R0", "C9" , "HW", "H_col_unused_1", "C_T2_H_col_1", "I");
const C_T2_R0_C10  = new js_11.Cell("C_T2_R0_C10", "T2", "R0", "C10", "HZ", "H_row_unused_1", "C_T2_H_row_1", "" );

const C_T2_R1_C0   = new js_11.Cell("C_T2_R1_C0" , "T2", "R1", "C0" , "HY" , "H_row_unused_1", "C_T2_H_row_1" , "1");
const C_T2_R1_C1   = new js_11.Cell("C_T2_R1_C1" , "T2", "R1", "C1" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R1_C2   = new js_11.Cell("C_T2_R1_C2" , "T2", "R1", "C2" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R1_C3   = new js_11.Cell("C_T2_R1_C3" , "T2", "R1", "C3" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R1_C4   = new js_11.Cell("C_T2_R1_C4" , "T2", "R1", "C4" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R1_C5   = new js_11.Cell("C_T2_R1_C5" , "T2", "R1", "C5" , "N/A", "c_control_1"   , "C_T2_main_C_1", "/\\");
const C_T2_R1_C6   = new js_11.Cell("C_T2_R1_C6" , "T2", "R1", "C6" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R1_C7   = new js_11.Cell("C_T2_R1_C7" , "T2", "R1", "C7" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R1_C8   = new js_11.Cell("C_T2_R1_C8" , "T2", "R1", "C8" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R1_C9   = new js_11.Cell("C_T2_R1_C9" , "T2", "R1", "C9" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R1_C10  = new js_11.Cell("C_T2_R1_C10", "T2", "R1", "C10", "HZ" , "H_row_unused_1", "C_T2_H_row_1" , "1");

const C_T2_R2_C0   = new js_11.Cell("C_T2_R2_C0" , "T2", "R2", "C0" , "HY" , "H_row_unused_1", "C_T2_H_row_1" , "2");
const C_T2_R2_C1   = new js_11.Cell("C_T2_R2_C1" , "T2", "R2", "C1" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R2_C2   = new js_11.Cell("C_T2_R2_C2" , "T2", "R2", "C2" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R2_C3   = new js_11.Cell("C_T2_R2_C3" , "T2", "R2", "C3" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R2_C4   = new js_11.Cell("C_T2_R2_C4" , "T2", "R2", "C4" , "N/A", "c_control_1"   , "C_T2_main_C_1", "<");
const C_T2_R2_C5   = new js_11.Cell("C_T2_R2_C5" , "T2", "R2", "C5" , "N/A", "C_unused_1"    , "C_T2_main_C_1", "" );
const C_T2_R2_C6   = new js_11.Cell("C_T2_R2_C6" , "T2", "R2", "C6" , "N/A", "c_control_1"   , "C_T2_main_C_1", ">");
const C_T2_R2_C7   = new js_11.Cell("C_T2_R2_C7" , "T2", "R2", "C7" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R2_C8   = new js_11.Cell("C_T2_R2_C8" , "T2", "R2", "C8" , "N/A", "c_control_1"   , "C_T2_main_C_1", "Deselect");
const C_T2_R2_C9   = new js_11.Cell("C_T2_R2_C9" , "T2", "R2", "C9" , "N/A", "c_control_1"   , "C_T2_main_C_1", "Clear"   );
const C_T2_R2_C10  = new js_11.Cell("C_T2_R2_C10", "T2", "R2", "C10", "HZ" , "H_row_unused_1", "C_T2_H_row_1" , "2");

const C_T2_R3_C0   = new js_11.Cell("C_T2_R3_C0" , "T2", "R3", "C0" , "HY" , "H_row_unused_1", "C_T2_H_row_1" , "3");
const C_T2_R3_C1   = new js_11.Cell("C_T2_R3_C1" , "T2", "R3", "C1" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R3_C2   = new js_11.Cell("C_T2_R3_C2" , "T2", "R3", "C2" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R3_C3   = new js_11.Cell("C_T2_R3_C3" , "T2", "R3", "C3" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R3_C4   = new js_11.Cell("C_T2_R3_C4" , "T2", "R3", "C4" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R3_C5   = new js_11.Cell("C_T2_R3_C5" , "T2", "R3", "C5" , "N/A", "c_control_1"   , "C_T2_main_C_1", "\\/");
const C_T2_R3_C6   = new js_11.Cell("C_T2_R3_C6" , "T2", "R3", "C6" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R3_C7   = new js_11.Cell("C_T2_R3_C7" , "T2", "R3", "C7" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R3_C8   = new js_11.Cell("C_T2_R3_C8" , "T2", "R3", "C8" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R3_C9   = new js_11.Cell("C_T2_R3_C9" , "T2", "R3", "C9" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R3_C10  = new js_11.Cell("C_T2_R3_C10", "T2", "R3", "C10", "HZ" , "H_row_unused_1", "C_T2_H_row_1" , "3");

const C_T2_R4_C0   = new js_11.Cell("C_T2_R4_C0" , "T2", "R4", "C0" , "HY" , "H_row_unused_1", "C_T2_H_row_1" , "4");
const C_T2_R4_C1   = new js_11.Cell("C_T2_R4_C1" , "T2", "R4", "C1" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R4_C2   = new js_11.Cell("C_T2_R4_C2" , "T2", "R4", "C2" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R4_C3   = new js_11.Cell("C_T2_R4_C3" , "T2", "R4", "C3" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R4_C4   = new js_11.Cell("C_T2_R4_C4" , "T2", "R4", "C4" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R4_C5   = new js_11.Cell("C_T2_R4_C5" , "T2", "R4", "C5" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R4_C6   = new js_11.Cell("C_T2_R4_C6" , "T2", "R4", "C6" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R4_C7   = new js_11.Cell("C_T2_R4_C7" , "T2", "R4", "C7" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R4_C8   = new js_11.Cell("C_T2_R4_C8" , "T2", "R4", "C8" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R4_C9   = new js_11.Cell("C_T2_R4_C9" , "T2", "R4", "C9" , "N/A", "C_unused_1"    , "C_T2_main_U_1", "" );
const C_T2_R4_C10  = new js_11.Cell("C_T2_R4_C10", "T2", "R4", "C10", "HZ" , "H_row_unused_1", "C_T2_H_row_1" , "4");

const C_T2_R5_C0   = new js_11.Cell("C_T2_R5_C0" , "T2", "R5", "C0" , "HY" , "H_row_unused_1", "C_T2_H_row_1" , "5");
const C_T2_R5_C1   = new js_11.Cell("C_T2_R5_C1" , "T2", "R5", "C1" , "N/A", "c_control_1"   , "C_T2_main_C_2", "1");
const C_T2_R5_C2   = new js_11.Cell("C_T2_R5_C2" , "T2", "R5", "C2" , "N/A", "c_control_1"   , "C_T2_main_C_2", "2");
const C_T2_R5_C3   = new js_11.Cell("C_T2_R5_C3" , "T2", "R5", "C3" , "N/A", "c_control_1"   , "C_T2_main_C_2", "3");
const C_T2_R5_C4   = new js_11.Cell("C_T2_R5_C4" , "T2", "R5", "C4" , "N/A", "c_control_1"   , "C_T2_main_C_2", "4");
const C_T2_R5_C5   = new js_11.Cell("C_T2_R5_C5" , "T2", "R5", "C5" , "N/A", "c_control_1"   , "C_T2_main_C_2", "5");
const C_T2_R5_C6   = new js_11.Cell("C_T2_R5_C6" , "T2", "R5", "C6" , "N/A", "c_control_1"   , "C_T2_main_C_2", "6");
const C_T2_R5_C7   = new js_11.Cell("C_T2_R5_C7" , "T2", "R5", "C7" , "N/A", "c_control_1"   , "C_T2_main_C_2", "7");
const C_T2_R5_C8   = new js_11.Cell("C_T2_R5_C8" , "T2", "R5", "C8" , "N/A", "c_control_1"   , "C_T2_main_C_2", "8");
const C_T2_R5_C9   = new js_11.Cell("C_T2_R5_C9" , "T2", "R5", "C9" , "N/A", "c_control_1"   , "C_T2_main_C_2", "9");
const C_T2_R5_C10  = new js_11.Cell("C_T2_R5_C10", "T2", "R5", "C10", "HZ" , "H_row_unused_1", "C_T2_H_row_1" , "5");

const C_T2_R6_C0   = new js_11.Cell("C_T2_R6_C0" , "T2", "R6", "C0" , "HY", "H_row_unused_1", "C_T2_H_row_1", "" );
const C_T2_R6_C1   = new js_11.Cell("C_T2_R6_C1" , "T2", "R6", "C1" , "HX", "H_col_unused_1", "C_T2_H_col_1", "A");
const C_T2_R6_C2   = new js_11.Cell("C_T2_R6_C2" , "T2", "R6", "C2" , "HX", "H_col_unused_1", "C_T2_H_col_1", "B");
const C_T2_R6_C3   = new js_11.Cell("C_T2_R6_C3" , "T2", "R6", "C3" , "HX", "H_col_unused_1", "C_T2_H_col_1", "C");
const C_T2_R6_C4   = new js_11.Cell("C_T2_R6_C4" , "T2", "R6", "C4" , "HX", "H_col_unused_1", "C_T2_H_col_1", "D");
const C_T2_R6_C5   = new js_11.Cell("C_T2_R6_C5" , "T2", "R6", "C5" , "HX", "H_col_unused_1", "C_T2_H_col_1", "E");
const C_T2_R6_C6   = new js_11.Cell("C_T2_R6_C6" , "T2", "R6", "C6" , "HX", "H_col_unused_1", "C_T2_H_col_1", "F");
const C_T2_R6_C7   = new js_11.Cell("C_T2_R6_C7" , "T2", "R6", "C7" , "HX", "H_col_unused_1", "C_T2_H_col_1", "G");
const C_T2_R6_C8   = new js_11.Cell("C_T2_R6_C8" , "T2", "R6", "C8" , "HX", "H_col_unused_1", "C_T2_H_col_1", "H");
const C_T2_R6_C9   = new js_11.Cell("C_T2_R6_C9" , "T2", "R6", "C9" , "HX", "H_col_unused_1", "C_T2_H_col_1", "I");
const C_T2_R6_C10  = new js_11.Cell("C_T2_R6_C10", "T2", "R6", "C10", "HX", "H_row_unused_1", "C_T2_H_row_1", "" );

const D_D1         = new js_11.Div ("D_D1", "D_D1", "Welcome! Pleased to meet you!");
const D_D2         = new js_11.Div ("D_D2", "D_D1", "This is an experimental sudoku application. It will be developed and upgraded overtime.");
const D_D3         = new js_11.Div ("D_D3", "D_D1", "The intention is that this will be my first full-fledged HTML, CSS and JS app. Later I will rebuild it using React.");

const T_T3         = new js_11.Table("T_T3", "T_T3");

const C_T3_R0_C0   = new js_11.Cell("C_T3_R0_C0", "T3", "R0", "C0", "HY", "H_row_unused_1", "C_T3_main_C_1", "Applicaiton Information:");
const C_T3_R0_C1   = new js_11.Cell("C_T3_R0_C1", "T3", "R0", "C1", "HW", "C_unused_1"    , "C_T3_main_C_1", "");
const C_T3_R0_C2   = new js_11.Cell("C_T3_R0_C2", "T3", "R0", "C2", "HW", "C_unused_1"    , "C_T3_main_C_1", "");

const C_T3_R1_C0   = new js_11.Cell("C_T3_R1_C0", "T3", "R1", "C0", "HY" , "H_row_unused_1", "C_T3_main_C_1", "Version:");
const C_T3_R1_C1   = new js_11.Cell("C_T3_R1_C1", "T3", "R1", "C1", "N/A", "C_unused_1"    , "C_T3_main_C_1", "0.0.8"   );
const C_T3_R1_C2   = new js_11.Cell("C_T3_R1_C2", "T3", "R1", "C2", "N/A", "C_unused_1"    , "C_T3_main_C_1", "");

const C_T3_R2_C0   = new js_11.Cell("C_T3_R2_C0", "T3", "R2", "C0", "HY" , "H_row_unused_1", "C_T3_main_C_1", "Date Last Updated:");
const C_T3_R2_C1   = new js_11.Cell("C_T3_R2_C1", "T3", "R2", "C1", "N/A", "C_unused_1"    , "C_T3_main_C_1", "Sat 07 Feb 2026"   ); // "Tue 02 Sep 2025"
const C_T3_R2_C2   = new js_11.Cell("C_T3_R2_C2", "T3", "R2", "C2", "N/A", "C_unused_1"    , "C_T3_main_C_1", "07/02/2026");         // "02/09/2025"

const C_T3_R3_C0   = new js_11.Cell("C_T3_R3_C0", "T3", "R3", "C0", "HY" , "H_row_unused_1", "C_T3_main_C_1", "Date Created:"  );
const C_T3_R3_C1   = new js_11.Cell("C_T3_R3_C1", "T3", "R3", "C1", "N/A", "C_unused_1"    , "C_T3_main_C_1", "Tue 05 Aug 2025");
const C_T3_R3_C2   = new js_11.Cell("C_T3_R3_C2", "T3", "R3", "C2", "N/A", "C_unused_1"    , "C_T3_main_C_1", "05/08/2025");

const C_T3_R4_C0   = new js_11.Cell("C_T3_R4_C0", "T3", "R4", "C0", "HY" , "H_row_unused_1", "C_T3_main_C_1", "Developed By:"      );
const C_T3_R4_C1   = new js_11.Cell("C_T3_R4_C1", "T3", "R4", "C1", "N/A", "C_unused_1"    , "C_T3_main_C_1", "Abdur-Rahman Shafiq");
const C_T3_R4_C2   = new js_11.Cell("C_T3_R4_C2", "T3", "R3", "C2", "N/A", "C_unused_1"    , "C_T3_main_C_1", "");



const Export_Obj_1 = {
         _Title_T1
        ,_Body_B1
        ,H_H1

        ,T_T1

        ,C_T1_R0_C0
        ,C_T1_R0_C1
        ,C_T1_R0_C2
        ,C_T1_R0_C3
        ,C_T1_R0_C4
        ,C_T1_R0_C5
        ,C_T1_R0_C6
        ,C_T1_R0_C7
        ,C_T1_R0_C8
        ,C_T1_R0_C9
        ,C_T1_R0_C10

        ,C_T1_R1_C0
        ,C_T1_R1_C1
        ,C_T1_R1_C2
        ,C_T1_R1_C3
        ,C_T1_R1_C4
        ,C_T1_R1_C5
        ,C_T1_R1_C6
        ,C_T1_R1_C7
        ,C_T1_R1_C8
        ,C_T1_R1_C9
        ,C_T1_R1_C10

        ,C_T1_R2_C0
        ,C_T1_R2_C1
        ,C_T1_R2_C2
        ,C_T1_R2_C3
        ,C_T1_R2_C4
        ,C_T1_R2_C5
        ,C_T1_R2_C6
        ,C_T1_R2_C7
        ,C_T1_R2_C8
        ,C_T1_R2_C9
        ,C_T1_R2_C10

        ,C_T1_R3_C0
        ,C_T1_R3_C1
        ,C_T1_R3_C2
        ,C_T1_R3_C3
        ,C_T1_R3_C4
        ,C_T1_R3_C5
        ,C_T1_R3_C6
        ,C_T1_R3_C7
        ,C_T1_R3_C8
        ,C_T1_R3_C9
        ,C_T1_R3_C10

        ,C_T1_R4_C0
        ,C_T1_R4_C1
        ,C_T1_R4_C2
        ,C_T1_R4_C3
        ,C_T1_R4_C4
        ,C_T1_R4_C5
        ,C_T1_R4_C6
        ,C_T1_R4_C7
        ,C_T1_R4_C8
        ,C_T1_R4_C9
        ,C_T1_R4_C10

        ,C_T1_R5_C0
        ,C_T1_R5_C1
        ,C_T1_R5_C2
        ,C_T1_R5_C3
        ,C_T1_R5_C4
        ,C_T1_R5_C5
        ,C_T1_R5_C6
        ,C_T1_R5_C7
        ,C_T1_R5_C8
        ,C_T1_R5_C9
        ,C_T1_R5_C10

        ,C_T1_R6_C0
        ,C_T1_R6_C1
        ,C_T1_R6_C2
        ,C_T1_R6_C3
        ,C_T1_R6_C4
        ,C_T1_R6_C5
        ,C_T1_R6_C6
        ,C_T1_R6_C7
        ,C_T1_R6_C8
        ,C_T1_R6_C9
        ,C_T1_R6_C10

        ,C_T1_R7_C0
        ,C_T1_R7_C1
        ,C_T1_R7_C2
        ,C_T1_R7_C3
        ,C_T1_R7_C4
        ,C_T1_R7_C5
        ,C_T1_R7_C6
        ,C_T1_R7_C7
        ,C_T1_R7_C8
        ,C_T1_R7_C9
        ,C_T1_R7_C10

        ,C_T1_R8_C0
        ,C_T1_R8_C1
        ,C_T1_R8_C2
        ,C_T1_R8_C3
        ,C_T1_R8_C4
        ,C_T1_R8_C5
        ,C_T1_R8_C6
        ,C_T1_R8_C7
        ,C_T1_R8_C8
        ,C_T1_R8_C9
        ,C_T1_R8_C10

        ,C_T1_R9_C0
        ,C_T1_R9_C1
        ,C_T1_R9_C2
        ,C_T1_R9_C3
        ,C_T1_R9_C4
        ,C_T1_R9_C5
        ,C_T1_R9_C6
        ,C_T1_R9_C7
        ,C_T1_R9_C8
        ,C_T1_R9_C9
        ,C_T1_R9_C10

        ,C_T1_R10_C0
        ,C_T1_R10_C1
        ,C_T1_R10_C2
        ,C_T1_R10_C3
        ,C_T1_R10_C4
        ,C_T1_R10_C5
        ,C_T1_R10_C6
        ,C_T1_R10_C7
        ,C_T1_R10_C8
        ,C_T1_R10_C9
        ,C_T1_R10_C10

        ,T_T2

        ,C_T2_R0_C0
        ,C_T2_R0_C1
        ,C_T2_R0_C2
        ,C_T2_R0_C3
        ,C_T2_R0_C4
        ,C_T2_R0_C5
        ,C_T2_R0_C6
        ,C_T2_R0_C7
        ,C_T2_R0_C8
        ,C_T2_R0_C9
        ,C_T2_R0_C10

        ,C_T2_R1_C0
        ,C_T2_R1_C1
        ,C_T2_R1_C2
        ,C_T2_R1_C3
        ,C_T2_R1_C4
        ,C_T2_R1_C5
        ,C_T2_R1_C6
        ,C_T2_R1_C7
        ,C_T2_R1_C8
        ,C_T2_R1_C9
        ,C_T2_R1_C10

        ,C_T2_R2_C0
        ,C_T2_R2_C1
        ,C_T2_R2_C2
        ,C_T2_R2_C3
        ,C_T2_R2_C4
        ,C_T2_R2_C5
        ,C_T2_R2_C6
        ,C_T2_R2_C7
        ,C_T2_R2_C8
        ,C_T2_R2_C9
        ,C_T2_R2_C10

        ,C_T2_R3_C0
        ,C_T2_R3_C1
        ,C_T2_R3_C2
        ,C_T2_R3_C3
        ,C_T2_R3_C4
        ,C_T2_R3_C5
        ,C_T2_R3_C6
        ,C_T2_R3_C7
        ,C_T2_R3_C8
        ,C_T2_R3_C9
        ,C_T2_R3_C10

        ,C_T2_R4_C0
        ,C_T2_R4_C1
        ,C_T2_R4_C2
        ,C_T2_R4_C3
        ,C_T2_R4_C4
        ,C_T2_R4_C5
        ,C_T2_R4_C6
        ,C_T2_R4_C7
        ,C_T2_R4_C8
        ,C_T2_R4_C9
        ,C_T2_R4_C10

        ,C_T2_R5_C0
        ,C_T2_R5_C1
        ,C_T2_R5_C2
        ,C_T2_R5_C3
        ,C_T2_R5_C4
        ,C_T2_R5_C5
        ,C_T2_R5_C6
        ,C_T2_R5_C7
        ,C_T2_R5_C8
        ,C_T2_R5_C9
        ,C_T2_R5_C10

        ,C_T2_R6_C0
        ,C_T2_R6_C1
        ,C_T2_R6_C2
        ,C_T2_R6_C3
        ,C_T2_R6_C4
        ,C_T2_R6_C5
        ,C_T2_R6_C6
        ,C_T2_R6_C7
        ,C_T2_R6_C8
        ,C_T2_R6_C9
        ,C_T2_R6_C10

        ,D_D1
        ,D_D2
        ,D_D3

        ,T_T3

        ,C_T3_R0_C0
        ,C_T3_R0_C1
        ,C_T3_R0_C2

        ,C_T3_R1_C0
        ,C_T3_R1_C1
        ,C_T3_R1_C2

        ,C_T3_R2_C0
        ,C_T3_R2_C1
        ,C_T3_R2_C2

        ,C_T3_R3_C0
        ,C_T3_R3_C1
        ,C_T3_R3_C2

        ,C_T3_R4_C0
        ,C_T3_R4_C1
        ,C_T3_R4_C2
}

export {
        Export_Obj_1
}

console.log("Module js_12.js | Execution Terminate");


