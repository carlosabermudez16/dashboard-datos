
const boton = document.getElementById("boton_suma");
let respuesta = document.getElementById("respuesta");

boton.addEventListener("click",()=>{
    let valor1 = parseFloat(document.getElementById("n1").value);
    let valor2 = parseFloat(document.getElementById("n2").value);
    
    let resultado = valor1 + valor2;
    
    respuesta.innerHTML = `La suma es : ${resultado}`;
});