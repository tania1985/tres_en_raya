var turno = 'X';
var celdas = document.querySelectorAll('.celda');
var juegoTerminado = false;  // Bandera para controlar si el juego ha terminado
var movimientosRealizados = 0;  // Contador para llevar el registro de los movimientos

celdas.forEach(function(celda) {
    celda.onclick = function() {
        if (this.innerHTML == '' && !juegoTerminado) {  // Solo se permite hacer clic si la celda está vacía y el juego no ha terminado
            this.innerHTML = turno;  // Coloca la marca del jugador en la celda
            movimientosRealizados++;  // Aumenta el contador de movimientos

            if (comprobarGanador()) {  // Llama a la función comprobarGanador para ver si alguien ha ganado
                alert('¡Ganador: ' + turno + '!');  // Muestra un mensaje con el ganador (X o O)
                juegoTerminado = true;  // Finaliza el juego
            } else if (movimientosRealizados === 9) {  // Si se han realizado 9 movimientos (todas las celdas están llenas)
                alert('¡Empate!');  // Muestra un mensaje de empate
                juegoTerminado = true;  // Finaliza el juego
            }

            // Cambia el turno al otro jugador (si es 'X' pasa a 'O' y viceversa)
            turno = (turno == 'X') ? 'O' : 'X';
        }
    }
});

function comprobarGanador() {
    // Verifica las combinaciones horizontales
    for (let i = 0; i < 3; i++) {
        if (celdas[i * 3].innerHTML != '' && 
            celdas[i * 3].innerHTML == celdas[i * 3 + 1].innerHTML && 
            celdas[i * 3].innerHTML == celdas[i * 3 + 2].innerHTML) {
            return true;
        }
    }

    // Verifica las combinaciones verticales
    for (let i = 0; i < 3; i++) {
        if (celdas[i].innerHTML != '' && 
            celdas[i].innerHTML == celdas[i + 3].innerHTML && 
            celdas[i].innerHTML == celdas[i + 6].innerHTML) {
            return true;
        }
    }

    // Verifica las diagonales
    if (celdas[0].innerHTML != '' && 
        celdas[0].innerHTML == celdas[4].innerHTML && 
        celdas[0].innerHTML == celdas[8].innerHTML) {
        return true;
    }

    if (celdas[2].innerHTML != '' && 
        celdas[2].innerHTML == celdas[4].innerHTML && 
        celdas[2].innerHTML == celdas[6].innerHTML) {
        return true;
    }

    return false;  // Si no hay ganador, retorna false
}
