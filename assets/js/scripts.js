// Mapeamento de letras para palavras
const swapWords = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
};

// Seleção de elementos do DOM
const elements = {
    inputTextArea: document.querySelector('.section-main-input'),
    encodeButton: document.querySelector('.btn-criptografar'),
    decodeButton: document.querySelector('.btn-descriptografar'),
    resultContainer: document.querySelector('.section-result-card'),
    copyButton: document.querySelector('.btn-copy'),
    resultTextArea: document.querySelector('.section-result-output'),
    startResultContainer: document.querySelector('.section-result-start'),
    alertMessage: document.getElementById('errorMessage'),
    encryptedText: '',
}

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
function validateText() {
    const isValid = /^[a-z\s]+$/i.test(elements.encryptedText);
    console.log('Texto válido:', isValid);
    return isValid;
}


// Função para exibir uma mensagem de entrada inválida
function invalidEntry() {
    elements.alertMessage.style.display = 'block'; // Exibe a mensagem de erro
    elements.alertMessage.style.color = 'red'; // Define a cor do texto como vermelho
    elements.inputTextArea.focus();

    setTimeout(() => {
        elements.alertMessage.style.display = 'none'; // Oculta a mensagem de erro após 1500 milissegundos
        elements.alertMessage.style.color = '#495057'; // Restaura a cor original do texto
        elements.inputTextArea.value = ''; // Limpa o conteúdo da inputTextArea
    }, 1500);
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
// Evento de clique para copiar o texto
elements.copyButton.onclick = () => {
    navigator.clipboard.writeText(elements.encryptedText).then(() => {
        elements.inputTextArea.value = elements.encryptedText; // Define o valor da inputTextArea como o texto copiado
        elements.inputTextArea.focus(); // Define o foco na inputTextArea
    }).catch(error => {
        console.error('Erro ao copiar texto: ', error);
    });
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
