//create a function that takes one param and inside makes the value Uppercase
//if the parameter not string type - console message about the incorrect type of data.
function toUpperCase(name) {
    return name.toUpperCase()
  }
  const result = toUpperCase("some name")
   console.log(result)

//create js function that add properties for the object, allowing only number
function addProp(obj, key, value) {
    // check if the value is a number
    if (typeof value === "number") {
    // add the property to the object
    obj[key] = value;
    } else {
    // throw an error
    throw new Error("Value must be a number");
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

//check the function syntax and if some issues propose
//let sum == function{a, b} (return a + b;)
let sum = function(a, b) {
    return a + b;
    };
console.log(sum)


// let sum = function(4, 3);   // Викликається функція, повертається значення в кінці x
// function myFunction(a, b) {
//   return a * b;            // Функція повертає добуток a та b
// }

// function someSum(a, b){
//     let someSum == sum{
//         return a + b
//     }
//     console.log(someSum)
// }




// function clickButton(selector, text='Hello') {
//     console.log('Click the element')
//     frameworkPlaywright.clickButton(selector)
//     let ownVariable1 = 
//     //assert txtOnUi == text
// }



//function expression
// let getTheValue = function(){
//     console.log('Fatching the data from UI')  
//     // frameworkPlaywright.getTheValue()
// }