let parent = document.querySelector("#parent");

parent.addEventListener("click", function(event) {
    console.log("event.target:", event.target);
    console.log("event.currentTarget:", event.currentTarget); 
});




// event.target → tells where the event originated
// event.currentTarget → tells which element is handling the event