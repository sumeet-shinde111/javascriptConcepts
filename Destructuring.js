const details = {
    name:"sumeet",
    rollno:2,
    place:"pune",
    state:"maharashtra",
    country:"india"
}
//old way
let name1= details.name;
let place2 = details.place;
console.log(name1, place2);
console.log("--------------------------------")

//Object Destructuring (new way)

// const {name ,place } = details;
// console.log(name, lastname );

//-----------------------------------------------------------------

// key which is not in obj if printed it will throw undefined.

//Assign Default Values in this case.

const {name,rollno,lastname = "shinde"} = details;

console.log(lastname);
//------------------------------------------------------------

//Assigning Alias to keys

const {country:RESIDENT} = details;
console.log(RESIDENT);

//----------------------------------------------------

//swapping values old way
let a =1;
let b = 2;
let temp;

temp = a;
a =b;
b = temp;
console.log(a,b);   

//swapping values with destrucuring
let x =3;
let y =4;
[x,y]= [y,x];
console.log(x,y)