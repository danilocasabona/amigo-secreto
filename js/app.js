let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == '') {
        alert('Preencha o campo nome!');
        return;
    }
   
    let lista = document.getElementById('lista-amigos');
    // gravar no array amigos com letras maiusculas.
    amigo.value = amigo.value.toUpperCase();
    if (amigos.includes(amigo.value)) {
        alert('Amigo já cadastrado!');
        amigo.value = '';
        return;
    }
    amigos.push(amigo.value);
    // Mostrar na tela o nome do amigo com as primeiras letras maiusculas.
    lista.innerHTML += `<li>${amigo.value}</li>`;
    amigo.value = '';
}
// Funcao para excluir amigo.
function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

// Funcao para atualizar sorteio.
function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

// Funcao para embaralhar uma lista.
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

// Funcao para sortear aleatoriamente um amigo da lista de amigos.
function sortear() {
    if (amigos.length < 4) {
        alert('O número mínimo para o sorteio é 4 amigos!');
        return;
    }
    embaralhar(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            listaSorteio.innerHTML += amigos[i] + '-->' + amigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML += amigos[i] + '-->' + amigos[i+1] + '<br>';
        }
    }
}
// Funcao para atualizar a lista de amigos.
function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}

// Funcao para reiniciar a pagina.
function reiniciar() {
    location.reload();
}

// Criar uma funcionalidade no Projeto Amigo Secreto que permita ao usuário clicar em um amigo na lista e removê-lo. Atualizar a visualização da lista após a remoção.