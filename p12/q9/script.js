let h2 = document.querySelector("h2");

setInterval(function () {
    let now = new Date();
    h2.textContent = now.toLocaleTimeString();
}, 1000);