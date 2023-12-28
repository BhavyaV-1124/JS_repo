
// ********** Function Based **************

// function User(email, password){
//     this._email = email;
//     this._password = password;

//     Object.defineProperty(this, 'email',{
//         get: function(){
//             return this._email.toUpperCase();
//         },
//         set: function(value){
//             this._email = value;
//         }
//     })
// }

// const chai = new User("chai@chai.com", "chai");

// console.log(chai.email);


// **************** Object-based *****************

const User = {
    _email: 'h@hc.com',
    _password: 'abc',

    get email(){
        return this._email;
    },

    set email(value){
        this._email = value;
    },

    get password(){
        return this._password;
    },

    set password(value){
        this._password = value;
    }
}

const coffee = Object.create(User);

console.log(coffee.email);
console.log(coffee.password);