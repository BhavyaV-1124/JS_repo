 // const tinderUser = new Object()

 const tinderUser = {};

 tinderUser.id = "123abc";
 tinderUser.name = "Sammy";
 tinderUser.isLoggedIn = false;

//   console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Bhavya",
            lastname: "Vyas"
        }
    }
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3); // assign

const obj3 = {...obj1, ...obj2};
// console.log(obj3);   // spread


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

const course = {
    coursenmae: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};

 // course.courseInstructor

 const{courseInstructor: teacher} = course; // object de-structure 
 console.log(teacher);


