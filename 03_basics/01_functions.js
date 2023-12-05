function sayMyName(){
    console.log("B");
console.log("H");
console.log("A");
console.log("V");
console.log("Y");
console.log("A");
};

// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// };

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
};


const result = addTwoNumbers(5,3);
// console.log("Result:", result);

function loginUserMessage(username){
    return `${username} just logged in`;
};

console.log(loginUserMessage("Bhavya"));