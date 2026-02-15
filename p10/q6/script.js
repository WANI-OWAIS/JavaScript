let out = document.querySelector("#outer");
let mid = document.querySelector("#middle");
let inr = document.querySelector("#inner");

out.addEventListener("click", function(){
    alert("Outer captured the event");
}, true);

mid.addEventListener("click", function(){
    alert("Middle captured the event");
}, true);

inr.addEventListener("click", function(){
    alert("Inner captured the event");
}, true);
