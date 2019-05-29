const {ipcMain}  = require('electron');
const fileReader = require('./fileReader');
const {BrowserWindow} = require('electron');
ipcMain.on('ui-config-request', async (event, moduleName) => {
    const moduleConfig = await fileReader.readConfig(moduleName + "Config.json");
    event.sender.send('ui-config-reply',moduleConfig);
});
ipcMain.on('modal-module-request', async (event, moduleName) => {
    const moduleConfig = await fileReader.readConfig(moduleName + "Config.json");
    event.sender.send('modal-module-reply', moduleConfig)
});
module.exports = {};