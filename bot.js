const Discord = require('discord.js');
const bot = new Discord.Client();
const auth = require('./settings.js');

bot.on('message', (message) => {
    if (message.author.id !== bot.user.id) return;
    if (message.content.startsWith(auth.prefix)) return;
    let commmand = message.content.slice(auth.prefix.length);
    let split = command.split(" ");
    command = split[0];
    split.shift();
    let code = split.join(" ");
    if (message.content.startsWith('eval')) {
        try {
        let ev = eval(code);
        
        } catch(err) {
            message.channel.sendMessage('```js\n'+err+"```")
        }
    }
})