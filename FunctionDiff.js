// //arguments object is not supported in arrow function

// /*
// arguments object
// constructor support
// implicit return is supported in arrow fror single line expression
// this depends in invovation in normal func..

// */


// function a(c,d){
// console.log(arguments)
// }
// a(2,2)

// const x = (c,d)=>{
//     console.log(arguments)
// }
// // x(1,3);

// //-----------------------------------------------------
// //comstructor support
// function test(brandName){
//     this.brand = brandName;
// }

// let c = new test("maruti");
// console.log(c);

// let r = (b)=>{
// this.brand = b;
// }
// let arr1 = new r("polo")
// console.log(arr1);


let a = [1,2,3,3,4,1,5];
let b = [];

let x = new Set(a);
console.log(x)
// for(let i = 0;i<a.length;i++){
//     for(let j = 1; j<i; j++){
//         if(a[i] == a[j]){
//             b.push(a[i]);
//         }
//     }
// }
// console.log(b);