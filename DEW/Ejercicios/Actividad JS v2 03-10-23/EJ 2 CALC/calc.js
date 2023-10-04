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
    } else {
      const result = eval(operation);
      document.getElementById('display').value = result;
    }
      
  } catch (error) {
      document.getElementById('display').value = 'Error';
  }
}
let expression = "2+5";
const partes = expression.split('+');



