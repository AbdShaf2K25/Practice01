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