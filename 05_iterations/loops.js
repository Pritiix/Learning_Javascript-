//for
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element==5){
//         console.log("5 is best number")
//     }
//     console.log(element)
    
// }
for (let i = 1; i <=10; i++) {
//    console.log(`outerloop is ${i}`)
   for (let j = 1; j <=10; j++) {
    // console.log(i + "*"+ j + "="+ i*j)
    
   }
    
}

let myArray =["superman", "catwomen","spiderman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
    
}
//keywords
//break and continue

for(i=0;i<=20;i++){
    if(i==5){
        console.log("Detected 5 ")
        break
    }
    console.log(`value is ${i}`)
}