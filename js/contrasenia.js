const send = document.getElementById('send'); // Busca el elemento con el ID "send"
const falso = document.getElementById('falso'); // Busca el elemento con el ID "falso"

send.addEventListener('click', () => {
    falso.classList.add('show'); // Agrega la clase "show" al elemento con el ID "falso"
});
