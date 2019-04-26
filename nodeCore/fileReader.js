const fs = require('fs').promises;
const path = require('path');

async function readConfig(...fileName) {
    const pathToFile = path.join(__dirname, '/temp/', ...fileName);

    const fileData = await fs.readFile(pathToFile);
    return JSON.parse(fileData);
}

module.exports = {
    readConfig
};