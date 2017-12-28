const Discord = require('discord.js');
const client = new Discord.Client();
const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;
const prefix = "!";

clbot.configure({botapi: "CLBOT_API"});

client.on('ready', () => {
  client.user.setPresence({ game: { name: 'discord.io/PixelGroin'}});
  console.log('Gruik Gruiiiikk gruikk');

});



///////////////////////////////////////////////////////////////////////////////

// MESSAGE De Bienvenue //

client.on('guildMemberAdd', member => {
let guild = member.guild;

guild.defaultChannel.sendMessage(`Bienvenue chez PixelGroin ${member.user} !
PixelGroin est une faction dédié au cochon, notre base se trouve ici : http://pixelcanvas.io/@3456,1717. <:staline:383750249669328900>
N'hésite pas à te présenter et à lire #regles-et-informations. <:smiling:383900458638508032>


Welcome to PixelGroin ${member.user} !
PixelGroin is a friendly faction dedicated to pork, our headquarters is here : http://pixelcanvas.io/@3456,1717. <:staline:383750249669328900>
Don't forget to introduce yourself and read #regles-et-informations. <:smiling:383900458638508032>`)
console.log(`${member.user.username} has joined`);
});


// Message de départ //

client.on('guildMemberRemove', member => {
let guild = member.guild;

guild.defaultChannel.sendMessage(`${member.user} a quitté le serveur !`);

});



///////////////////////////////////////////

client.on('message', async message => {
  if (message.author.bot) return;

///////////////////////////////////////////

// Messages répétés //

if (message.content === "$loop") {
    var interval = setInterval (function () {
      message.channel.sendMessage("Gruik Gruiiiik gruik <:jeveux:383744378566475776> ")
    }, 1 * 1200000);
console.log('Loop on');
  }


if (message.content === "$loop") {
  var interval = setInterval (function () {
    message.channel.sendMessage(`N'oubliez pas de nous aider à faire notre QG ici http://pixelcanvas.io/@3290,1619,
le CD est seulement de 10 secondes ! <:smiling:383900458638508032>`)
  }, 1 * 900000);
console.log('Loop on');
}


// Avatar commande //

let TaggedUser = message.mentions.users.first();

if (message.content === prefix + "avatar"){
  var avatar_embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle('Avatar')
    .setColor('#E87474')
    .setImage(message.author.avatarURL)
    message.channel.sendEmbed(avatar_embed);
 return;
}


if (message.content.includes('!avatar')) {
  var avatar2_embed = new Discord.RichEmbed()
    .setAuthor(TaggedUser.username, TaggedUser.avatarURL)
    .setTitle('Avatar')
    .setColor('#E87474')
    .setImage(TaggedUser.avatarURL)
    message.channel.sendEmbed(avatar2_embed);

}


// CLEVERBOT //

if (message.content.includes("394197232607559680")) {
  clbot.write(message.content, (response) => {
    message.channel.startTyping();
    setTimeout(() => {
      message.reply(response.output).catch(console.error);
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000);
  });
}


// Purge command //




});

///////////////////////////////////////////////////////////////////////////////
client.login("BOT_TOKEN");
