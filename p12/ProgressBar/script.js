let count = 0;
let progress = document.querySelector(".progress-bar");
let percent = document.querySelector(".percent");
let h2 = document.querySelector("h2");

let intv = setInterval(function () {
    if(count < 100){
        count++;
        percent.textContent = `${count}%`
        progress.style.width = `${count}%`;
    } else{
          h2.textContent = "Download Completed!";
          clearInterval(intv);
    }

},10000/100);