//if

const isUserLoggedIn = true;

// if(3 != 2){
//     console.log("executed");
// }

// const score = 200;

// if(score > 100){
//     let power = fly;
//     console.log(`User Power: ${power}`);
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy course.");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}