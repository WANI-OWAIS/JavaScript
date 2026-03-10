let counter = 0;
let count = document.querySelector("#count");

setInterval(function () {
  counter++;
  count.innerText = counter;
}, 1000);