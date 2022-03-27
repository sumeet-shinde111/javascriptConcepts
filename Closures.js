/*
1) closure is a combination of a function with its lexical environment.

2) inner/child function in closure is always returned.

3) when we call the outer/parent function we capture it in a variable.
   e.g : let z = parent();

4) The variable has reference to the inner/child function.
   i.e When z is printed it will print the whole inner/child function.

5) Then we call the varible like a function. e.g: z();

6) When inner/child function is returned it returns inner function with it 
lexical environment. Because of that even if outer/parent function gets vanished
 from callstack value of x gets printed in inner/child function.

*/

function parent(){
    let x = 200;
    function child(){
        console.log(x);
    }
    return child;
}
let z = parent();
// console.log(z)       logs whole child function.
z();