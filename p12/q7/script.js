let timer = 0;
let h2 = document.querySelector("h2");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");

let intv;

start.addEventListener("click", function () {
  intv = setInterval(function () {
    h2.textContent = timer;
    timer++;
  }, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(intv);
});