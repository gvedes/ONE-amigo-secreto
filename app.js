//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

var listaAmigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    /*
    Capturar o valor do campo de entrada: Utilize document.getElementById 
    ou document.querySelector para obter o texto inserido pelo usuário.
    */
    let amigo = document.querySelector('#amigo').value.trim();
    if (listaAmigos.includes(amigo)) {
        alert(`O nome "${amigo}" já está na lista!`);
        return;
    }

    /*
    Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
    Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."

    Atualizar o array de amigos: Se o valor for válido,
    adicione-o ao array que armazena os nomes dos amigos usando o método .push().

    Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
    */
    if (amigo !== "") {
        listaAmigos.push(amigo);
        document.querySelector('#amigo').value = "";
        atualizarListaAmigos();

    } else {
        alert("Por favor, insira um nome.");
    }
}

/* Função para atualizar a lista de amigos_
    Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector() para selecionar a lista onde os amigos serão exibidos.

    Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.

    Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.

    Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.
*/
function atualizarListaAmigos() {
    // Seleciona o elemento da lista usando getElementById
    let lista = document.getElementById('listaAmigos');

    // Limpa a lista existente para evitar duplicados
    lista.innerHTML = "";

    // Percorre o array de amigos usando um loop for
    for (let i = 0; i < listaAmigos.length; i++) {
        // Cria um novo item de lista (<li>) para cada amigo
        let li = document.createElement('li');
        li.textContent = listaAmigos[i]; // Adiciona o nome do amigo

        // Adiciona o novo <li> à lista
        lista.appendChild(li);
    }
}


//Utiliza o botao do html para poder sortear o nome.
function sortearAmigo() {
    let amigoSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigo = listaAmigos[amigoSorteado];
    document.querySelector('#resultado').textContent = `Amigo sorteado: ${amigo} 🎁`;
}