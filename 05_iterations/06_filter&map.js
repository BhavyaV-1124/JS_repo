// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((items) => {
//     console.log(items);                     // For-each loop won't return anything. even if you want it.
// })

// console.log(values);


// const myNums = [1,2,3,4,5,6,7,8,9,10];

// let newNums = myNums.filter((items)=>{
//     return items>5;
// })                              
// console.log(newNums);

// const newNums = [];                     // Brute-force way of getting return with the help of foreach.

// myNums.forEach((num) =>{
//     if(num>4){
//         newNums.push(num);
//     }
// })

// console.log(newNums);


// Books example can be verified by going back to video.



// **************************          **********************************

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNumbers.map((num) => num + 10)

const newNums = myNumbers
    .map((num) => num *10)
    .map((num) =>num + 1)                   // chaining 
    .filter((num) => num >=40)

console.log(newNums);
