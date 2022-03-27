function a(){
let b =1;
    
    function c(){
        console.log(b);
    }
    c();
}
a();

//Lexical environment for c -> a
//Lexical environment for  a -> global
// lexical means hierarchy

//scope chaining is nothing finding a variable in lexical environment
/*
e.g: func c checks b which is not in the function scope of b 
so it will check its lexical parent for the variable .ie a 
b is present in a() so it will log the value.
Note : if b would have not been present in a's scope it would have checked in lexical scope of a i.e global
*/

