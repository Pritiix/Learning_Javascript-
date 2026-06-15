// const symbol = Symbol("mysym")
// const myobj={
//     name:"priti",
//     [symbol]:"mysym",
//     price:344,

//     welcomeMessage: function(){
//         console.log(`${this.name} welcome to website`)

//     }
// }

// myobj.welcomeMessage()

/*+++++++++++++++++Arrow Functions++++++++++++++++++++++*/
const addtwo=(num1,num2)=>{
    return num1+num2
}
console.log(addtwo(3,4))

const addthree=(num1,num2,num3)=>num1+num2+num3
console.log(addthree(3,4,5))
