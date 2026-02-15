let main = document.querySelector("#main");
let nav = document.querySelector("#nav");
let btn = document.querySelector("#btn");

// Parent listener
main.addEventListener("click", function() {
    alert("Main clicked!");
});

// Child listener
nav.addEventListener("click", function() {
    alert("Nav clicked!");
});

// Inner child listener
btn.addEventListener("click", function(event) {
    alert("Button clicked!");
    event.stopPropagation(); 
});
