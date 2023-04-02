var red=document.getElementById("red")
var blue=document.getElementById("blue")
var black=document.getElementById("black")

red.addEventListener("click", function() {
document.body.style.backgroundColor = "red"
})

blue.addEventListener("click",function() {
    document.body.style.backgroundColor="blue"
})
black.addEventListener("click",function() {
    document.body.style.backgroundColor="black"
})
