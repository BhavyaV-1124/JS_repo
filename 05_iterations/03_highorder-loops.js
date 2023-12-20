 
 // for of

 // ["", "", ""]
 

 const arr = [1,2,3,4,5];

 for (const num of arr) {
    // console.log(num);
 }

 const greetings = "Hello World";

 for (const i of greetings) {
    // console.log(`Each char is ${i}`);
 }

 // Maps

 const map = new Map();

 map.set("IN", "India");
 map.set("US", "United States");
 map.set("FR", "France");

//  console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    'game1': "NFS",
    'game2': "Spiderman"    // object is not iterable with for of loop , only normal array and maps will do.
}