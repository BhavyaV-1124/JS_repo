
const marvel_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "Flash", "Batman" ];

// marvel_heros.push(dc_heroes); // this will take dc_heroes entire array as the 4th element!

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes); // this will give the desired results.

// const all_new_heroes = [...marvel_heroes, ...dc_heroes];  // spread 
// console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(2);  // flat gives all the elements in the single array
console.log(real_another_array);

console.log(Array.from("Bhavya")); // makes array from the given element

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // returns new array from set of elements.