let btnPresionado = false;

document.getElementById("btn").addEventListener("click", function(){
    btnPresionado = true;
});

document.getElementById("div").addEventListener("click", function(){
    if (btnPresionado) {
        alert("Hola!");
        btnPresionado = false;
    }else {
        alert("Hola! Soy el div");
    }
});