const Discord = require('discord.js');
const client = new Discord.Client();

// Botunuzun ön ekini belirleyin
const prefix = '!';

// Bot başlatıldığında çalışacak olay
client.once('ready', () => {
    console.log(`${client.user.tag} is ready to go!`);
});

// Örnek bir komut
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'merhaba') {
        message.channel.send(`Merhaba, ${message.author}!`);
    }
});

// Botu başlat
client.login('TOKEN');
