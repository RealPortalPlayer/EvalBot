const Discord = require('discord.js');
const bot = new Discord.Client();
const auth = require('./settings.js');

bot.on('message', (message) => {
    if (message.author.id !== bot.user.id) return;
    if (!message.content.startsWith(auth.prefix)) return;
    let command = message.content.slice(auth.prefix.length);
    let split = command.split(" ");
    command = split[0];
    split.shift();
    let code = split.join(" ");
    if (command === "eval") {
        try {
        let ev = require('util').inspect(eval(code));
        if (ev.length > 1950) {
            ev = ev.substr(0, 1950);
        }
        let token = auth.token.replace(/\./g, "\.")
        let re = new RegExp(token, 'g') 
        ev = ev.replace(re, "*R-eD-Ac-Te-D-*");
        message.channel.sendMessage("**Input:**```js\n"+code+"```**Eval:**```js\n"+ev+"```")
        } catch(err) {
            message.channel.sendMessage('```js\n'+err+"```")
        }
    }
})

bot.on('ready', () => {
    console.log("Ready To Eval")
})

bot.login(auth.token)