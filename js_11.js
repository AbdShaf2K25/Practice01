console.log("Module js_07.js | Load Start");
console.log("Module js_07.js | Execution Start");
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

function printName(user){
    console.log(`User's name is ${user.name}`);
}
function printAge(user){
    console.log(`User's age is ${user.age}`);
}

//export default User
export {
    User,
    printName,
    printAge
}
console.log("Module js_07.js | Execution Terminate");
console.log("Module js_07.js | Load Terminate");

console.log("Module js_09.js | Load Start");
console.log("Module js_09.js | Execution Start");
import * as js_06 from './js_06.js'

const button_2 = document.getElementById("button_2");
button_2.addEventListener("click", js_06.alert_date_1);

console.log("Module js_09.js | Execution Terminate");
console.log("Module js_09.js | Load Terminate");

console.log("Module js_06.js | Load Start");
console.log("Module js_06.js | Execution Start");
let cell_A1 = 1;
let cell_A2 = 2;
let cell_A3 = 3;

function update_A1_1(){
    cell_A1 += 1;
    console.log("A1 updated to:   " + cell_A1);
}
function update_A2_1(){
    cell_A2 += 1;
    console.log("A2 updated to:   " + cell_A2);
}
function update_A3_1(){
    cell_A3 += 1;
    console.log("A3 updated to:   " + cell_A3);
}

function alert_date_1(){
    let d = new Date();
    alert("Today's date is " + d);
}

import * as js_07 from './js_07.js'

export {
     update_A1_1
    ,update_A2_1
    ,update_A3_1
    ,alert_date_1
    ,js_07
}

const User_1 = new js_07.User("Alice", 3000);
const User_2 = new js_07.User("Bob", 2800);
const User_3 = new js_07.User("Camila", 2900);
const User_4 = new js_07.User("Daniel", 2900);

js_07.printName(User_1);
js_07.printAge(User_1);
js_07.printName(User_2);
js_07.printAge(User_2);
js_07.printName(User_3);
js_07.printAge(User_3);
js_07.printName(User_4);
js_07.printAge(User_4);
console.log("Module js_06.js | Execution Terminate");
console.log("Module js_06.js | Load Terminate");