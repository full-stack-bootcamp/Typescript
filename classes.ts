// Classes
// Class : 
// Classes have : properties and actions/behavior
class Person {
    name: string;
    age: number;

    talk(){ // action
        console.log("I talk alot everyday!");
    }
    walk(){
        console.log("I walk everyday!");
    }
}
const person1: Person = new Person();
person1.name = "Khalid Abdi Guleid";
person1.age = 18;
console.log("Person is ", person1);

const people: Person[] = [];

people[0] = new Person();
people[0].name = 'Ahmed Abdi';
people[0].age = 22;

console.log("My friend are: ",people);



class BaniAdam{
    name: String;
    weight: number;
    nationality: string;
    Gender: string;
}
const shakhsi = new BaniAdam();
shakhsi.name = 'Khalid Abdi Guleid';
shakhsi.weight = 83;
shakhsi.nationality = "Somalilander";
shakhsi.Gender = 'Male';
console.log(shakhsi);

const shakhsi1 = new BaniAdam();
shakhsi1.name = 'Khalid Abdi Guleid';
shakhsi1.weight = 83;
shakhsi1.nationality = "Somalilander";
shakhsi1.Gender = 'Male';
console.log(shakhsi1);



// Assignment
// name and age : are the behaviors 
// access modifiers : public , private
class Stranger {
    private name: string;
    private age : number;

    constructor(name:string, age:number) {
       this.name = name;
       this.age = age;
    }
    introduce(){
        console.log("My name is: " + this.name + " and my age is: " + this.age);
    }
}
const newPerosn: Stranger = new Stranger("Khalid", 18);
newPerosn.introduce();

const Fatima : Stranger = new Stranger("Fatima Adan", 22);
Fatima.introduce();