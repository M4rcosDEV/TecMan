const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  java:  () => process.versions.java
})

contextBridge.exposeInMainWorld('commands', {
  executarComando: (commandName, commandString) => ipcRenderer.send('executar-comando', commandName, commandString),
  
  // Função de callback genérica para receber respostas de qualquer comando
  onComandoExecutado: (commandName, callback) => ipcRenderer.on(`comando-${commandName}`, (event, message) => callback(message)),
});
