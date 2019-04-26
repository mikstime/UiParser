const {ipcMain} = require('electron');
const fileReader=  require('./fileReader');

ipcMain.on('ui-config-request', async (event, moduleName) => {
    const moduleConfig = await fileReader.readConfig(moduleName + "Config.json");
    event.sender.send('ui-config-reply',moduleConfig);
});

module.exports = {};