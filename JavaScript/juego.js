var turno = 'X';
var celdas = document.querySelectorAll('.celda');
var movimientos = 0;
var juegoTerminado = false; // Variable para controlar si el juego ha terminado

celdas.forEach(function(celda) {
    celda.onclick = function() {
        if (!juegoTerminado && this.innerHTML == '') {
            this.innerHTML = turno;
            movimientos++;
            this.classList.add(turno); // Agregar clase para colores
            comprobarGanador();
            turno = (turno == 'X') ? 'O' : 'X';
        }
    }
});

function comprobarGanador() {
    var combinaciones = [
        [0, 1, 2], // Fila 1
        [3, 4, 5], // Fila 2
        [6, 7, 8], // Fila 3
        [0, 3, 6], // Columna 1
        [1, 4, 7], // Columna 2
        [2, 5, 8], // Columna 3
        [0, 4, 8], // Diagonal 1
        [2, 4, 6], // Diagonal 2
    ];

    for (var i = 0; i < combinaciones.length; i++) {
        var [a, b, c] = combinaciones[i];
        if (celdas[a].innerHTML !== '' && celdas[a].innerHTML === celdas[b].innerHTML && celdas[a].innerHTML === celdas[c].innerHTML) {
            // Ganador encontrado, mostrar mensaje después de 2 segundos
            juegoTerminado = true; // Finalizamos el juego
            setTimeout(function() {
                alert('Ganador: ' + celdas[a].innerHTML);
                resetJuego();
            }, 2000);
            return;
        }
    }

    // Verificar si hay empate
    if (movimientos === 9) {
        juegoTerminado = true; // Finalizamos el juego
        setTimeout(function() {
            alert('¡Empate!');
            resetJuego();
        }, 2000);
    }
}

function resetJuego() {
    // Reiniciar juego
    setTimeout(function() {
        celdas.forEach(function(celda) {
            celda.innerHTML = '';
            celda.classList.remove('X', 'O');
        });
        turno = 'X';
        movimientos = 0;
        juegoTerminado = false; // Reiniciamos el estado del juego
    }, 2000);
}
