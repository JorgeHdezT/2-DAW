function calcularResultado() {
    // Obtener el valor de la nota ingresada
    var texto = document.getElementById("textoInput").value;

   let contadorA = texto.split(/[aA]/).length -1;
   let contadorB = texto.split(/[oO]/).length -1;

    alert("Hay " + contadorA + " veces la letra 'a/A' \nHay " + contadorB + " veces la letra 'o/O'" );
}

