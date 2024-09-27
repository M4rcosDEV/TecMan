const { exec } = require('child_process')
const path = require('path')


function allCommands(command) {
    return new  Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Erro ao executar comando: ${error.message}`);
                reject(`Erro: ${error.message}`);
            }else if(stderr){
                console.error(`Erro ao executar comando: ${stderr}`);
                reject(`Erro: ${stderr}`);
            }else{
                console.log(`Comando executado com sucesso: ${command}`)
                resolve(stdout);
            }
        })
    })
}

function commandSpoolRestart() {
    // Reiniciar o serviço de spooler de impressão
    const command = 'net stop Spooler'

    return new  Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Erro ao executar comando: ${error.message}`);
                reject(`Erro: ${error.message}`);
            }else if(stderr){
                console.error(`Erro ao executar comando: ${stderr}`);
                reject(`Erro: ${stderr}`);
            }else{
                console.log(`Comando executado com sucesso: ${command}`)
                resolve(stdout);
            }
        })
    })


}

function commandRegRegisterPrint() {
    //  Registar o no regedit CMD print

}

function commandSpoolStop() {
    // Parar o serviço de spooler de impressão

}

function commandSpoolInit() {
    // Iniciar o serviço de spooler de impressão

}

module.exports = {
    allCommands
}
