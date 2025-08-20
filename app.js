
let amigos = [];

function limpiarInput(elemento) {
   return document.querySelector(elemento).value = '';
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    limpiarInput('#amigo');
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];
    amigos.splice(indiceAleatorio, 1);

    let listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = ""; 
    let li = document.createElement('li');
    li.textContent = amigoSorteado;
    listaResultado.appendChild(li);
}