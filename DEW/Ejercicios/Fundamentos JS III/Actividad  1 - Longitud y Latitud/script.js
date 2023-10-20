// Obtén los elementos HTML que necesitarás
const mostrarDatosBtn = document.getElementById("mostrarDatos");
const abrirGoogleMapsBtn = document.getElementById("abrirGoogleMaps");
const coordenadasDiv = document.getElementById("coordenadas");
const latitudSpan = document.getElementById("latitud");
const longitudSpan = document.getElementById("longitud");

// Variable para almacenar la latitud y longitud
let latitud = null;
let longitud = null;

// Función para obtener la ubicación del usuario
function obtenerUbicacion() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      latitud = position.coords.latitude;
      longitud = position.coords.longitude;

      // Actualiza el contenido del div de coordenadas
      latitudSpan.textContent = latitud;
      longitudSpan.textContent = longitud;

      // Muestra el div de coordenadas
      coordenadasDiv.style.display = "block";
      mostrarDatosBtn.style.display = "none";

      // Activa el botón para abrir Google Maps
      abrirGoogleMapsBtn.style.display = "block";
    });
  } else {
    alert("Geolocalización no es soportada por tu navegador.");
  }
}

// Manejar el clic en el botón "Mostrar Datos"
mostrarDatosBtn.addEventListener("click", obtenerUbicacion);

// Manejar el clic en el botón "Abrir Google Maps"
abrirGoogleMapsBtn.addEventListener("click", function () {
  if (latitud !== null && longitud !== null) {
    const url = `https://www.google.com/maps?q=${latitud},${longitud}`;
    window.open(url, "_blank");
  }
});
