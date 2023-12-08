const user = {
    userName: "Bhavya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName} ,welcome to website.`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.userName = "Sam";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let userName = "Bhavya";
//     console.log(this);
// }

// chai();

// const chai = () =>{
//     let userName = "Bhavya";
//     console.log(this);
// }
// chai();


// ***************** Arrow function *************

// const addTwo = (num1, num2) =>{
//     return num1+num2;
// }                                    // Basic Arrow Function with Explicit return

// console.log(addTwo(3,4));


const addTwo = (num1, num2) => num1+num2;
console.log(addTwo(3,4));               // Arrow Function with implicit return