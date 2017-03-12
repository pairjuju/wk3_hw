'use strict'
class Person {
	constructor (name) {
		this.name = name;
	}
	printGreeting () {
		console.log(`Hi, I am ${this.name}!`);
	}
}

var person1 = new Person('PJ');
person1.printGreeting();

var person2 = new Person('JP');
person2.printGreeting();

class Employee extends Person{
    constructor (name,job){
        super(name);
        this.job=job
    }
    printGreeting(){
        super.printGreeting();
        console.log(`上面那行是呼叫person的greet.hi,I am ${this.name},a ${this.job}`);
    }

}
var person3=new Employee('pairjuju','student');
person3.printGreeting();
var person4=new Employee('jujupair');
person4.printGreeting();