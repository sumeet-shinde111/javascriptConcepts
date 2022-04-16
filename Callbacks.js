//callback is a function passed to another function as an argument;
//callbacks provide a asynchronous interface to do tasks
//js is a synchronous single threaded lang. so it blocks control on long running tasks
//to avoid this problems we can use callbacks which are async in nature

//why use callbacks?
/*The main browser process is a single threaded event loop. 
If you execute a long-running operation within a single-threaded event loop,
the process "blocks". This is bad because the process stops processing other events
while waiting for your operation to complete. 'alert' is one of the few blocking browser
methods: if you call alert('test'), you can no longer click links, perform ajax queries,
or interact with the browser UI. 

// In order to prevent blocking on long-running operations, the XMLHttpRequest provides
 an asynchronous interface. You pass it a callback to run after the operation is complete,
  and while it is processing it cedes control back to the main event loop instead of 
  blocking.

// There's no reason to use a callback unless you want to bind something to an event 
handler, or your operation is potentially blocking and therefore requires an asynchronous
 programming interface.
// //best ex: is seTimeout which takes callback function and waits for some amount of time
// */
setTimeout(function () {
  console.log("timer function");
}, 5000);

function x(callback) {
  console.log("x");
  callback();
}
x(function y() {
  console.log("Y");
});

//-------------------------------------------------------------------

function displayResult(res) {
  console.log(res);
}

function calculation(no1, no2, callback) {
  let res = no1 + no2;
  callback("additon is " + res);
}
calculation(100, 30, displayResult);


