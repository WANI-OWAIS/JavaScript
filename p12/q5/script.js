let countDown = 10;
let h2 = document.querySelector("h2");

let timer = setInterval(function () {

    h2.textContent = countDown;
    countDown--;

    if(countDown < 0){
        clearInterval(timer);
    }

},1000);