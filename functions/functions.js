document.addEventListener('DOMContentLoaded', () => { 

    const fecha = new Date('08/15/2022 0:01 AM');
    const dias = document.querySelector('span#dias');
    const horas = document.querySelector('span#horas');
    const minutos = document.querySelector('span#minutos');
    const segundos = document.querySelector('span#segundos');
    const milisegundosPorSegundo = 1000;
    const milisegundosPorMinuto = milisegundosPorSegundo * 60;
    const milisegundosPorHora= milisegundosPorMinuto * 60;
    const milisegundosPorDia = milisegundosPorHora * 24

    function cuentaRegresiva() {
        const hoy = new Date()
        const fechaImagenes = fecha - hoy;
        const diasRestantes = Math.floor(fechaImagenes / milisegundosPorDia);
        const horasRestantes = Math.floor((fechaImagenes % milisegundosPorDia) / milisegundosPorHora);
        const minutosRestantes = Math.floor((fechaImagenes % milisegundosPorHora) / milisegundosPorMinuto);
        const segundosRestantes = Math.floor((fechaImagenes % milisegundosPorMinuto) / milisegundosPorSegundo);

        dias.textContent = diasRestantes;
        horas.textContent = horasRestantes;
        minutos.textContent = minutosRestantes;
        segundos.textContent = segundosRestantes;
    }
    cuentaRegresiva();
    setInterval(cuentaRegresiva, milisegundosPorSegundo);
});