const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')
const { ipcMain } = require('electron')
const commands = require('../commands')

console.log(path.join(__dirname))

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, './preload.js'),
      contextIsolation: true, 
      enableRemoteModule: false
    }
  })

  win.loadFile(path.join(__dirname, '../renderer/index.html'));
}

app.whenReady().then(() => {
  createWindow()

  ipcMain.on('executar-comando', async (event, commandName, commandString) => {
    try {
      const commandResult = await commands.allCommands(commandString);
      console.log(`Rodando comando ${commandName}:`, commandResult);
      event.sender.send(`comando-${commandName}`, commandResult);
    } catch (error) {
      console.error(`Erro ao rodar o comando ${commandName}: ${error}`);
      event.sender.send(`comando-${commandName}`, `Erro ao executar ${commandName}: ${error.message}`);
    }
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})