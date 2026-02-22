let form = document.querySelector("#myForm");
let email = document.querySelector("#email");
let emailError = document.querySelector("#emailError");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if(emailRegex.test(email.value.trim())){
        emailError.textContent = "";
        console.log("Valid Email");
    } else {
        emailError.textContent = "Invalid Email";
    }
});