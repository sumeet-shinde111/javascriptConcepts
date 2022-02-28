/*
1) In hoisting declaration goes on the top of the scope.
2) It gives advantage like before code execution memory space is allocated.
3) var is placed in global scope.
4) let,const are placed in special scope called as script.
5) The time from memory is assigned to variable till it gets its actual value
   is called temporal dead zone.
 */
var a =10;
console.log(a);

let b =20;
console.log(b);
const c =30;
console.log(c);

  