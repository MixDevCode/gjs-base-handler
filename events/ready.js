const client = require('../index');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.name}!`);
});