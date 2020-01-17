let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let i = 0;

boton.addEventListener("click", function(){
    if(i==0){
        document.getElementById("slider").style.visibility="hidden";
        enlaces.className = ("enlaces dos")
        i = 1;
    }else{
        document.getElementById("slider").style.visibility="visible";
        enlaces.classList.remove("dos")
        enlaces.className = ("enlaces uno")
        i = 0;
    }
})