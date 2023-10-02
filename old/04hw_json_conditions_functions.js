//create a function that takes one param and inside makes the value Uppercase
//if the parameter not string type - console message about the incorrect type of data.
// function toUpperCase(name) {
//     return name.toUpperCase()
//   }
//   const result = toUpperCase("some name")
//    console.log(result)

function toUpperCase(value) {
    if (typeof value === "string") {
    return value.toUpperCase();
    } else {
    throw new Error("Value must be a string");
    }
    }  

//create js function that add properties for the object, allowing only number
function addProp(obj, key, value) {
    if (typeof value === "number") {
    obj[key] = value;
    } else {
    console.log("Value is not a number")
    }
    }

//create JS object with 5 different properties
let objects = '{"obj1":"First", "obj2":"Second", "obj3":"Third", "obj4":"Fourth", "obj5":"Fifth"}'
console.log(objects)

//with previously created function add a new property
let objectsNew = JSON.parse(objects)
objectsNew.obj6 = "Last"
objects = JSON.stringify(objectsNew)
console.log(objects)

//check the function syntax and if some issues propose let sum == function{a, b} (return a + b;)
let sum = function(a, b) {
    return a + b
    }
console.log(sum)