// Singleton 
    // Object.create; Made through constructor

// Object literals
const mySym = Symbol("key1");

    const JsUser = {
        name: "Bhavya",
        age: 25,
        location: "Ahmedabad",
        email: "Bhavya@google.com",
        isLoggedIn: false,
        lastLoginDays: ["monday", "saturday"],
        [mySym]: "mykey1" 
    };

   
    
    JsUser.email = "Bhavya@microsoft.com";

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

