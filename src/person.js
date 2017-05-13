// person.js
export default class Person {
    constructor(name = 'Unknown') {
        this.name = name;
    }
    printName () {
        $('body').append(`My name is ${this.name}`);
    }
}
