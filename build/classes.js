// Classes
// Class : 
// Classes have : properties and actions/behavior
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.talk = function () {
        console.log("I talk alot everyday!");
    };
    Person.prototype.walk = function () {
        console.log("I walk everyday!");
    };
    return Person;
}());
var person1 = new Person();
person1.name = "Khalid Abdi Guleid";
person1.age = 18;
console.log("Person is ", person1);
var people = [];
people[0] = new Person();
people[0].name = 'Ahmed Abdi';
people[0].age = 22;
console.log("My friend are: ", people);
var BaniAdam = /** @class */ (function () {
    function BaniAdam() {
    }
    return BaniAdam;
}());
var shakhsi = new BaniAdam();
shakhsi.name = 'Khalid Abdi Guleid';
shakhsi.weight = 83;
shakhsi.nationality = "Somalilander";
shakhsi.Gender = 'Male';
console.log(shakhsi);
var shakhsi1 = new BaniAdam();
shakhsi1.name = 'Khalid Abdi Guleid';
shakhsi1.weight = 83;
shakhsi1.nationality = "Somalilander";
shakhsi1.Gender = 'Male';
console.log(shakhsi1);
// Assignment
// name and age : are the behaviors 
var Stranger = /** @class */ (function () {
    function Stranger(name, age) {
        this.name = name;
        this.age = age;
    }
    Stranger.prototype.introduce = function () {
        console.log("My name is: " + this.name + " and my age is: " + this.age);
    };
    return Stranger;
}());
var newPerosn = new Stranger("Khalid", 18);
newPerosn.introduce();
var Fatima = new Stranger("Fatima Adan", 22);
Fatima.introduce();
