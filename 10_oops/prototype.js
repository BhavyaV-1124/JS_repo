let myName = "Bhavya     ";

// console.log(myName.length);

let myHeroes = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Array.prototype.Bhavya = function(){
    console.log(`Bhavya is present in all the objects`);
}

// heroPower.Bhavya();

// myHeroes.Bhavya(); 



// Inheritance//

const user = {
    name: "chai",
    email: "abc@google.com"
}

const Teacher = {
    makeVideo: true,

}

const TeachingSupport = {
    isAvailable: false,

}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = User;


// Modern Syntax.

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiaurCode      ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUserName.trueLength();
"Bhavya".trueLength();