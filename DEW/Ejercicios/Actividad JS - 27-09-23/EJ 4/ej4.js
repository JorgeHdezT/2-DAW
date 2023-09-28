function calcularResultado() {
    // Obtener el valor de la nota ingresada
    var nota = parseFloat(document.getElementById("notaInput").value);

    // Comprobar en qué rango se encuentra la nota y mostrar el resultado correspondiente
    var resultado = "";
    if (nota >= 0 && nota < 5) {
        resultado = "Suspenso";
    } else if (nota >= 5 && nota < 6) {
        resultado = "Suficiente";
    } else if (nota >= 6 && nota < 7) {
        resultado = "Bien";
    } else if (nota >= 7 && nota < 8) {
        resultado = "Notable";
    } else if (nota >= 8 && nota < 9) {
        resultado = "Notable ++";
    } else if (nota >= 9 && nota < 10) {
        resultado = "Sobresaliente";
    } else if (nota == 10) {
        resultado = "Excelente";
    } else {
        resultado = "Nota fuera de rango";
    }

    // Mostrar el resultado en el elemento con id "Resultado"

    var resultadoElement = document.getElementById("Resultado");
    document.getElementById("Resultado").textContent = "Resultado: " + resultado;

    resultadoElement.textContent = resultado;
    // Aplicar colores según el resultado
    switch (resultado) {
        case "Suspenso":
            resultadoElement.style.color = "red";
            break;
        case "Suficiente":
            resultadoElement.style.color = "gray";
            break;
        case "Bien":
            resultadoElement.style.color = "green";
            break;
        case "Notable":
            resultadoElement.style.color = "yellow";
            break;
        case "Notable ++":
            resultadoElement.style.color = "orange";
            break;
        case "Sobresaliente":
            resultadoElement.style.color = "lightblue";
            break;
        case "Excelente":
            resultadoElement.style.color = "blue";
            break;
        default:
            resultadoElement.style.color = "black"; // Cambia el color a negro si es fuera de rango
    }
    
}