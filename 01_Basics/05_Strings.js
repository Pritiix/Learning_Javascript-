const name= "Priti"
const repoCount=50
//console.log(name + repoCount);

// console.log(`my name is ${name} and repoCount is${repoCount}`);

const gameName=new String("abcdefGd");
// console.log(gameName[2]);
// console.log(gameName.toUpperCase());

const newString=gameName.substring(2,5);
// console.log(newString);

const anotherString=gameName.slice(-5,-2);
console.log(anotherString);

const newString2="    Priti    ";
console.log(newString2.trim());

const url="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCDQ";

console.log(url.replace("youtube","vimeo"));
console.log(url.includes("youtube"));