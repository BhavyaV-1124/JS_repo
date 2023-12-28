class User{
    constructor(userName){
        this.userName = userName;
    }

    logMe(){
        console.log(`UserName is ${this.userName}`);
    }
}

class Teacher extends User{
    constructor(userName, email, password){
        super(userName);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.userName}`);
    }
}

const chai =  new Teacher("chai", "chai@teacher.com", "123");

chai.addCourse();

const masalaChai = new User("masalaChai");

masalaChai.logMe();
