let count = 10;
let h2 = document.querySelector("h2");

function timer() {
    if(count >= 0 ){
        h2.textContent = count;
        count--;

        setTimeout(timer, 1000);
    }
}

timer();