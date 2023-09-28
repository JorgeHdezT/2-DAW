
let a = 2 > 3+2;
let b = 1 + false + 3.5;
let c = 4 * true + 2;
let d = 5 / 0;
let e = 10>2>0;
let f = 15 < 3 * 10;
let g = 3 * "hola" + 2;
let h = 5 / "hola";

let nombres = ["A", "B", "C", "D", "E", "F", "G", "H"]
let ejemplos = [a, b, c, d, e, f, g, h];
let id = ["resultA", "resultB", "resultC", "resultD", "resultE", "resultF", "resultG", "resultH"];

for (let i = 0; i <= ejemplos.length; i++) {
    document.getElementById(id[i]).textContent = nombres[i] + " | Resultado = " + ejemplos[i] + " | de tipo = " + typeof(ejemplos[i]);
}

