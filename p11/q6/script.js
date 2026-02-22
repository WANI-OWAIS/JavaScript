let form = document.querySelector("#myForm");
let inp = document.querySelector("#username");
let errorMsg = document.querySelector("#errorMsg");

// Show error on submit if empty
form.addEventListener("submit", function(e){
    e.preventDefault();

    if(inp.value.trim() === ""){
        errorMsg.textContent = "This field is required";
    }
});

// Remove error automatically when input becomes valid
inp.addEventListener("input", function(){
    if(inp.value.trim() !== ""){
        errorMsg.textContent = "";
    }
});