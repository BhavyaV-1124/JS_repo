// In future they are planning to swith time api with temporal library as a standard.

let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

let myCreatedDate = new Date("11-06-1998");
console.log(myCreatedDate.toLocaleString());

let time = console.log(myDate.getTime());

