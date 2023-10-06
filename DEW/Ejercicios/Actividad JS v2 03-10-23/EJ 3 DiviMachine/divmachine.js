function calcular() {
    let input = document.getElementById("numInput").value;

    // Reemplazar comas por puntos
    let numeros = input.split(" ").map(numero => numero.replace(",", "."));

    let resultado = parseFloat(numeros[0]);

    if (numeros.includes("0")) {
        document.getElementById("resultado").value = "Al haber un 0: Error.";
    } else {
        for (let i = 1; i < numeros.length; i++) {
            let numero = parseFloat(numeros[i]);
            if (!isNaN(numero)) {
                resultado /= numero;
            }
        }

        document.getElementById("resultado").value = resultado;
    }
}
