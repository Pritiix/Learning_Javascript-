let myDate =new Date();
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());

let mybirthDate = new Date("2005-02-25");
// console.log(mybirthDate.toDateString());

let mytimeStamp = Date.now();
console.log(Math.floor(Date.now())/1000);

let newDate= new Date();
 console.log(newDate.toLocaleString('default',{
     weekday:'long',
 }
   

 ))