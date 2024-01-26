//Declarando os elementos do Dom

const elements = {
    //Controles do container de input texto
    textInput: document.getElementById('text_input'),
    btnCriptografar: document.getElementById('btn_cripto'),
    btnDescriptografar: document.getElementById('btn_cripto'),

    //controles do container de resposta
    containerResult: document.getElementById('container_result'),
    textResult: document.getElementById('text_result'),
    btnCopy: document.getElementById('btn_copy'),

    //controles do container de mensagem
    containerMens: document.getElementById('container_mens'),
    h2: document.getElementById('result_title'),
    p: document.getElementById('result_mens'),
}
console.log(elements);

// Função para verificar se a área de texto está vazia
function updateMessage(evento) {
    // Pega o botão que disparou o evento
    let botao = evento.target;

    // Verifica se o valor de textInput é uma string vazia
    if(textInput.value === '') { 
        // Se for, atualiza o texto de h2
        h2.textContent = 'Nenhuma mensagem encontrada';
        // E atualiza o texto de p
        p.textContent = `Por favor, digite algo para ${botao.value.toLowerCase()}.`; 
    }
}

// Adiciona eventos de clique aos botões
btnCriptografar.addEventListener('click', updateMessage); 
btnDescriptografar.addEventListener('click', updateMessage); 



//Imprimindo mensagem
/* Adicionando ouvintes de eventos aos botões
elements.encodeButton.addEventListener('click', function() {
    showResultCard('valor para criptografar');
    updateMessage('Nenhuma mensagem encontrada', 'Digite a mensagem que deseja criptografar');
});
elements.decodeButton.addEventListener('click', function() {
    showResultCard('valor para descriptografar');
    updateMessage('Nenhuma mensagem encontrada', 'Digite a mensagem que deseja descriptografar');
});
elements.copyButton.addEventListener('click', function() {
    showResultCard('valor para copiar');
    updateMessage('Nenhuma mensagem encontrada', 'Digite a mensagem que deseja copiar');
});

// Função para atualizar a mensagem
function updateMessage(h2Text, pText) {
    const h2Element = document.querySelector('.section_container_result_start h2');
    const pElement = document.querySelector('.section_container_result_start p');

    h2Element.textContent = h2Text;
    pElement.textContent = pText;
}





/*
// Mapeamento de letras para palavras
const swapWords = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
};

*/
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