let listaDeAmigos = [];

function agregarAmigo (){
    nombre = (document.getElementById('nombreAmigo').value);

    if (nombre){                                //in JS an empty string means false, this is why this works
        listaDeAmigos.push(nombre);
        limpiarCaja();
        //console.log(listaDeAmigos);
    } else {
        alert ('Da un nombre valido');
    }

    return;
}

function limpiarCaja (){
    document.getElementById('nombreAmigo').value = ""
}