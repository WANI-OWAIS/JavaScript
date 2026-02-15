let btn = document.querySelector("button");

btn.addEventListener("click", function(event){
  console.log(event.type);
  console.log(event.target);
})