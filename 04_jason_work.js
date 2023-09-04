// let obj1 = {name: "vik", lname: "kucheryavyi", age: 10500}
// console.log(obj1)

// let jsonObj1 = JSON.stringify(obj1)
// console.log(jsonObj1)

// let jsonObj1 = '{"name": "vik", "lname": "kucheryavyi", "age": 10500}'
// let obj2 = JSON.parse(jsonObj1)
// console.log(obj2.name)
// obj2.city = "York"
// console.log(obj2)
// jsonObj1 = JSON.stringify(obj2)
// console.log(jsonObj1)

// const values = require('./04_values.json')
// console.log(values)
const fs = require('fs-extra')
const path = './04_values.json'
const newData = {phone: 454545, adress: 'Street'}
fs.writeFile(path, JSON.stringify(newData));

let readData = fs.readFile((path, (error, data) =>
if (error) {}
))

function Func() {
    fetch("./sample.json")
        .then((res) => {
        return res.json();
    })
    .then((data) => console.log(data));
}



// function Func() {
//     fetch("./sample.json")
//         .then((res) => {
//         return res.json();
//     })
//     .then((data) => console.log(data));
// }



