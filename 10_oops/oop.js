// const user = {
//     userName: "Bhavya",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details from database");
//     }
// }


 function User(userName, loginCount, isLoggedIn){
   this.userName = userName;
   this.loginCount = loginCount;
   this.isLoggedIn = isLoggedIn;

  this.greeting = function(){
    console.log(`Welcome ${this.userName}`);
  }
 }


 const userOne =  new User("Max", 12, true);
 console.log(userOne);
 console.log(userOne.greeting());






// console.log(user.userName);
// console.log(user.getUserDetails);

