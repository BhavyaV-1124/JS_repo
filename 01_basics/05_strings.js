const name = "Bhavya";
const repoCount = 80;

// old Concept
// console.log(name + repoCount + "Value");

// New Concept
// console.log(`Hello my name is ${name}, and my repo Count is ${repoCount}.`);

const gameName = new String("Bhavya-BV");

// console.log(gameName[0]);
// console.log(gameName.length);

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "   Bhavya    ";
console.log(newStringOne);
console.log(newStringOne.trim());

console.log(gameName.split('-'));
