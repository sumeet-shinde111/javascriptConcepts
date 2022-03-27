/*
promise in js is combination of producing code + consuming code.
promise object has three states 
    1. pending : gives undefined if printed.
    2. fulfilled: gives value if successfull
    3. rejected: gives error if rejected

E.g x decided to call y at 10am.
    1)So x made a promise he will call y at 10am.
    2)from the time promise made by x till its 10am promise will be 
      in pending state.
    3) If x call y at 10am promise will be in successfull state i.e promise fulfilled  
       will use resolve() to capture result.
    4) If x does not call y at 10am promise will be in rejected state. 
       i.e promise rejected will use reject to capture result. 
    5) So to check status of promise state we consume promise.
    6) if it is fulfilled capture it in .then()
    7) if it is rejected capture it in catch(err).

*/

let mypromise = new Promise((resolve, err) => {
  let no = 12;
  if (no % 2 == 0) {
    resolve(`<h2>No <i>${no}</i> is an Even number</h2>`);
  } else {
    err(`<h2> No <i>${no}</i> is not an Even number</h2>`);
  }
});

mypromise.then((val) => {
    show(val);
  }).catch((err) => {
    show(err);
  });
  
  function show(val) {
    document.write(val);
  }

//we can also use finally in promises
// .finally(()=>{
//     show("its finally")
// })
