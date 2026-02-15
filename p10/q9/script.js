let btn = document.querySelector("#btn");

function handleClick() {
    alert("Button clicked! This will only happen once.");
    btn.removeEventListener("click", handleClick); // remove after first click
}

btn.addEventListener("click", handleClick);



