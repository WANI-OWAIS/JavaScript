let form = document.querySelector("#myForm");
let password = document.querySelector("#password");
let passError = document.querySelector("#passwordError");

form.addEventListener("submit", function(e){

    if(password.value.trim().length < 8){
        e.preventDefault();
        passError.textContent = "Password must be at least 8 characters";
    } else {
        passError.textContent = "";
    }

});