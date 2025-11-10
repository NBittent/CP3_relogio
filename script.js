let hora = document.getElementById('relogio');

function atualizaRelogio() {
    let data = new Date();
    let horas = String(data.getHours()).padStart(2, '0');
    let minutos = String(data.getMinutes()).padStart(2, '0');
    let segundos = String(data.getSeconds()).padStart(2, '0');

    hora.textContent = `${horas}:${minutos}:${segundos}`;
}

atualizaRelogio();

setInterval(atualizaRelogio, 1000);

