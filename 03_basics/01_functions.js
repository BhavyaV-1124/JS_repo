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

// console.log(loginUserMessage("Bhavya"));

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200, 300, 500));
// if more than one value in function use the case of rest 

const user = {
    userName: "Bhavya",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
}

// handleObject(user);

handleObject({
    userName: "BV",
    price: 99
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));