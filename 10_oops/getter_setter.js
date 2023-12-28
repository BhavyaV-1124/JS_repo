class User {
    constructor(email, password) {
        this._email = email;
        this._password = password; // Use a different name for the property
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password() {
        return this._password.toUpperCase(); // Access the property with the different name
    }

    set password(value) {
        this._password = value; // Use the different name for setting the property
    }
}

const Bhavya = new User("bhavya@vyas.ai", "abc");
console.log(Bhavya.password);
console.log(Bhavya.email); 