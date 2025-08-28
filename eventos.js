document.getElementById("btn").addEventListener("click", function(){
    alert("Hola!");
    event.stopPropagation();
});

document.getElementById("div").addEventListener("click", function(){
    alert("Hola! Soy el div");
});