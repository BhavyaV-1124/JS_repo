// arrays

const myArr = [0,1,2,3,4,5];

const myHeroes = ["Sups", "Batsy"];

const myArr2 = new Array(1,2,3,5,7);

// Array methods.

// myArr.push(6);
// myArr.pop();
// myArr.unshift(9);        
// myArr.shift();        // Starts from index 0; for all 4 methods.

// console.log(myArr.includes(9));   // to get response in form of true/false.
// console.log(myArr.includes(3));

// const newArr = myArr.join();
// console.log(myArr);
// console.log(typeof(newArr));


// Slice, Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3); // gives copy of expected range from i.e: 1,2

console.log(myn1);
console.log("B ", myArr); 

const myn2 = myArr.splice(1,3);  // gives result including range i.e: 1,2,3 but also manipulates the original array by taking this values from it.

console.log("C ", myArr);
console.log(myn2);