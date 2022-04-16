/* 
Currying in js is a concept where instead of accepting all arguments in one time 
we accept the arguments one by one and return new function every time ;

*/

//normal way 

function add(a,b,c){
    console.log("Normal function addition", a+b+c)
}
add(5,5,5);

//Currying way
//below way is done by closures.
function CurryingAdd(a){
    return function(b){
        return function(c){
            console.log("currying addition", a+b+c);
        }
    }
}
CurryingAdd(4)(4)(4);








function tst(a){
    return function(b){
        return function(C){
            return a+b+C;
        }
    }
}
tst(1)(3)(4);