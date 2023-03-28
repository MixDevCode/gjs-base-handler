const { Client, Message } = require('guilded.js');

module.exports = {
    name: 'ping',
    description: 'Pings the bot.',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        message.send('Loading data...').then(async (msg) => {
            msg.delete();
            return message.send(`🏓Latency is ${msg._createdAt - message._createdAt}ms.`);
        });
    }
}