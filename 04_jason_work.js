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
import fetch from 

const path = './04_values.json'
const newData = {phone: 454545, adress: 'Street'}
fs.writeFile(path, JSON.stringify(newData));

// let readData = fs.readFile((path, (error, data) =>
// if (error) {}
// ))

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

async function func1() {
    let ddd = await JSON.parse(fs.readFileSync(path, 'utf-8'))
    console.log(ddd)
    console.log('Hello from async function')
}
func1()

let arrN = []
async function readJsonAndWriteName(path='. /response_1694287579730.json'){
    let jsonData2 = await fs.readJson(path)

    for (let element of jsonData2){
        arrN.push(element['first_name'])
    }
    console.log(arrN)
    await fs.writeJson ('name.json', JSON.stringify(arrN))
}
readJsonAndWriteName()


//sudo chown -R $USER /usr/local/lib/node_modules
//https://reqres.in/api-docs/#/

async function getDataReqres() {
    let response = await fetch('https://reqres.in/api/users?')
    let data = await response.json()
    await fs.writeFile('responseRreqres.json', JSON.stringify(data))
}
getDataReqres()

// let arrN = []
// async function readJsonAndWriteName(path){
//     let jsonData2 = await fs.readJson(path)

//     for (let element of jsonData2){
//         arrN.push(element['first_name'])
//     }
//     console.log(arrN)
//     await fs.writeJson ('name.json', JSON.stringify(arrN))
// }
// readJsonAndWriteName()

// readJsonAndWriteName('responseRreqres.json')

const dataUser = {
    "username": "Frank",
    "email": "frank@mail.com",
    "password": "667766GY876Fj"
  }

  async function createUser(data) {
    try {
        const response = await fetch ('https://reqres.in/api/user/register',
        {method: 'POST', 
        bode: JSON.stringify(data),
        headers: {'Content-Type: application/json'}
        })
        const dataRStatusCode = await response.status
        const responsed = await response.json() 
        console.log(dataRStatusCode)
        console.log(responsed)
    } catch(error) {
        console.log(error)
    }
  }

  createUser(dataUser)