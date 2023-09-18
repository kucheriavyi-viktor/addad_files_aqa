 const objMy = {name: 'Den', lName: 'Kol', age: 3000}

 const testDataEnv1 = {url: 'url1', username: 'user1'}
 const testDataEnv2 = {url: 'url2', username: 'user1'}

//  console.log(Object.keys(testDataEnv1))

//  testDataEnv1.pass = 'Pass1'
 
//  console.log(Object.keys(testDataEnv1))               //виводить ключі
//  console.log(Object.values(testDataEnv1))             //виводить значення


testDataEnv1.pass = 'Pass1'

// for (let data in testDataEnv1) {
//     // console.log(data)                                //отримуємо тільки значення
//     console.log(`${data}: ${testDataEnv1[data]}`)       //змінна яка буде бігати по нашому 
// }

// delete testDataEnv2.url                // видалить данні по об'єкту
// console.log(testDataEnv2)

// // let arr1 = ['kil', 'ooo', 343, 'jdujf', 2390, true, function() {console.log('Hi from array')}]
// // delete arr1[2]                        // видалить данні по об'єкту 343 і залишить місце емпті
// // console.log(arr1)

// console.log(Object.hasOwn(testDataEnv1, 'url'))     //перевірка про наявність ключа тру або фолс
