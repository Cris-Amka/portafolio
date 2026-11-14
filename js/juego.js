let partidas = 0;
let ganadas = 0;
let empatadas = 0;
let perdidas = 0;

function juego(jugador) {
    const opciones = ["piedra", "papel", "tijera"];
    const maquina = opciones[Math.floor(Math.random() * opciones.length)];
    let mensaje;

    partidas++;

    if (jugador === maquina) {
        mensaje = "¡Empate!";
        empatadas++;
    } 
    else if (
        (jugador === "piedra" && maquina === "tijera") ||
        (jugador === "papel" && maquina === "piedra") ||
        (jugador === "tijera" && maquina === "papel")
    ) {
        mensaje = "¡Ganaste!";
        ganadas++;
    } 
    else {
        mensaje = "¡Gana la máquina!";
        perdidas++;
    }
    // Función para reiniciar el marcador y limpiar la pantalla
function reiniciar() {
    partidasJugadas = 0;
    ganadas = 0;
    empatadas = 0;
    perdidas = 0;


    document.getElementById("jugada-jugador").textContent = "";
    document.getElementById("jugada-maquina").textContent = "";
    document.getElementById("mensaje").textContent = "";

    
    document.getElementById("marcador").textContent = `Partidas jugadas: ${partidasJugadas}`;
    document.getElementById("ganadas").textContent = `Ganadas: ${ganadas}`;
    document.getElementById("empatadas").textContent = `Empatadas: ${empatadas}`;
    document.getElementById("perdidas").textContent = `Derrotas: ${perdidas}`;
}

    
    document.getElementById("jugada-jugador").textContent = `Tu elección: ${jugador}`;
    document.getElementById("jugada-maquina").textContent = `La máquina eligió: ${maquina}`;
    document.getElementById("mensaje").textContent = mensaje;
    
    document.getElementById("marcador").textContent = `Partidas jugadas: ${partidas}`;
    document.getElementById("ganadas").textContent = `Ganadas: ${ganadas}`;
    document.getElementById("empatadas").textContent = `Empatadas: ${empatadas}`;
    document.getElementById("perdidas").textContent = `Derrotas: ${perdidas}`;
}