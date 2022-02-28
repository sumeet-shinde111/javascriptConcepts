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
// console.log(consumePromise())

//---------------------------------------------------------------------
//we can also consume promises in below way
// let data = consumePromise().then((d)=>{
//     display(d);
// }).catch((err)=>{
//     alert("hi")
   
// })   




