/*
1) Async are keywords in javascript to make a function behave in Asynchronous way and 
   Await is used to wait for a promise result.
2) Async/Await is a better way of consuming promises in js.
3) we use async keyword in front of a function.
4) we use await keyword in front of a the variable which has promise result.
   e.g let promise varible  has result of promise code.
5) Async keyword can have 0 of multiple await function.
6) try catch is used in case of async/await to make it more easy to read and write. 
*/




// find number is even or not

function display(value){
    document.write(value)
};

let promise = new Promise((resolve,reject)=>{
    let no = 32;
    setTimeout(()=>{
        if(no % 2 === 0){
            resolve(`No ${no} is an even no`);
        }else{
            reject(`No ${no} is Odd`);
        }
    },2000);
    
});
/*ideal way to consume promise...

promise.then((val)=>{
    display(val)
}).catch((err)=>{
    display(err)
})*/

//---------------------------------------------------------------------------------

//promises with async/await

//error handling in js is done using try catch.
async function consumePromise(){
    try{
        let promiseData = await  promise;
        console.log(promiseData);
        display(promiseData);
       // return promiseData;
    }catch(err){
        display("Ohh we have got an  "+err);
    }
    
 
}
consumePromise();


//---------------------------------------------------------------------
//we can also consume promises in below way
// let data = consumePromise().then((d)=>{
//     display(d);
// }).catch((err)=>{
//     alert("hi")
   
// })   




