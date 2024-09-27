const btn_stop = document.getElementById('stop');
const btn_start = document.getElementById('start');

// Função para mostrar o loading
function showLoading() {
    loading.style.display = 'block';
}

// Função para esconder o loading
function hideLoading() {
    loading.style.display = 'none';
}

btn_stop.addEventListener('click', () => {
    console.log('Clicou em stop');
    showLoading();
    try {
        window.commands.executarComando('stop-spooler', 'net stop Spooler');
    } catch (error) {
        hideLoading();
        console.error(error);
    }
});

btn_start.addEventListener('click', () => {
    console.log('Clicou em start');
    showLoading();
    try {
        window.commands.executarComando('start-spooler', 'net start Spooler');
    } catch (error) {
        hideLoading();
        console.error(error);
    }
});

// Receber o retorno dos comandos de forma genérica
window.commands.onComandoExecutado('stop-spooler', (message) => {
    console.log('Resposta Stop:', message);
    alert('Rodou stop: ' + message); 
});

window.commands.onComandoExecutado('start-spooler', (message) => {
    console.log('Resposta Start:', message);
    alert('Rodou start: ' + message); 
});


// btn_req.addEventListener('click', () => {
//     window.api.reqDados();
// });


// function showSoma(result){
//     const title = document.createElement('h1');
//     title.textContent = result
//     document.body.appendChild(title); 
//     console.log(result)
// }

// window.api.resDados((data) => {
//     console.log('Dados recebidos do main:', data);

//     showSoma(data);
    
// });






