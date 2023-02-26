const { Client } = require('guilded.js');
require('dotenv').config();

const client = new Client({
    token: process.env.TOKEN
});

module.exports = client;

// Global Variables
client.commands = new Map();

require('./handler')(client);

client.login();