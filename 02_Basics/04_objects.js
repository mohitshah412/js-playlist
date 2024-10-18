// const tinderUser = new Object()

const tinderUser = {}

tinderUser.tinderId = "123abc"
tinderUser.tinderName = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "hitesh",
            lastname : "chodhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj4 = {4 : "a", 6 : "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)  //{} -> Target, obj1 obj 2obj4-> source 

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const user = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    }
]

// console.log(user[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(Object.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "Js in hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

// course.courseInstructor

const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free" 
// }

[
    {},
    {},
    {}
]