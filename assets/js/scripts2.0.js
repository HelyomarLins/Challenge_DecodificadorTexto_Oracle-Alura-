//Declarando os elementos do Dom

const elements = {
    inputTextArea: document.querySelector('.section_main_input');
    btnCriptografar: document.querySelector('.btn-criptografar');
    btnDescriptografar: document.querySelector('.btn-descriptografar');
    copyButton: document.querySelector('.btn-copy');
    resultContainer: document.querySelector('.section_container_result_card');
    startResultContainer: document.querySelector('.section_container_result_start');
    resultTextArea: document.querySelector('.section_container_result_output');
    h2 = document.querySelector('.section_container_result_start h2');
    p = document.querySelector('.section_container_result_start p');
}
// Função para alternar a exibição das divs
function alternarDivs() {
    if(resultContainer.style.display === 'none') {
        resultContainerection_container_result_card.style.display = 'block';
        section_container_result_start.style.display = 'none';
    }
}
//Verifica inout vazio
function verificarTextoVazio(evento) {
    let botao = evento.target;
    if(inputTextArea.value != '') {
        h2.textContent = 'Nenhuma mensagem encontrada';
        p.textContent = `Por favor, digite algo para ${botao.value.toLowerCase()}.`;
    }
}
//Codificaa mensagem
function codificarMensagem() {
    let mensagem = inputTextArea.value;
    let mensagemCodificada = btoa(mensagem);
    return mensagemCodificada;
}

// Você pode chamar a função codificarMensagem() quando necessário
let mensagemCodificada = codificarMensagem();
console.log(mensagemCodificada); // Imprime a mensagem codificada no console

// Adiciona eventos de clique aos botões
btnCriptografar.addEventListener('click', function(){
     verificarTextoVazio();
     codificarMensagem();
     alternarDivs()
    });
btnDescriptografar.addEventListener('click', verificarTextoVazio);






/*
// Função para codificar o texto
function codeText (value) {
    return Array.from(value.toLocaleLowerCase())
    .map( (i) => swapWords[i] ?? i)
    .join('');
}

// Função para decodificar o texto
function decodeText(text) {
    const reverseWords = Object.fromEntries(
      Object.entries(swapWords).map(([k, v]) => [v, k])
    );
    Object.keys(reverseWords).forEach((k) => {
      text = text.split(k).join(reverseWords[k]);
    });
    return text;
}

// Função para validar o texto
function validateText () {
    return elements.encryptedText.match(/^[a-z\s]+$/i);
}

// Função para exibir uma mensagem de entrada inválida
function invalidEntry () {
    elements.alertMessage.style.color = 'red';
    setTimeout( () => {
        elements.alertMessage.style.color = '#495057';
    }, 500);
}

// Função para exibir o resultado vazio
function showResultEmpty() {
    elements.resultContainer.style.display = 'none';
    elements.startResultContainer.style.display = 'flex';
}

// Função para exibir o cartão de resultado
function showResultCard (value) {
    elements.resultTextArea.value = value;
    elements.startResultContainer.style.display = 'none';
    elements.resultContainer.style.display = 'flex';
}

// Evento de clique para copiar o texto
elements.copyButton.onclick = () => {
    navigator.clipboard.writeText(elements.encryptedText);
};

// Evento de clique para codificar o texto
elements.encodeButton.onclick = () => {
    elements.encryptedText = elements.inputTextArea.value;
    if (!validateText()) {
        showResultEmpty()
        return invalidEntry();
    }
    elements.encryptedText = codeText(elements.encryptedText);
    elements.inputTextArea.value = '';
    showResultCard(elements.encryptedText);
};

// Evento de clique para decodificar o texto
elements.decodeButton.onclick = () => {
    elements.encryptedText = elements.inputTextArea.value;

    if (!validateText()) {
        showResultEmpty()
        return invalidEntry();
    }
    elements.encryptedText = decodeText(elements.encryptedText);
    elements.inputTextArea.value = '';
    showResultCard(elements.encryptedText);
};
*/