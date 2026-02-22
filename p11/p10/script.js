let form = document.querySelector("#myForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");

    if(
        name.value.trim() !== "" &&
        email.value.trim() !== "" &&
        password.value.trim() !== ""
    ){
        console.log("Form submitted successfully");

        // Clear form fields
        form.reset();
    }
});