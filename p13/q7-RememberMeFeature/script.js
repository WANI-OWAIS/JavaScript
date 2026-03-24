let uname = document.querySelector("#username");
let pass = document.querySelector("#password");
let cbox = document.querySelector("#checkbox");
let form = document.querySelector("form");


window.onload = function () {
    let storedValue = localStorage.getItem("username");

    if (storedValue !== null) {
        uname.value = storedValue;
        cbox.checked = true;
    }
};


form.addEventListener("submit", function (e) {
    e.preventDefault();

    let username = uname.value;

    if (cbox.checked) {
        localStorage.setItem("username", username);
    } else {
        localStorage.removeItem("username");
    }

    alert("Login Successful");
});