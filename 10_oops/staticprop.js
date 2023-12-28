class User{
    constructor(userName){
        this.userName = userName;

    }

    logMe(){
        console.log(`Username: ${this.userName}`);
    }

    static createId(){
        return  `123`;
    }
}

const Bhavya = new User("Bhavya");
// console.log(Bhavya.createId());

class Teacher extends User{
    constructor(userName, email){
        super(userName);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");

iphone.logMe();
