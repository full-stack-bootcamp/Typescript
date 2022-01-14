"use strict";
const PersonName = "Khalid Abdi";
const valueContainsA = PersonName.includes('B');
console.log("The name contains A: ", valueContainsA);
const nameStartWith = PersonName.startsWith('A');
console.log("All names that starts with: ", nameStartWith);
const nameEndsWith = PersonName.endsWith('A');
console.log("All names that end with: ", nameEndsWith);
const firstFiveChars = PersonName.substring(0, 5);
console.log("The first five chars: ", firstFiveChars);
const parts = PersonName.split(" "); // magacyada an so akhriyayo space ku kala qaybi ama ,
console.log("Name Parts: ", parts);
const firstName = parts[0];
console.log("First Name is: ", firstName);
