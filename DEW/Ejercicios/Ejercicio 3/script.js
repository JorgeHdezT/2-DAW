function calcular() {
    // Obtener los valores de los números desde los campos de entrada
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    // Verificar si los valores son números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById('resultado').innerHTML = "Por favor, ingrese números válidos.";
        return;
    }

    // Realizar las operaciones
    const suma = numero1 + numero2;
    const resta = numero1 - numero2;
    const multiplicacion = numero1 * numero2;
    let division;

    // Verificar si el segundo número es cero para evitar una división por cero
    if (numero2 === 0) {
        document.getElementById('resultado').innerHTML = "La división por cero no está permitida.";
    } else {
        division = numero1 / numero2;
    }

    // Mostrar los resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        ${numero1} + ${numero2} = ${suma.toFixed(2)}<br>
        ${numero1} - ${numero2} = ${resta.toFixed(2)}<br>
        ${numero1} x ${numero2} = ${multiplicacion.toFixed(2)}<br>
        ${numero1} / ${numero2} = ${division.toFixed(2)}
    `;

    // Cambiar el estilo para mostrar el div
    resultado.style.display = 'block';
}
