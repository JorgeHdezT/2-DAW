function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
      let operation = document.getElementById('display').value;
    
      if ((operation.split('^')).length == 2) {
        const partes = operation.split('^');
        const num1 = parseFloat(partes[0]);
        const num2 = parseFloat(partes[1]);
        const result = num1 ** num2;
        document.getElementById('display').value = result;
      }
      else if (operation.split('%').length == 2) {
        const partes = operation.split('%');
        const num1 = parseFloat(partes[0]);
        const num2 = parseFloat(partes[1]);
        const result = ((num1*num2)/100);
        document.getElementById('display').value = result;
      }
      else {
        const result = eval(operation);
        document.getElementById('display').value = result;
      }
      
  } catch (error) {
      document.getElementById('display').value = 'Error';
  }
}

function generateRandom() {
  // Genera un número aleatorio entre 0 y 1
const numeroAleatorio = Math.random();

// Escala el número aleatorio al rango deseado (0 a 100)
const numeroEntre0y100 = Math.floor(numeroAleatorio * 101);
appendToDisplay(numeroEntre0y100);

}

function calcSin() {
  Math.sin();
}



