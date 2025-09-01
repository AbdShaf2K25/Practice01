console.log("Module js_09.js | Load Start");
console.log("Module js_09.js | Execution Start");
import * as js_06 from './js_06.js'

const button_2 = document.getElementById("button_2");
button_2.addEventListener("click", js_06.alert_date_1);

console.log("Module js_09.js | Execution Terminate");
console.log("Module js_09.js | Load Terminate");