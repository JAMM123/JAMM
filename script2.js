let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let i = 0;

boton.addEventListener("click", function(){
    if(i==0){
        enlaces.className = ("enlaces dos")
        i = 1;
    }else{
        enlaces.classList.remove("dos")
        enlaces.className = ("enlaces uno")
        i = 0;
    }
})