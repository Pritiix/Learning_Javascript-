//for of
const myarr=[1,12,3,4,5,6]
for (const num of myarr) {
    // console.log(num)
}

const greeting="Hello World!"
for (const greet of greeting) {
    // console.log(`Each char of ${greet}`)
}

const map=new Map()
map.set('In',"India")
map.set('Fr',"France")

console.log(map)
for (const [key,value] of map) {
    console.log(key,":-", value)
}