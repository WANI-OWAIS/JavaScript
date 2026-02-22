let form = document.querySelector("#myForm");
let inp = document.querySelector("#name");
let error = document.querySelector("#error");


form.addEventListener("submit", function(dets){
    dets.preventDefault();
    
    if(inp.value.trim() == ""){
        error.textContent = "This field is required";
    }else{
        error.textContent = "";
        console.log(inp.value);
    }
})