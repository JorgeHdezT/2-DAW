function calcularResultado() {
    // Obtener el valor de la nota ingresada
    var num = document.getElementById("textoInput").value;
    let divisores = [];
    let cont = 0;
    for (let i = 0; i <= num; i++){
        if(num % i == 0) {
            divisores.push(i);
        }
    }

    var resultadoDiv = document.getElementById("Resultado");
    
    // Crear una cadena con los divisores y mostrarla en el div
    resultadoDiv.textContent = "Divisores de " + num + ": [" + divisores.join(", ") + "]";
}



function calcularFiboo() {
    let numInput = document.getElementById("fiboLimit");
    let num = parseInt(numInput.value);
    //alert(typeof(num));
    
    if (!isNaN(num)) {
        let a = 0;
        let b = 1;
        let fiboSeq = [a, b]; // Inicializamos con los primeros dos números

        while (b <= num) {
            let suma = a + b;
            if (suma <= num) {
                fiboSeq.push(suma);
            }
            a = b;
            b = suma;
        }

        var resultadoDiv = document.getElementById("Resultado2");
        resultadoDiv.textContent = "Sucesión hasta " + num + ": [" + fiboSeq.join(", ") + "]";
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}


