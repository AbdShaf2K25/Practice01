let cell_A1 = 1;
let cell_A2 = 2;
let cell_A3 = 3;

function update_A1_1(){
    cell_A1 += 1;
    console.log("A1 updated to:   " + cell_A1);
}
function update_A2_2(){
    cell_A2 += 1;
    console.log("A2 updated to:   " + cell_A2);
}
function update_A3_3(){
    cell_A3 += 1;
    console.log("A3 updated to:   " + cell_A3);
}

function alert_date_1(){
    let d = new Date();
    alert("Today's date is " + d);
}

import User from './js_07.js';
import {printName, printAge } from './js_07.js';

export {
     update_A1_1
    ,update_A2_2
    ,update_A3_3
    ,alert_date_1
    ,User
    ,printName
    ,printAge
}

console.log("Module js_06.js loaded");

const User_1 = new User("Alice", 30);
const User_2 = new User("Bob", 28);
const User_3 = new User("Camila", 29);
const User_4 = new User("Daniel", 29);

console.log("Module js_06.js | I have no idea why this isn't loading properly.");
console.log("Module js_06.js | 2");