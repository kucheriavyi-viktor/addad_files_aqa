const objMy = {name: 'Den', lName: 'Kol', age: 3000}
const testDataEnv2 = {url: 'url2', username: 'user1'}

const testDataEnv1 = {
    url: 'url1', 
    username: 'user1',
    getThisProp(){
        return this.url
    },
    server: {
        url: '127.0.0.01',
        protocol: 'https',
        showFullAdress() {
            return this.protocol + '://' + this.url
        }
    }, mailaddressarr: [
        {
            mail_server: 'gmail',
            mail_user: 'blah_blah',
            mail_password: '1222211123'
        }
    ]
}
console.log(testDataEnv1.mailaddressarr[0].mail_password)

let urlForTest = testDataEnv1.server.showFullAdress ()
console.log(urlForTest)
console.log(testDataEnv1.server.protocol)