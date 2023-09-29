function calcularResultado() {
    // Obtener el valor de la nota ingresada
    var mes = document.getElementById("mesInput").value;

    // Comprobar en qué rango se encuentra la nota y mostrar el resultado correspondiente
    var resultado = "";
    if (mes == "Enero" || mes == "Febrero" || mes == "Diciembre") {
        resultado = "INVIERNO";
    } else if (mes == "Marzo" || mes == "Abril" || mes == "Mayo") {
        resultado = "PRIMAVERA";
    } else if (mes == "Junio" || mes == "Julio" || mes == "Agosto") {
        resultado = "VERANO";
    } else if (mes == "Septiembre" || mes == "Octubre" || mes == "Noviembre") {
        resultado = "OTOÑO";
    }  else {
        resultado = "Nota fuera de rango";
    }

    // Mostrar el resultado en el elemento con id "Resultado"

    var resultadoElement = document.getElementById("Resultado");
    document.getElementById("Resultado").textContent = "Resultado: " + resultado;

    resultadoElement.textContent = resultado;
    // Aplicar colores según el resultado
    switch (resultado) {
        case "INVIERNO":
            resultadoElement.style.color = "blue";
            break;
        case "PRIMAVERA":
            resultadoElement.style.color = "green";
            break;
        case "VERANO":
            resultadoElement.style.color = "orange";
            break;
        case "OTOÑO":
            resultadoElement.style.color = "brown";
            break;
        default:
            resultadoElement.style.color = "black"; // Cambia el color a negro si es fuera de rango
    }
    
}

