let main = document.querySelector("#main");

document.addEventListener("mousemove", function (e) {
  main.style.left = e.clientX + "px";
  main.style.top = e.clientY + "px";
});
