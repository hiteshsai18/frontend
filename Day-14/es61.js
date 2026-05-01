//reassigning

let a=10;
a=20;
console.log(a);

//redeclaration

let b=2;
//let b=3;
console.log(b);

//hoisting

// console.log(c);

let c=10;

console.log(c);

//with const - reassigning, redeclaration and hoisting does not work.

//Arrow functions

const multiply=(a,b)=>{console.log(a*b)};
multiply(10,20)

const display=(uname,loc)=>{console.log(uname+" in "+loc)}
display("Hitesh","Vijayawada")

//map

let arr=[10,20,30,40,50];
let lat=arr.map((value,index)=>{
    return value*2;
})
console.log(arr)
console.log(lat)

//filter

let fil=arr.filter((items)=>{
    return items%3==0;
})
console.log(fil)

//map and filter on object

let a={"Apple 15 pro":68000,"Samsung S24 pro":170000,"Vivo X200": 70000}