class Human {
    constructor() {
        if (this.constructor == Human) {
            throw new Error('it is abstract class')
        } 
    }
    eat(){console.log('eating')}
    listen() { console.log('listening') }
}

class Worker extends Human {
    constructor(salary, workTime) {
    super();
    this.salary = salary;
    this.workTime = workTime;
    }
    greet() {
        console.log("Hello, worker")
    }
    finishWork() {
        console.log("The work ends");
    }
}