"use strict";

// constructor function
/* function Person(name, bithYear) {
  this.name = name;
  this.bithYear = bithYear;

  this.calAge =function(){
    return new Date().getFullYear() - this.bithYear
  };
}

const person1 = new Person("Jannat", 1999);
const person2 = new Person("Eva", 2001)

console.log(person1.name, `says amr boyos ${person1.bithYear}💙`);
console.log(person2.calAge());
 */

// classes
class Person{
  constructor(name, birthYear){
    this.name = name;
    this.birthYear = birthYear;
  }

  claAge(){
    return new Date().getFullYear() - this.birthYear;
  }
}

class Subject{
  constructor(subjectName){
    this.subjectName = subjectName;
  }
  
  getSubject(){
    return this.subjectName;
  }
}
const student1 = new Person("Sathi", 2000);
const suject = new Subject("English")

console.log(student1.name);
console.log(student1.claAge());
console.log(suject.getSubject());

class ProtoType {
  constructor(name, birthyear) {
    this.name = name;
    this.birthyear = birthyear;
  }

  calaAge() {
    return new Date().getFullYear() - this.birthyear;
  }
}

class Hobby extends ProtoType {
  constructor(name, birthyear, hobbyName) {
    super(name, birthyear);
    this.hobbyName = hobbyName;
  }

  getHobby() {
    return this.hobbyName;
  }
}

const student2 = new ProtoType("Aliya", 1998);
const student3 =new Hobby("Naymer", 1995, "Football" )

console.log(student2.name, student2.calaAge());
console.log(student3.name, student3.calaAge() );
console.log(student3.getHobby());
console.log(student3.name, student2.calaAge());

class Animal{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getAge(){
    return this.age;
  }
}

class OwnersName extends Animal {
  constructor(name, age, owner) {
    super(name, age);
    this.owner = owner;
  }

  getOwner() {
    return this.owner;
  }
}

const animal1 = new Animal("Kitty", 2);
const animal2 = new OwnersName("Pikachu", 2, "Aesh");

console.log(animal1.name);
console.log(animal1.getAge());
console.log(animal1.name, `was ${animal1.getAge()} years old.🐈`);

console.log(animal2.getOwner());
console.log(animal2.getAge());
console.log(animal2.name, `say to ${animal1.name}, "my owner name is ${animal2.getOwner()}"`);

