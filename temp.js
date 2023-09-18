//create a function that takes one param and inside makes the value Uppercase
//if the parameter not string type - console message about the incorrect type of data.


let objects = '{"obj1":"First", "obj2":"Second", "obj3":"Third", "obj4":"Fourth", "obj5":"Fifth"}'
// console.log(objects)
//with previously created function add a new property
function newProperty() {
let objectsNew = JSON.parse(objects)
objectsNew.obj6 = "Last"
objects = JSON.stringify(objectsNew)
console.log(objects) 
}
console.log(objects)

//check the function syntax and if some issues propose let sum == function{a, b} (return a + b;)
// let sum = function(a, b) {
//     return a + b
//     }
// console.log(sum)


function addProp(obj, key, value) {
    // check if the value is a number
    if (typeof value === 'number') {
    // add the property to the object
    obj[key] = value;
    } else {
    // throw an error
    console.log("Value must be a number");
    
    }
    
    }
    

    let objects = '{"obj1":"First", "obj2":"Second", "obj3":"Third", "obj4":"Fourth", "obj5":"Fifth"}'
    typeof value === 'number'
        // add the property to the object
        obj[key] = value
    console.log(objects)