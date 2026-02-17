let para = document.querySelector("p");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    para.textContent = "Updated paragraph text";
});