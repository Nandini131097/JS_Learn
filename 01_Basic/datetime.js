// --------------------------------------Data and Time functions in Javascript---------------------
let myDate = new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toString());

let currentTime = Date.now();
console.log(currentTime.toLocaleString());