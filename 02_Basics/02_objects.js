//object literals
const mysym =Symbol("newSym");
const JsUser={
    name:"priti",
    "lastName":"sharma",
    age:25,
    [mysym]:"newSym",
    isLoggedIn:true,
    lastLoginDetails:{
        lastLoginTime:"10:00",
        lastLoginIp:"192.168.1.1"
    }
}

// console.log(JsUser.name);
// console.log(JsUser["lastName"]);
// console.log(JsUser[mysym])

JsUser.greeting= function(){
       console.log("hello")
}

// console.log(JsUser.greeting());

JsUser.greeting2=function(){
    // console.log(`hello ${this.name}`)
}

// console.log(JsUser.greeting2())


/**  ++++++++++++++++PART2+++++++++++++++++++
 */

const tinderUser={
  email:"priti@gmail.com",
  fullname:{
    Userfullname:{
        firstname:"Priti",
        lastname:"kumari"

    }

  }
}

console.log(tinderUser.fullname.Userfullname)

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}

// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)

const obj3={...obj1,...obj2}
console.log(obj3)

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course={
    Cname:"sci",
    Department:"math"
}

const{Cname}=course
console.log(Cname)

/**+++++++++++++++++API++++++++++++ */

