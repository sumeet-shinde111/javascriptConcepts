/*
promise in js is combination of producing code + consuming code.
promise object has three states 
    1. pending : gives undefined if printed.
    2. fulfilled: gives value if successfull
    3. rejected: gives error if rejected

*/

// function display(someValue){
// document.write(someValue);
// }

// let myPromise = new Promise(function(resolve,reject){
//     let val = "sumeet";
//     if(val == "sumeet"){
//         resolve("yes... corect value "+val);

//     }else{
//         reject("no... wrong value "+val);

//     }
// });

// myPromise.then(
//     function(value){
//         display(value);
//     },
//     function(error){
//         display(error);
//     }
// )

function show(val) {
  document.write(val);
}

let mypromise = new Promise((resolve, err) => {
  let no = 12;
  if (no % 2 == 0) {
    resolve(`<h2>No <i>${no}</i> is Even</h2>`);
  } else {
    err(`<h2> No is not an Even no</h2>`);
  }
});

mypromise.then((val) => {
    show(val);
  }).catch((err) => {
    show(err);
  });
  



  
//we can also use finally in promises
// .finally(()=>{
//     show("its finally")
// })
