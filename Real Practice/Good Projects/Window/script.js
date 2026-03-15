document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

let windowStart = document.querySelector(".window-start")
let windowStartUi = document.querySelector(".window-start-ui")

windowStart.addEventListener("click", function(){
    windowStartUi.classList.toggle("show")
})