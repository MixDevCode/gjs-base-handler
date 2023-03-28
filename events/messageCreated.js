const client = require('../index');

client.on('messageCreated', async (message) => {

    if (message.author && message.author.raw.type == 'bot') return;

    if (!message.content.toLowerCase().startsWith(process.env["PREFIX"])) return;

    const [cmd, ...args] = message.content.substring(process.env["PREFIX"].length).split(/ +/g);
        
    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));
    
    if (!command) return;

    message.channel ??= await client.channels.fetch(message.channelId);
    await command.run(client, message, args);
})