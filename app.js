var hamburger = document.querySelector(".hamburger");
var unorderedlist = document.querySelector("#nav-ul");
var close = document.querySelector(".close")

hamburger.addEventListener("click", function() {
    hamburger.style.display = "none"
    close.style.display = "block"
    unorderedlist.style.transform = "translateX(0)"
})

close.addEventListener("click", function() {
    close.style.display = "none"
    hamburger.style.display = "block"
    unorderedlist.style.transform = "translateX(100%)"
})