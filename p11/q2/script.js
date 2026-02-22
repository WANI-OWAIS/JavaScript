let form = document.querySelector("form");
let inp = document.querySelectorAll("input");

form.addEventListener("submit", function(dets){
    dets.preventDefault();
     
    let h3 = document.createElement("h3");
    h3.textContent = "Submitted Data";
    document.body.appendChild(h3);

    inp.forEach(function(input){
        if(input.type !== "submit"){
            let p = document.createElement("p");
            p.textContent = input.value;
            document.body.appendChild(p);
        }
    });
});