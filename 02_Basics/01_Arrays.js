//arrays

// const myArr= [1,"hello",3,4,5];
// console.log(myArr[1]);

// //Array Methods

// myArr.push(6);
// console.log(myArr);

// myArr.unshift(0);
// console.log(myArr);

// console.log(myArr.includes(2));

const myArr1 =[1,2,3,4,5,6,7];

// const newArr= myArr1.join();

// console.log(newArr);

// console.log("a" ,myArr1)

// console.log("A", myArr1);
// const mn1=myArr1.slice(1,3);

// console.log(mn1);

// console.log("B" , myArr1);
// const mn2= myArr1.splice(1,3);

// console.log(mn2);
// console.log("C", myArr1);



/*++++++++++++++++++++++Part2+++++++++++++++ */

const stringArr1 =["a","b","c","d","e"];

const stringArr2 =["f","g","h","i","j"];

// stringArr1.push(stringArr2);

// console.log(stringArr1);

stringArr1.concat(stringArr2);
// console.log(stringArr1);

// const newArr= stringArr1.concat(stringArr2);
// console.log(newArr);

const All_arr=[...stringArr1, ...stringArr2]
console.log(All_arr);

const newArrEx= [1,2,3,[4,5],6 ,[7,8],9]
const new_Array_real= newArrEx.flat(Infinity);
console.log(new_Array_real);
