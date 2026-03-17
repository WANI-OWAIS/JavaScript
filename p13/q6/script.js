localStorage.setItem("name", "Envy");

window.onload = function () {
    let data = localStorage.getItem("name");
    console.log(data);
}