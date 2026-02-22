let form = document.querySelector("#myForm");
let normalBtn = document.querySelector("#normalBtn");

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("Form Submit Event Triggered");
});

normalBtn.addEventListener("click", function(){
    console.log("Button Click Event Triggered");
});
