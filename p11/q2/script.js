let form = document.querySelector("form");
let inps = document.querySelectorAll("input");

form.addEventListener("submit", function(dets){
   dets.preventDefault();

let h3 = document.createElement("h3");
 h3.textContent = "Submitted Data :"
 document.body.appendChild(h3);

inps.forEach(function(input){
let p = document.createElement("p");
p.textContent = input.value;
document.body.appendChild(p); 
})

});