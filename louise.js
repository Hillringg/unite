const Discord = require('discord.js');
const http = require("http");
const https = require("https");
const client = new Discord.Client();
const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;
const settings = require('../settings.json')

clbot.configure({botapi: "CC5ehFJkHVDXtn5xWK2FdJ1YfqA"});

const prefix = '!';

client.on('ready', () => {
  client.user.setPresence({ game: { name: 'prendre un café'}});
  console.log('Louise prête :louise:');
  //client.user.setPresence({ status: 'online', game: { name: "servir l'armée", type: 0 } });

  const suppression = async () => {
    try {

      var membersID = client//.guilds.get("334111297740472322")
        .users
        .array();
      console.log(membersID);

      for (var i = 3; i < membersID.length; i++) {
        console.log(membersID[i]);
        var member = client.users.get(membersID[i]);
        console.log(member);
        var DMChannel = await member.createDM();
        console.log(DMChannel);
        console.log(DMChannel.lastMessageID);
        if (DMChannel.lastMessageID == null) continue;
        console.log(DMChannel.fetchMessage(DMChannel.lastMessageID));
        var lastMessage = await DMChannel.fetchMessage(DMChannel.lastMessageID);
        //if (!lastMessage) continue;
        console.log(lastMessage);
        //lastMessage.delete();
        //console.log(`#${i} Message supprimé pour ${member.username}`);
        //DMChannel.fetchMessage(DMChannel.lastMessageID).then(message => message.delete()).catch(console.error);
      }

    } catch (e) {

    } finally {

    }
  }
  //suppression();

  //console.log(typhoon.dmChannel);
  //typhoon.deleteDM();

});

client.on('message', async message => {

  if (message.author.bot) return; //Ignore les messages des bots


//ROULETTE//

  var fortunes = [
    "Red !",
    "Black !",
  ];

  if (message.content === prefix + "rl"){
    message.reply(fortunes[Math.floor(Math.random() * fortunes.length)]);
  };

//REACTIONS DANS LES SALONS

  if (message.content.toLowerCase().includes('chance') ){
    //message.react('336568432700948481'); //:larry:
  }

  if (message.content.toLowerCase().includes('louise') ){
    //message.react('382644670511185921'); //:louise: 382644670511185921
  }

//  var input2 = message.content.toUpperCase();
  //  if (input2 === "LOUISE"){
    // message.react('382587451488600065')
    //};

  if (message.content === "<:louise:382587451488600065>"){
    message.channel.send('<:louise:382587451488600065>');
  };

  // var input = message.content.toUpperCase();
    // if (input === prefix + "PING"){
      //message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
      // console.log('ping pong');
    // };

   var input = message.content.toUpperCase();
   if (input === "LOUISE"){
     message.channel.send("La sainte et divine Louise");
   };

   if (message.content.toLowerCase().match(/\brap\b/) ){
     message.channel.send('The ting go skrrrra pap pap cla cla cla skiddikipapap and the br br brrr boom skyyya du du ku ku du doom poom poom');
   };

  if (message.content === prefix + "avatar"){
    var avatar_embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle('Avatar')
      .setColor('#FF8000')
      .setImage(message.author.avatarURL);
    message.channel.sendEmbed(avatar_embed);
  }


//CLEVERBOT

  if (message.mentions.users.has(client.user.id) || message.channel.type === "dm" ) {
    clbot.write(message.content, (response) => {
      message.channel.startTyping();
      setTimeout(() => {
        message.reply(response.output).catch(console.error);
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
    });
  }


//GESTIONS DES MESSAGES

  var dateRaw = new Date();
  var dateString = `[${dateRaw.getDate()}/${dateRaw.getMonth()}/${dateRaw.getFullYear()}][${dateRaw.getHours()}:${dateRaw.getMinutes()}:${dateRaw.getSeconds()}]`;

  if (message.channel.type === "dm"){
    console.log(`\n${dateString} NOUVEAU MESSAGE PRIVE`);
    console.log(`${message.author.username}#${message.author.discriminator}: ${message.content}`);

    const typhoon = client.users.get("293076332080922634");
    //const yuwee = client.users.get("231764800282034177");
    var envoi = `${message.author}(${message.author.username}#${message.author.discriminator}): ${message.content}`
    typhoon.send(envoi);
    //yuwee.send(envoi);
    return 0;
  }

  else if (message.mentions.users.has(client.user.id)) {
    console.log(`\n${dateString} NOUVELLE MENTION`);
    console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username}: ${message.content}`);
    //message.react("363634556131082242");
    return 0;
  }


//COMMANDES

  if (message.content.indexOf(prefix) !== 0) return; //Ignore les messages non command ('! ...')
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


});

client.login(settings.louise);
