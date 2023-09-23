// Función para inspeccionar el personaje seleccionado
function inspeccionarPersonaje() {
    const seleccion = document.getElementById("personaje").value;
    let personaje;

    switch (seleccion) {
        case "merlin":
            personaje = merlin;
            break;
        case "rufus":
            personaje = rufus;
            break;
        case "antares":
            personaje = antares;
            break;
        case "hache":
            personaje = hache;
            break;
        default:
            console.error("Personaje no válido");
            return;
    }

    const informacionDiv = document.getElementById("informacionPersonaje");
    informacionDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${personaje.nombre}</p>
        <p><strong>Raza:</strong> ${personaje.getRaza()}</p>
        <p><strong>Nivel de Experiencia:</strong> ${personaje.nivel_experiencia}</p>
        <p><strong>Vida:</strong> ${personaje.vida}</p>
        <p><strong>Vida Máxima:</strong> ${personaje.vida_max}</p>
        <p><strong>Ataque:</strong> ${personaje.ataque}</p>
        <p><strong>Defensa:</strong> ${personaje.defensa}</p>
        <p><strong>Distancia Mínima:</strong> ${personaje.distancia_min}</p>
        <p><strong>Distancia Máxima:</strong> ${personaje.distancia_max}</p>
        <p><strong>Velocidad:</strong> ${personaje.velocidad}</p>
    `;
}
