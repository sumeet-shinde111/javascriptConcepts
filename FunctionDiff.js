//arguments object is not supported in arrow function

function a(c,d){
console.log(arguments)
}
a(2,2)

const x = (c,d)=>{
    console.log(arguments)
}
// x(1,3);

//-----------------------------------------------------

function test(brandName){
    this.brand = brandName;
}

let c = new test("maruti");
console.log(c);

let r = (b)=>{
this.brand = b;
}
let arr1 = new r("polo")
console.log(arr1);