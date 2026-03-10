// setTimeout(function(){
//   console.log("Hello!");
// }, 5000);

// setInterval(function () {
//     console.log("Hello!");
// }, 5000);

// let tm = setTimeout(function () {
//  console.log("Hey!");
// }, 3000);

// clearTimeout(tm);

// let tm = setInterval(function () {
//  console.log("Hey!");
// }, 3000);

// clearInterval(tm);

let count = 10;

let interval = setInterval(function () {
    if(count > 0) {
        console.log(count);
         count--;
    }else{
        clearInterval(interval);
    }
}, 1000);