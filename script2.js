document.addEventListener('DOMContentLoaded', (event) => {
    const enviarButton = document.getElementById('enviar');
    enviarButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'index.html';
        console.log('Botón enviar presionado');
    });
});