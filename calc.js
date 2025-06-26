let bttn = document.querySelector("button");
let buttons = document.querySelectorAll("button");
let display = document.getElementById("display");

buttons.forEach(function(bttn) {
bttn.addEventListener("click", function() {
if (bttn.id === "answer") return;
if (bttn.id === "C") return;
    display.value += bttn.innerText;
});
});

let C = document.getElementById("C");
C.addEventListener("click", function(){
    display.value = "";
})

let answer = document.getElementById("answer");
answer.addEventListener("click", function(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "error";
    }
});
