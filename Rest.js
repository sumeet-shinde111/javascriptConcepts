//Rest parameter is used when we need to pass n number of parameters to a function.
//rest parameters should be passed as a 

function test(a,b,...args){
   
    console.log(a);
    console.log(b);
    console.log(args)
}
test(1,2,3,4,5,6,7,8,9);

