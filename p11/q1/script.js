let form = document.querySelector("form");
let inp = document.querySelectorAll("input");

form.addEventListener("submit", function(dets){
  dets.preventDefault();
  
  inp.forEach(function(input) {
    if (input.type !== "submit") {
        console.log(input.value);
    }
});
});
