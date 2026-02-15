let parent = document.querySelector("#parent");

parent.addEventListener("click", function(event) {
    if (event.target.classList.contains("child")) {
        alert(`Child ${event.target.textContent} clicked`);
    } else{
        alert("Main Clicked")
    }
});
