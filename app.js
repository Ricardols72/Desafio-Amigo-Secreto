let listaDeAmigos = []; // Lista de amigos do "Amigo Secreto"

// Função para adicionar um novo amigo à lista
function adicionarAmigo() {
    const campoNomeAmigo = document.getElementById('amigo');
    const nomeDoAmigo = campoNomeAmigo.value.trim(); // Remove espaços extras no início e no fim

    // Verifica se o nome está vazio
    if (nomeDoAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return; // Não adiciona se o nome estiver vazio
    }
    
    // Verifica se o nome já foi adicionado
    if (listaDeAmigos.includes(nomeDoAmigo)) {
        alert("Este nome já foi adicionado. Tente outro.");
        return; // Não adiciona o nome duplicado
    }

    // Adiciona o nome à lista de amigos
    listaDeAmigos.push(nomeDoAmigo);
    campoNomeAmigo.value = ""; // Limpa o campo de entrada de texto
    atualizarListaDeAmigos(); // Atualiza a exibição da lista de amigos
}

// Função para atualizar a exibição da lista de amigos na tela
function atualizarListaDeAmigos() {
    const areaDeLista = document.getElementById('listaAmigos');
    areaDeLista.innerHTML = ""; // Limpa a lista atual

    // Exibe os amigos na tela
    listaDeAmigos.forEach(nome => {
        const itemLista = document.createElement('li');
        itemLista.textContent = nome;
        areaDeLista.appendChild(itemLista);
    });
}

// Função para realizar o sorteio do amigo secreto para todos
function sortearAmigo() {
    // Verifica se há pelo menos 2 amigos na lista para fazer o sorteio
    if (listaDeAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    // Cria uma cópia da lista de amigos para embaralhar
    let listaEmbaralhada = [...listaDeAmigos];
    let resultadosSorteio = [];

    // Realiza o sorteio garantindo que ninguém tire o próprio nome
    for (let i = 0; i < listaEmbaralhada.length; i++) {
        let amigoSorteado;
        
        // Garante que a pessoa não sorteie a si mesma
        do {
            const indiceAleatorio = Math.floor(Math.random() * listaEmbaralhada.length);
            amigoSorteado = listaEmbaralhada.splice(indiceAleatorio, 1)[0]; // Remove o amigo sorteado da lista
        } while (amigoSorteado === listaDeAmigos[i]);

        resultadosSorteio.push(`${listaDeAmigos[i]} vai presentear: ${amigoSorteado}`);
    }

    // Exibe os resultados do sorteio
    const areaDeResultado = document.getElementById('resultado');
    areaDeResultado.innerHTML = ""; // Limpa o resultado anterior
    resultadosSorteio.forEach(resultado => {
        const itemResultado = document.createElement('li');
        itemResultado.textContent = resultado;
        areaDeResultado.appendChild(itemResultado);
    });
}
