let btn = document.querySelector("#btn");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    inp.click();
});

inp.addEventListener("change", function(e){
  const file = e.target.files[0];
  if(file) {
    btn.textContent = file.name;
  }
});