require('dotenv').config();
const { Client } = require('guilded.js');
const { Collection } = require('@discordjs/collection');

const client = new Client({
    token: process.env["TOKEN"]
});

module.exports = client;

// Global Variables
client.commands = new Collection();

require('./handler')(client);

client.login();