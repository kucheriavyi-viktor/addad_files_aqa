const objMy = {name: 'Den', lName: 'Kol', age: 3000}
const testDataEnv2 = {url: 'url2', username: 'user1'}

const testDataEnv1 = {
    url: 'url1', 
    username: 'user1',
    getThisProp(){
        return this.url
    }
}

// let getValFromObj = testDataEnv1.getThisProp()
// console.log(getValFromObj)

function addPropColor() {                           // додає властивість до об'єкту
    this.color = 'red'
}              
objMy.addPropColor = addPropColor
objMy.addPropColor()
console.log(Object.values(objMy))     //виводимо наші ключі, до новоствореного нашого об'єкта

function getAllProp() {
    return this;                                   //return this.age  - поверне ключ age
};

// objMy.getAllProp = getAllProp
// testDataEnv2.getAllProp = getAllProp

// console.log(objMy.getAllProp())