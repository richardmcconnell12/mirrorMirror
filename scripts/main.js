let input = document.querySelector("#message");
let articleEl1 = document.getElementById("messageBox1");
let articleEl2 = document.getElementById("messageBox2");

input.addEventListener("keyup", function(event) {
    articleEl1.innerHTML = event.target.value
    articleEl2.innerHTML = event.target.value.split("").reverse().join("")
});