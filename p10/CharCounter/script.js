let inp = document.querySelector("input");
let spn = document.querySelector("span");

inp.addEventListener("input", function(){
   let left = 20 - inp.value.length;
   spn.textContent = left;
   if(left < 0){
    spn.style.color = "red";
   } else {
    spn.style.color = "white";
   }
});
