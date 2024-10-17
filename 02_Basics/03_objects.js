// singleton
// Object.create

// boject literals

const mySym = Symbol("key1")

const JsUser = {
    name : "hitesh",
    "full name" : "hitesh chodhary",
    [mySym] : "myKey1" ,
    age : 18,
    locatoin : "jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDay : ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
// console.log(JsUser.fullname);     no space in key then work
console.log(typeof JsUser[mySym]);   // typeof is what kind of value declare. but
console.log(typeof mySym);           // typeof is symbol
// console.log(typeof JsUser.mySym);     // undefined

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsof.com"
console.log(JsUser);

console.log("------------------------------------------------------------");

JsUser.greeting = function(){
    console.log("Hello Js user");
    // return "Hello Js user"
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`)
}

// console.log(JsUser.greeting());
JsUser.greeting() 
JsUser.greetingTwo()  
  

