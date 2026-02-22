let form = document.querySelector("#myForm");
let email = document.querySelector("#email");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if(emailRegex.test(email.value.trim())){
        email.classList.add("success");
        email.classList.remove("error");
        console.log("Valid");
    } else {
        email.classList.add("error");
        email.classList.remove("success");
        console.log("Invalid");
    }
});