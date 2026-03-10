let count = 0;
let h2 = document.querySelector("h2");
let btn = document.querySelector("button");

let intv = setInterval(function () {
  count++;
  h2.textContent = count;
}, 1000);

btn.addEventListener("click", () => clearInterval(intv));