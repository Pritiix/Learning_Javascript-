// let a=1000
// if(true){
// let a=2;
// const b=5;
// var c=6;
// console.log("INNER:",a)
// }
// console.log(a) //not executed
// console.log(b)//not
// console.log(c)//but got executed even after scope

function one(){
    const name="priti"
    function two(){
    const email="abc@gmail.com"
    console.log(name)
    }
    // console.log(email)
  two()

}
one()
