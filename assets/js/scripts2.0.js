//Declarando os elementos do Dom
const elements = {
    //Controles do container de input texto
    textInput: document.getElementById('text_input'),
    btnCriptografar: document.getElementById('btn_cripto'),
    btnDescriptografar: document.getElementById('btn_descripto'),
    
    //controles do container de resposta
    containerResult: document.getElementById('container_result'),
    textResult: document.getElementById('text_result'),
    btnCopy: document.getElementById('btn_copy'),
    
    //controles do container de mensagem
    containerMens: document.getElementById('container_mens'),
    h2: document.getElementById('result_title'),
    p: document.getElementById('result_mens'),
    
    //controles da encriptação e descriptação da senha
    hashTable: {},
}
/*
//Bloqueando botões
window.onload = function() {
    elements.btnCriptografar.disabled = true;
    elements.btnDescriptografar.disabled = true;
    elements.btnCopy.disabled = true;
}
*/
// Função mensagem 
function updateMessage(evento) {
    // Pega o botão que disparou o evento
    let botao = evento.target;
    // Verifica se o valor de textInput é uma string vazia
    if(elements.textInput.value == '') {
        // Se for, atualiza o texto de h2
        elements.h2.textContent = 'Nenhuma mensagem encontrada';
        // E atualiza o texto de p
        elements.p.textContent = `Por favor, digite algo para ${botao.value.toLowerCase()}.`; 
        //Desbloqueia os elementos da mensagem
        elements.h2.style.display = 'flex';
        elements.p.style.display = 'flex';
        //Resseta as div´s textárea
        elements.containerResult.style.display = 'none';
        elements.containerMens.style.display = 'block';
        elements.textInput.value= ''; // Limpa o textIput
    }
}

// Função para criptografar a mensagem
function criptoMessage(evento) {
    if(elements.textInput.value != '') {
        //desabilitar o botão Descriptografar
        elements.btnDescriptografar.disabled = true;
        // Pega o valor do textInput
        let message = elements.textInput.value;

        // Cria um hash SHA256 da mensagem
        let hash = CryptoJS.SHA256(message);

        // Converte o hash para uma string hexadecimal
        let hashHex = hash.toString(CryptoJS.enc.Hex);

        //Armazena a mensagem original no hashTable usando HASH como chave
        elements.hashTable[hashHex] = message;

        // Copia o hash para o textResult e limpa o textInput
        elements.textResult.textContent = hashHex;
        elements.textInput.value= ''; // Limpa o textIput

        // Imprime o hash no console
        console.log(hashHex);

        // Alterna a visibilidade das divs
        elements.containerResult.style.display = 'block';
        elements.containerMens.style.display = 'none';
    }
}
// Função para copiar a mensagem criptografada para a textInput
function copyMessage() {
    //Copia a mensagem para o textInput
    elements.textInput.value = elements.textResult.textContent;

    // Limpa o textResult
    elements.textResult.textContent = "";

    //Desabilita botões
    elements.btnCriptografar.disabled = true;
    elements.btnCopy.disabled = true;

    //Habilita botão
    elements.btnDescriptografar.disabled = false;
}
//Função para Descriptografar a mensagem
function decriptoMessage() {
    elements.btnCriptografar.disabled = false;
    elements.btnCopy.disabled = true;

    let hashHex = elements.textInput.value;

    // Busca a mensagem original usando o hash
    let message = elements.hashTable[hashHex];

    if (message) {
        elements.textResult.textContent = message;
        elements.textInput.value = "";
    } else {
        elements.textResult.textContent = "Hash não encontrado";
    }
}

function handleClick(evento) {
    // Pega o botão que disparou o evento
    let botao = evento.target;

    if(elements.textInput.value == '') {
        updateMessage(evento);
    } else {
        if (botao.id === 'btn_cripto') {
            criptoMessage(evento);
        } else if (botao.id === 'btn_descripto') {
            decriptoMessage(evento);
        }
    }
}

// Adiciona eventos de clique aos botões
elements.btnCriptografar.addEventListener('click', handleClick);
elements.btnDescriptografar.addEventListener('click', handleClick);
elements.btnCopy.addEventListener('click', copyMessage);

