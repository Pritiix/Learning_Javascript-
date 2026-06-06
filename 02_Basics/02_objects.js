//object literals
const JsUser={
    name:"priti",
    "lastName":"sharma",
    age:25,
    isLoggedIn:true,
    lastLoginDetails:{
        lastLoginTime:"10:00",
        lastLoginIp:"192.168.1.1"
    }
}

console.log(JsUser.name);
console.log(JsUser["lastName"]);
