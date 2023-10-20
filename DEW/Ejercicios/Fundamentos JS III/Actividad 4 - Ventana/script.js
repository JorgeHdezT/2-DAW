let ventana;

function abrirVentana() {
    if (!ventana || ventana.closed) {
        ventana = window.open('https://www.google.com', '', 'width=400, height=400');
        ventana.location.href = 'about:blank';
        ventana.moveTo((window.screen.availWidth - 400) / 2, (window.screen.availHeight - 400) / 2);
    } else {
        alert('La ventana ya está abierta');
    }

    
}

function cerrarVentana() {
    if (ventana && !ventana.closed) {
        ventana.close();
    } else {
        alert('No hay ventana que cerrar');
    }
}

function ampliarVentana() {
    if (ventana && !ventana.closed) {
        const nuevaAnchura = ventana.outerWidth + 30;
        const nuevoAltura = ventana.outerHeight + 30;
        if (nuevaAnchura <= window.screen.availWidth && nuevoAltura <= window.screen.availHeight) {
            ventana.resizeTo(nuevaAnchura, nuevoAltura);
        } else {
            alert('No se puede ampliar más la ventana');
        }
    } else {
        alert('No hay ventana abierta');
    }
}

function reducirVentana() {
    if (ventana && !ventana.closed) {
        const nuevaAnchura = ventana.outerWidth - 30;
        const nuevoAltura = ventana.outerHeight - 30;
        if (nuevaAnchura >= 100 && nuevoAltura >= 100) {
            ventana.resizeTo(nuevaAnchura, nuevoAltura);
        } else {
            alert('No se puede reducir más la ventana');
        }
    } else {
        alert('No hay ventana abierta');
    }
}

function moverVentana() {
    if (ventana && !ventana.closed) {
        const posX = parseInt(document.getElementById('posX').value);
        const posY = parseInt(document.getElementById('posY').value);

        if (posX >= 0 && posY >= 0 && (posX + ventana.outerWidth) <= window.screen.availWidth && (posY + ventana.outerHeight) <= window.screen.availHeight) {
            ventana.moveTo(posX, posY);
        } else {
            alert('No se puede mover la ventana a esa posición');
        }
    } else {
        alert('No hay ventana abierta');
    }
}