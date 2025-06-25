let bttn = document.querySelector("button");
let buttons = document.querySelectorAll("button");
let display = document.getElementById("display");

buttons.forEach(function(bttn) {
    bttn.addEventListener("click", function() {
        display.value += bttn.innerText; // Add button's text to input field
});
});

let C = document.getElementById("C");
C.addEventListener("click", function(){
    display.value = "";
})


