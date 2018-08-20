const Discord = require('discord.js');
const client = new Discord.Client();
const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;
const prefix = "!";

clbot.configure({botapi: "CC5ehFJkHVDXtn5xWK2FdJ1YfqA"});

client.on('ready', () => {
  client.user.setPresence({ game: { name: 'ShaiyaUnite.org'}});
  console.log('Bot activated');

});


///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////

// MESSAGE De Bienvenue //




client.on('guildMemberAdd', member => {
  let channel  = member.guild.channels.find('name', 'logs');
  //let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(`${member.user.avatarURL}`)
      .addField(':bust_in_silhouette: | name : ', `${member}`)
      .addField(':microphone2: | Welcome!', `Welcome to the server, ${member}`)
      .addField(':id: | User :', "**[" + `${member.id}` + "]**")
      .addField(':family_mwgb: | You are the member', `${member.guild.memberCount}`)
      .addField("Name", `<@` + `${member.id}` + `>`, true)
      .addField('Server', `${member.guild.name}`, true)
      .setFooter(`${member.guild.name}`)
      .setTimestamp()

      channel.send(embed);
});

client.on('guildMemberAdd', member => {

  console.log(`${member}`, "has joined" + `$member.guild.name`)
});




client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;

  let weeb = new Discord.RichEmbed()
    .setAuthor("Unite Bot", "https://i.imgur.com/oWBMCKP.png")
//    .setAuthor(member.guild.get("481104131080192010").avatarURL)
//    .setAuthor(client.users.get("481104131080192010").avatarURL)
//  .setAuthor(member.user.username, member.user.avatarURL)
  .setTitle('Greetings adventurers!')
  .setColor('#F5DEA4')
  .setThumbnail(`${member.user.avatarURL}`)
  .setDescription(`Welcome to the official Shaiya Unite Discord server, ${member.user.username}!
Please make sure to read #rules-and-info.
If you have any questions do not hesitate to use the #support channel.`)
  .setFooter('Shaiya Unite')
  .setTimestamp()

channel.send(weeb);

});


// Auto role join //

client.on('guildMemberAdd', member => {
  var role = member.guild.roles.find('name', 'Member');
  member.addRole(role);
});






///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////

client.on('message', async message => {
  if (message.author.bot) return;

///////////////////////////////////////////

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

if (message.content.includes("376145584970792960")) {
  clbot.write(message.content, (response) => {
    message.channel.startTyping();
    setTimeout(() => {
      message.reply(response.output).catch(console.error);
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000);
  });
}


});
///////////////////////////////////////////////////////////////////////////////
client.login("NDgxMTA0MTMxMDgwMTkyMDEw.DlxfBg.Uqia4FMl49h9nlmR4_U9OHqlUJo");