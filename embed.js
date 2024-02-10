var chatbot = document.currentScript.getAttribute('chatbot');
var sbx = document.currentScript.getAttribute('sbx');

// Carregue o script do Lottie Player no cabeÃ§alho do documento
var script = document.createElement('script');
script.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
script.type = "module";
document.head.appendChild(script);

document.addEventListener("DOMContentLoaded", function() {

    // Adicionando estilos personalizados para substituir o Tailwind
    var styles = `
    .chatbot-window {
        position: fixed;
        bottom: 70px;
        right: 40px;
        width: calc(100% - 40px);
        min-width: 200px;
        max-width: 430px;
        height: calc(80% - 40px);
        max-height: 700px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, opacity 0.3s ease;
        transform: translateY(100%) scale(0.9);
        opacity: 0;
        z-index: 9999;
        overflow: hidden;
        pointer-events: none;
    }

    @media screen and (max-width: 480px) {
        .chatbot-window {
            right: 20px;
            left: 20px;
            bottom: 70px;
        }
    }

    .chatbot-window.open {
        transform: translateY(0) scale(1);
        opacity: 1;
        pointer-events: auto;
    }

    .chatbot-button {
        position: fixed;
        bottom: 30px;
        right: 20px;
        width: 56px;
        height: 56px;
        background-color: #000;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 24px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        z-index: 10000;
    }

    .chatbot-button:hover {
        background-color: #111;
    }

    .chatbot-body {
        height: 100%;
        overflow: hidden;
    }

    iframe {
        width: 100%;
        height: 100%;
        border: none;
    }
    `;

    var styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    var chatbotWindow = document.createElement('div');
    chatbotWindow.id = 'chatbotWindow';
    chatbotWindow.className = 'chatbot-window';

    var chatbotBody = document.createElement('div');
    chatbotBody.className = 'chatbot-body';

    var chatbotIframe = document.createElement('iframe');
    chatbotIframe.id = 'chatbotIframe';
    if (sbx === 'true') {
        chatbotIframe.src = 'https://i-doit.app/version-test/chat/' + chatbot;
    } else {
        chatbotIframe.src = 'https://i-doit.app/version-live/chat/' + chatbot;
    }
  

    chatbotBody.appendChild(chatbotIframe);
    chatbotWindow.appendChild(chatbotBody);

    document.body.appendChild(chatbotWindow);

    var openButton = document.createElement('div');
    openButton.id = 'openButton';
    openButton.className = 'chatbot-button';
    openButton.innerHTML = `
        <dotlottie-player src="https://lottie.host/0d7688dd-db24-487a-ac86-6f6d2a167cb4/IJ9krcj99M.json" background="transparent" speed="1" style="width: 70px; height: 70px;" loop autoplay></dotlottie-player>`;
    document.body.appendChild(openButton);

    openButton.addEventListener('click', function() {
        if(chatbotWindow.classList.contains('open')) {
            chatbotWindow.classList.remove('open');
            openButton.innerHTML = `
                <dotlottie-player src="https://lottie.host/0d7688dd-db24-487a-ac86-6f6d2a167cb4/IJ9krcj99M.json" background="transparent" speed="1" style="width: 70px; height: 70px;" loop autoplay></dotlottie-player>`;
        } else {
            chatbotWindow.classList.add('open');
            openButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" style="margin: auto; display: block;">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>`;
        }
    });
});